import { formDict as addTaskDict } from "./populate-add-tasks.js";
const formDict = {
    title: 'Co-Op Taskmaster',
    sections: [],
    whoDidTask: 'Taskee',
    whenTaskDone: 'Task Date'
}

let tallyInfo = [
  { legend: "Who" },
    {
    question: "",
    name: "action", // if necessary
    label: "", // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "hidden", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: true, // true or false
    // value: "update"
    value: 'write'
    },
    {
    question: formDict.whenTaskDone,
    name: formDict.whenTaskDone, // if necessary
    label: formDict.whenTaskDone, // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "date", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: true, // true or false
    setDate: "today" // date only: "today" or sortable date number
  },
  {
    question: "Co-Op Members Loading",
    name: "member-loading", // if necformNameessary
    label: addTaskDict.addedBy.formName, // if necessary label
    placeholder: "Co-Op Members Loading. . .", // if necessary
    description: "", // if necessary
    type: "text", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: false, // true or false
    startBlank: true, // only for select
  }, // placeholder 

];
formDict.sections.push(tallyInfo);

let viewOptionsSection = [
    {legend: "View"},
    {
    question: "",
    name: "Options", // if necessary
    label: "", // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "checkbox", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [
        'Not Started',
        'In Progress',
        'Complete'
    ], // if necessary from type
    required: false, // true or false
    startBlank: true, // only for select
  }, // placeholder 
]
formDict.sections.push(viewOptionsSection);
let tasksSection = [
    {legend: "Tasks"},

  {
    question: "Tasks Loading",
    name: "task-loading", // if necessary
    label: "", // if necessary label
    placeholder: "Tasks Loading. . .", // if necessary
    description: "", // if necessary
    type: "text", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: false, // true or false
    startBlank: true, // only for select
  }, // placeholder 
]
formDict.sections.push(tasksSection)

let updateSection = [
    {legend: "Status Update"},
{
    question: addTaskDict.newTaskName.formName,
    name: addTaskDict.newTaskName.sheetName, // if necessary
    label: addTaskDict.newTaskName.formName, // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "text", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: false, // true or false
  },
    {
    question: addTaskDict.taskDetails,
    name: "", // if necessary
    label: addTaskDict.taskDetails, // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "textarea", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: false, // true or false
  },
{
    question: addTaskDict.taskTier,
    name: "", // if necessary
    label: addTaskDict.taskTier, // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "select", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: ["1","2","3"], // if necessary from type
    required: true, // true or false
  },
  {
    question: addTaskDict.taskUrgency,
    name: "", // if necessary
    label: addTaskDict.taskUrgency, // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "select", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [
        "low","medium","high"], // if necessary from type
    required: true, // true or false
  },
    {
    question: addTaskDict.taskStatus,
    name: "", // if necessary
    label: addTaskDict.taskStatus, // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "select", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [
        "Not Started","In Progress","Complete"], // if necessary from type
    required: true, // true or false
  },
{
    question: addTaskDict.taskCollaborators.formName,
    name: 'member-loading', // if necessary
    label: addTaskDict.taskCollaborators.sheetName, // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "select", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: true, // true or false
    // startBlank: true, // only for select
    value: addTaskDict.taskCollaborators.sheetName

  },
{
    question: addTaskDict.taskCollaborators.sheetName,
    name: "", // if necessary
    label: "", // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "hidden", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: false, // true or false
  }, // hidden joins  

];
formDict.sections.push(updateSection);

//  form Information
export const taskmasterForm = {
  method: "POST",
  action: 
  "https://script.google.com/macros/s/AKfycbx_dWyLTKlg4ABlyewZ58CbO-1RKaOGzxRFrEXoNYG1te02SaF2DKykN5CPCzaYWR_9Og/exec",
  styleSheet: "../css-sheets/test.css",
  font: "https://fonts.google.com/specimen/Fira+Sans?stroke=Sans+Serif",
  title: formDict.title,
  id: formDict.title.replace(/ /g, "-"),
  description: "",
  sectionArray: formDict.sections,
  submitWheel: '../../assets/svg-images/ouroboros-load-wheel.svg', // check this
  submitMessage: "Submitting. . . Please Wait 🙂",
  submitError: "*Please check fields",
};

// import { HtmlElement } from "../../scripts/htmlElement.js";
// import { populateInputs } from "../../scripts/forms.js";

// let floatingStatusEl = document.createElement('div');
// let newSection = new HtmlElement("fieldset", floatingStatusEl, {
//         id: updateSection[0].legend.replace(/ /g, "-"),
//       }),
//       newLegend = new HtmlElement(
//         "legend",
//         newSection.element,
//         {},
//         updateSection[0].legend
//       );
//     updateSection.slice(1).forEach((obj) => {
//       populateInputs(obj, newSection.element);
//     });
// console.log(floatingStatusEl)
