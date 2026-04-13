import { populateForm, populateInputs } from "../../../scripts/forms.js";
import { getMembers } from './get-co-op.js'
import { getTasks } from "./getTasks.js";
import { taskmasterForm } from "./populate-add-status-update.js";
import { addCoOpMemberForm } from "./populate-add-co-op.js";
import { addCoOpTaskForm } from "./populate-add-tasks.js";
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
  let memberloadingInstance = formWrapperEl.querySelector('[name="member-loading"]');
  let taskloadingInstance = formWrapperEl.querySelector('[name="task-loading"]');
  if (memberloadingInstance !== null){
    preloadInstanceMemberArray.push(memberloadingInstance)
  }
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


let placeholderWhoDidTask = document.getElementsByName('Co-Op Members Loading')[0];

let tasksParentEl = document.getElementById('Tasks');
let placeholderTasks = document.getElementsByName('Tasks Loading')[0];

let membersArray = await getMembers();
const allActiveMembersNames = membersArray.allActive.map(obj => obj['Co-Op Member']);
let tasksArray = await getTasks();
const allActiveTaskNames = tasksArray.map(obj=> obj["Task Name"]);


let floatingMembersEl = document.createElement('div');
let floatingTasksEl = document.createElement('div');

populateInputs(
    {
    question: "Co-Op Member Submitting",
    name: "", // if necessary
    label: "", // if necessary label
    placeholder: "-", // if necessary
    description: "", // if necessary
    type: "select", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: allActiveMembersNames, // if necessary from type
    required: true, // true or false
    startBlank: true, // only for select
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
console.log('replacing preload instances with data. . .')
preloadInstanceMemberArray.forEach(instance =>{
  let loadedEl = floatingMembersEl.firstElementChild.cloneNode(true);
  loadedEl.selectedIndex = -1;
  instance.replaceWith(loadedEl);
})
preloadInstanceTaskArray.forEach(instance =>{
  instance.replaceWith(floatingTasksEl.lastElementChild)
})





