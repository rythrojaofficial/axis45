import { populateForm, populateInputs } from "../../../scripts/forms.js";
import { getMembers } from './get-co-op.js'
import { getTasks } from "./getTasks.js";
import { taskmasterForm } from "./populate-add-status-update.js";
import { addCoOpMemberForm } from "./populate-add-co-op.js";
import { addCoOpTaskForm, formDict } from "./populate-add-tasks.js";
import { generalTapToPopulate } from "../../scripts/general-tap-to-populate.js";
// import { preloadForm } from "./populate-preload.js";


// form wrappers
// =============
let formsArray = [
  taskmasterForm,
  addCoOpMemberForm,
  addCoOpTaskForm
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
// console.log({
//   preloadInstanceMemberArray: preloadInstanceMemberArray
// })
const preloadFormWrapperEl = document.createElement('div');
populateForm(taskmasterForm, preloadFormWrapperEl)

const taskmasterButtonWrapper = document.getElementById('taskmaster-button-wrapper');
const taskmasterDisplayWrapper = document.getElementById('taskmaster-display-wrapper');

generalTapToPopulate(formWrappersArray,taskmasterButtonWrapper,taskmasterDisplayWrapper, '', true)


// let placeholderWhoDidTask = document.getElementsByName('Co-Op Members Loading')[0];

// let tasksParentEl = document.getElementById('Tasks');
// let placeholderTasks = document.getElementsByName('Tasks Loading')[0];

// get data from sheets
// =====================
let membersArray = await getMembers();
const allActiveMembersNames = membersArray.allActive.map(obj => obj['Co-Op Member']);
let tasksArray = await getTasks();
const allActiveTaskNames = tasksArray.map(obj=> obj["Task Name"]);

// create replacements from sheet Data
// ======================
let floatingMembersEl = document.createElement('div');
let floatingTasksEl = document.createElement('div');

populateInputs(
    {
    question: "Co-Op Member(s)",
    name: "Co-Op Members who", // if necessary
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
    placeholder: "test", // if necessary
    description: "", // if necessary
    type: "radio", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: allActiveTaskNames, // if necessary from type
    required: true, // true or false
    startBlank: true, // only for select
  },floatingTasksEl
)

// replacing preloads
// ==================
// console.log('replacing preload instances with data. . .')
preloadInstanceMemberArray.forEach((instance, i) =>{
  let loadedEl = floatingMembersEl.firstElementChild.cloneNode(true);

  if (instance.getAttribute('value') === "Task Collaborators"){
    console.log('collaborators instance')
    console.log({loadedEl:loadedEl});
    loadedEl.name = "Task Collaborators";
  }
  
  loadedEl.selectedIndex = -1;

  instance.replaceWith(loadedEl);
  })

preloadInstanceTaskArray.forEach(instance =>{
  instance.replaceWith(floatingTasksEl.lastElementChild)
})


// event listeners
// ===============

let formDictArray = [
  formDict.newTaskName.sheetName,
  formDict.taskDetails,
  formDict.taskUrgency,
  formDict.taskStatus,
  formDict.taskCollaborators.sheetName
]

let statusUpdateSection = preloadFormWrapperEl.querySelector('#Status-Update');
document.querySelector('body').addEventListener('change', (event) => {
  console.log({clickEvent: event.target.value})
    // Check if the clicked element matches a specific selector
    if (event.target.matches("[name='Tasks']")) {
        // console.log('Dynamic button clicked:', event.target.value);
        const data = tasksArray.find(taskObj => taskObj['Task Name'] === event.target.value);
        console.log({data: data})      
        updateFields(formDictArray, data)

    }
});

function updateFields(fieldsArr, dataObj){
  console.log({message:`updating fields. fields arr : ${fieldsArr}`
    , dataObj:dataObj})
  let dataKeys = Object.keys(dataObj);
  console.log({dataKeys: dataKeys,
    dataObj: dataObj
  })
  fieldsArr.forEach((field) =>{
    console.log({field:field})
    if (dataKeys.includes(field) === false){
      return
    }
    else {
      let tempField = document.querySelector(`[name="${field}"]`);
      let newData = dataObj[field];
      console.log({newData:newData});
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







