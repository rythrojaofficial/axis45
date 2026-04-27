import { populateForm, populateInputs } from "../../../scripts/forms.js";
import { getMembers } from './get-co-op.js'
import { getTasks } from "./getTasks.js";
import { taskmasterForm } from "./populate-add-status-update.js";
import { addCoOpMemberForm } from "./populate-add-co-op.js";
import { formDict } from "./populate-add-tasks.js";
import { generalTapToPopulate } from "../../scripts/general-tap-to-populate.js";
import { HtmlElement } from "../../scripts/htmlElement.js";
import { dashifyToLowerCase } from "../../scripts/dashify.js"
// import { preloadForm } from "./populate-preload.js";


// form wrappers
// =============
let formsArray = [
  taskmasterForm,
  addCoOpMemberForm,
  // addCoOpTaskForm
];
let formWrappersArray = [];
let preloadInstanceMemberArray = [];
let preloadInstanceTaskArray = [];



formsArray.forEach(form=>{
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
    memberloadingInstances.forEach(instance=>{
       preloadInstanceMemberArray.push(instance)

    })
  }
  console.log({preloadInstanceMemberArray:preloadInstanceMemberArray})
  if (taskloadingInstance !== null){
    preloadInstanceTaskArray.push(taskloadingInstance)
  }
})

const preloadFormWrapperEl = document.createElement('div');
populateForm(taskmasterForm, preloadFormWrapperEl)

const taskmasterButtonWrapper = document.getElementById('taskmaster-button-wrapper');
const taskmasterDisplayWrapper = document.getElementById('taskmaster-display-wrapper');

generalTapToPopulate(formWrappersArray,taskmasterButtonWrapper,taskmasterDisplayWrapper, '', true)

// pre-fill View
const viewOptions = document.querySelectorAll("input[name='Options']");
viewOptions.forEach(option =>{
  if (option.value !== 'Complete'){
    option.checked = true;
  }
});

// get data from sheets
// =====================
let membersArray = await getMembers();
const allActiveMembersNames = membersArray.allActive.map(obj => obj['Co-Op Member']);
let tasksArray = await getTasks();
// remove empty tasks
tasksArray = tasksArray.filter(taskObj =>{
    if (taskObj['Task Name'] !== '' && taskObj['TaskID'] !== '') 
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
    required: true, // true or false
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
  let newTaskList = tasksArray.filter(task => task[status] === taskStatus)
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
  optionValues.forEach(option =>{
      let statusArr = addTasksWithStatus(option);
      statusArr.forEach(task =>{
        newTaskList.push(task)
      })
  })
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
floatingDivsArray.forEach(div=>{
  div.classList.add('task-option-div');
  let taskObj = tasksArray.findLast(obj => div.firstElementChild.value === obj['Task Name']);
  let currentStatus = taskObj["Task Status"];
  let statusClass = dashifyToLowerCase(currentStatus);
  let statusIndicator = new HtmlElement('div', div,
    {class: `task-status task-status-${statusClass}`},
    currentStatus

  )
})
return newFloatingTasksEl.lastElementChild; // just the div with options (no label)
}
// replacing preloads
// ==================
// console.log('replacing preload instances with data. . .')

preloadInstanceMemberArray.forEach((instance, i) =>{
  let loadedEl = floatingMembersEl.firstElementChild.cloneNode(true);

  if (instance.getAttribute('value') === formDict.taskCollaborators.sheetName){
    instance.removeAttribute('required');
    console.log('collaborators instance')
    console.log({loadedEl:loadedEl});
    loadedEl.name = formDict.taskCollaborators.sheetName;
    loadedEl.addEventListener('input', (e)=>{
      let selected = Array.from(e.target.selectedOptions)
        .map(option => option.value)
        .join(', ')

      updateFieldTextContent(
        preloadTaskLabel,
        formDict.taskCollaborators.sheetName+': '+selected
      )
    })
  }
  
  loadedEl.selectedIndex = -1;

  instance.replaceWith(loadedEl);
  })

preloadInstanceTaskArray.forEach(instance =>{
  instance.replaceWith(floatingTasksEl.lastElementChild)
})

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
formDictArray.forEach(field =>{
  if (!tasksArray.at(-1)[field]){
    tasksArray.at(-1)[field] = '';
  }
})

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
      if (data.length > 1){
        data = data.at(-1);
      }else { data = data[0]}

      console.log({data: data})     
      updateFields(formDictArray, data);
      break;
    case event.target.matches("[name='Options']"):
      rePopulateTasks();
      // let tasksEl = document.getElementById('Tasks').lastElementChild;
      // tasksEl.replaceWith(populateTasks())
        break;
    default:
      break;
  }


});
function rePopulateTasks(){
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
  fieldsArr.forEach((field) =>{
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
  })
}
function updateField(tempTaskNameField, updatedData){

  if(tempTaskNameField !== null){
      console.log(`updating task.  temp task: ${tempTaskNameField.value || null}, updated data: ${updatedData}`
  )
      tempTaskNameField.value = updatedData
  }
}
function updateFieldTextContent(labelField, updatedText){
  if(labelField === null) return;
  labelField.textContent = updatedText;
}



// to do after load
// ================
rePopulateTasks();
