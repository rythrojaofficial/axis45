import { populateForm, populateInputs } from "../../../scripts/forms.js";
import { getMembers } from './get-co-op.js'
import { getTasks } from "./getTasks.js";
import { taskmasterForm } from "./populate-add-status-update.js";
import { addCoOpMemberForm } from "./populate-add-co-op.js";
import { formDict } from "./populate-add-tasks.js";
import { generalTapToPopulate } from "../../scripts/general-tap-to-populate.js";
import { HtmlElement } from "../../scripts/htmlElement.js";
import { dashifyToLowerCase, titleCase } from "../../scripts/text-utils.js"


// form wrappers
// =============
let formsArray = [
  taskmasterForm,
  addCoOpMemberForm,
];
let formWrappersArray = [];
let preloadInstanceMemberArray = [];
let preloadInstanceTaskArray = [];


for (const form of formsArray){
  const formWrapperEl = document.createElement('div');
  populateForm(form, formWrapperEl);
  formWrappersArray.push(
    {
      name: form.title,
      element: formWrapperEl
    }
  )

  let memberloadingInstances = Array.from(formWrapperEl.querySelectorAll('[name="member-loading"]'));

  let taskloadingInstance = formWrapperEl.querySelector('[name="task-loading"]');
  if (memberloadingInstances !== null){
    for (const instance of memberloadingInstances){
      preloadInstanceMemberArray.push(instance)
    }
  }
  console.log({preloadInstanceMemberArray:preloadInstanceMemberArray})
  if (taskloadingInstance !== null){
    preloadInstanceTaskArray.push(taskloadingInstance)
  }
}

const preloadFormWrapperEl = document.createElement('div');
populateForm(taskmasterForm, preloadFormWrapperEl)

const taskmasterButtonWrapper = document.getElementById('taskmaster-button-wrapper');
const taskmasterDisplayWrapper = document.getElementById('taskmaster-display-wrapper');

generalTapToPopulate(formWrappersArray,taskmasterButtonWrapper,taskmasterDisplayWrapper, '', true)

// pre-fill View
const viewOptions = document.querySelectorAll("input[name='Options']");
for (const option of viewOptions){
    if (option.value !== 'Complete'){
    option.checked = true;
  }
}

// get data from sheets
// =====================
let membersArray = await getMembers();
const allActiveMembersNames = membersArray.allActive.map(obj => obj['Co-Op Member'])
let tasksArray = await getTasks();
// remove empty tasks
tasksArray = tasksArray.filter(taskObj =>{
    if (taskObj['Task Name'] !== '' 
      && taskObj['TaskID'] !== ''
    ) 
      return taskObj
  });
// add task Extra
let addTaskObj = {
  ['Task Name']: 'Add New Task' 
}

tasksArray.push(addTaskObj)
const allActiveTaskNames = [...new Set(tasksArray.map(obj => obj["Task Name"]))];
// console.log({tasksArray: tasksArray})


// create replacements from sheet Data
// ======================
const floatingMembersEl = document.createElement('div');
const floatingTasksEl = document.createElement('div');

populateInputs(
    {
    question: "Co-Op Member(s)",
    name: "Co-Op Members who last added/updated", // if necessary
    label: "", // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "select", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: allActiveMembersNames, // if necessary from type
    required: false, // true or false
    startBlank: true, // only for select
    multiple: true,
  },floatingMembersEl
)
populateInputs(
    {
    question: "Tasks",
    name: "", // if necessary
    label: "", // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "radio", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: allActiveTaskNames, // if necessary from type
    required: true, // true or false
    startBlank: true, // only for select
  },floatingTasksEl
)

function addTasksWithStatus(taskStatus){
  console.log(`checking for tasks with taskStatus: ${taskStatus}`);
  const status = formDict.taskStatus;
  const name = formDict.newTaskName.sheetName;
  const latestTasksArray = [...new Map(
    tasksArray.map(task => [task["Task Name"], task])
    ).values()]; // re-map the tasks so that we only get the latests values
  let newTaskList = latestTasksArray.filter(task => task[status] === taskStatus)
    .map(taskObj => taskObj[name])
  console.log({newTaskList: newTaskList});
  return newTaskList;

}

function populateTasks(){
  console.log('populating tasks. . .')
  let options = Array.from(viewOptions)
  let newFloatingTasksEl = document.createElement('div');
  let newTaskList = [];
  let optionValues = options.filter(options => options.checked === true)
    .map(option => option.value);
  for (const option of optionValues){
      let statusArr = addTasksWithStatus(option);
      for (const task of statusArr){
        newTaskList.push(task)
      }
  }
  let addTaskOption = tasksArray.at(-1)["Task Name"];
  newTaskList.push(addTaskOption)
  populateInputs(
    {
    question: "Tasks",
    name: "", // if necessary
    label: "", // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "radio", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: newTaskList, // if necessary from type
    required: true, // true or false
    startBlank: true, // only for select
  },newFloatingTasksEl
);

  let floatingDivsArray = Array.from(newFloatingTasksEl.lastElementChild.childNodes);
  for (const div of floatingDivsArray){
    div.classList.add('task-option-div');
    let taskObj = tasksArray.findLast(obj => div.firstElementChild.value === obj['Task Name']);
    let currentStatus = taskObj["Task Status"];
    if (!currentStatus === false){
      let statusClass = dashifyToLowerCase(currentStatus);
      const statusIndicator = new HtmlElement('div', div,
        {class: `task-status task-status-${statusClass}`},
        currentStatus
    )
    }
    let currentTier = taskObj["Task Tier"];
    if (!currentTier === false){
      const tierIndicator = new HtmlElement('div', div,
        {class: `task-tier task-tier-${currentTier}`},
        `Tier ${currentTier}`
    )
    }
    let currentUrgency = taskObj["Task Urgency"];
    if(!currentUrgency === false){
      const urgencyIndicator = new HtmlElement('div', div,
        { class:  `task-urgency task-urgency-${currentUrgency}`},
        titleCase(`${currentUrgency} urgency`)
        )
     }
  };
  return newFloatingTasksEl.lastElementChild; // just the div with options (no label)
}
// replacing preloads
// ==================
// console.log('replacing preload instances with data. . .')
for (const instance of preloadInstanceMemberArray){
  let loadedEl = floatingMembersEl.firstElementChild.cloneNode(true);

  if (instance.getAttribute('value') === formDict.taskCollaborators.sheetName){
    // instance.removeAttribute('required');
    console.log('collaborators instance')
    console.log({loadedEl:loadedEl});
    loadedEl.name = formDict.taskCollaborators.sheetName;
    // loadedEl.removeAttribute('required');
    loadedEl.addEventListener('input', (e)=>{
      let selected = Array.from(e.target.selectedOptions)
        .map(option => option.value)
        .join(', ');

      updateFieldTextContent(
        preloadTaskLabel,
        formDict.taskCollaborators.sheetName+': '+selected
      )
    })
  }
  
  loadedEl.selectedIndex = -1;
  loadedEl.removeAttribute('required')

  instance.replaceWith(loadedEl);
}
for (const instance of preloadInstanceTaskArray){
  instance.replaceWith(floatingTasksEl.lastElementChild)
}

const preloadTaskLabel = Array.from(document.querySelectorAll("label[for='member-loading']"))
  .find(l => l.textContent.includes(formDict.taskCollaborators.sheetName))
preloadTaskLabel.setAttribute('for', formDict.taskCollaborators.sheetName)


// Task fields
// ==================
let formDictArray = [
  formDict.newTaskName.sheetName,
  formDict.taskDetails,
  formDict.taskUrgency,
  formDict.taskTier,
  formDict.taskStatus,
  formDict.taskCollaborators.sheetName,
  formDict.taskID
]


// clear option: 'Add Task'
for (const field of formDictArray){
  if (!tasksArray.at(-1)[field]){
    tasksArray.at(-1)[field] = '';
  }
}

// event listeners
// ===============
document.querySelector('body').addEventListener('change', (event) => {
  console.log({clickEvent: event.target.value})
  let data;  
  // Check if the clicked element matches a specific selector
  switch(true){
    case event.target.matches("[name='Tasks']"):
      // console.log('Dynamic button clicked:', event.target.value);
      data = tasksArray.filter(taskObj => taskObj['Task Name'] === event.target.value);
      console.log({clickDataFiltered:data})
      if (data.length > 1){
        data = data.at(-1);
      }else { data = data[0]}

      console.log({data: data})     
      updateFields(formDictArray, data);
      break;
    case event.target.matches("[name='Options']"):
      rePopulateTasks();
        break;
    default:
      break;
  }


});
function rePopulateTasks(){
    console.log('repopulateTasks() called. . .')
    let tasksEl = document.getElementById('Tasks').lastElementChild;
    tasksEl.replaceWith(populateTasks())
}

function updateFields(fieldsArr, dataObj){
  console.log({message:`updating fields. fields arr : ${fieldsArr}`
    , dataObj:dataObj})
  let dataKeys = Object.keys(dataObj);
  console.log({dataKeys: dataKeys,
    dataObj: dataObj
  })
  for (const field of fieldsArr){
    if (dataKeys.includes(field) === false){
      return
    }
    if (field === formDict.taskCollaborators.sheetName){
      updateFieldTextContent(
        document.querySelector(`label[for="${formDict.taskCollaborators.sheetName}"]`),
        formDict.taskCollaborators.sheetName+': '+dataObj[field]
      );
    }
    else {
      let tempField = document.querySelector(`[name="${field}"]`);
      let newData = dataObj[field];
      console.log({field: field, newData:newData});
      updateField(tempField, newData);
    }
  }
}
function updateField(tempTaskNameField, updatedData){

  if(tempTaskNameField !== null){
      console.log(`updating task.  temp task: ${tempTaskNameField.value || null}, updated data: ${updatedData}`
  )
    if (updatedData === 'Add New Task'){
      tempTaskNameField.value = '';
    }else{
      tempTaskNameField.value = updatedData
    }
  }
}
function updateFieldTextContent(labelField, updatedText){
  if(labelField === null) return;
  labelField.textContent = updatedText;
}



// to do after load
// ================
rePopulateTasks();
let addTasksRadio = document.getElementById("option Tasks Add New Task")
// console.log({addTasksRadio: addTasksRadio})
addTasksRadio.checked = true; // pre select add new task

