import { populateForm, populateInputs } from "../../../scripts/forms.js";
import { getMembers } from './get-co-op.js'
import { getTasks } from "./getTasks.js";
import { HtmlElement } from "../../scripts/htmlElement.js";


const formDict = {
    whoDidTask: 'Taskee',
    whenTaskDone: 'Task Date'
}

// let sectionPrompts = [
//   { legend: "" },
//   {
//     // title
//     question: "", // this will be .name by default
//     name: "", // if necessary
//     label: "", // if necessary label or legend
//     placeholder: "", // if necessary
//     description: "", // if necessary
//     type: "text", // text, name, (use text for email)email, (use text for phone nubmers)number, checkbox, date, select, radio, hidden(use placeholder text for value)
//     appendedOptions: [], // if necessary from type
//     required: true, // true or false
//   },
// ];


let sections = [];
// form sections

let tallyInfo = [
  { legend: "Day" },
    {
    // What neighborhood/area are you leaving from
    question: formDict.whenTaskDone,
    name: formDict.whenTaskDone, // if necessary
    label: formDict.whenTaskDone, // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "date", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: true, // true or false
  },
  {
    question: "Co-Op Members Loading",
    name: "", // if necessary
    label: "", // if necessary label
    placeholder: "Co-Op Members Loading. . .", // if necessary
    description: "", // if necessary
    type: "text", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: false, // true or false
    startBlank: true, // only for select
  }, // placeholder 

];
sections.push(tallyInfo);


let tasksSection = [
    {legend: "Tasks"},
  {
    question: "Tasks Loading",
    name: "", // if necessary
    label: "", // if necessary label
    placeholder: "Tasks Loading. . .", // if necessary
    description: "", // if necessary
    type: "text", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: false, // true or false
    startBlank: true, // only for select
  }, // placeholder 
]
sections.push(tasksSection)

let counter = 0;


async function addMembers(){
    console.log('async addMembers() was just called. . .')
    let memberFieldset = document.getElementById('Members');
    populateInputs({
        question: "person",
        name: "", // if necessary
        label: "", // if necessary label
        placeholder: "", // if necessary
        description: "", // if necessary
        type: "select", // text, name, email, number, checkbox, date, select, radio
        appendedOptions: appendedPriority, // if necessary from type
        required: false, // true or false
        class: "priority-member-select",
    }, priorityDiv.element)

    populateInputs({
        question: "person",
        name: "", // if necessary
        label: "", // if necessary label
        placeholder: "", // if necessary
        description: "", // if necessary
        type: "select", // text, name, email, number, checkbox, date, select, radio
        appendedOptions: appendedRegular, // if necessary from type
        required: false, // true or false
        class: "normal-member-select",
    }, normalDiv.element)
}

//  form Information
let title = "Co-op Taskmaster";
let taskmasterForm = {
  method: "POST",
  action: 
  "https://script.google.com/macros/s/AKfycby6V44VRmRZXBythAuppb8NIQagK9sR3USfOfCuxkRfHuAROVxnkfDRlSr_9v68T64/exec",
  styleSheet: "../css-sheets/test.css",
  font: "https://fonts.google.com/specimen/Fira+Sans?stroke=Sans+Serif",
  title: title,
  id: title.replace(/ /g, "-"),
  description: "",
  sectionArray: sections,
  submitWheel: '../../assets/svg-images/ouroboros-load-wheel.svg', // check this
  submitMessage: "Submitting. . . Please Wait 🙂",
  submitError: "*Please check fields",
};


populateForm(taskmasterForm, document.querySelector("body"));

let membersArray = await getMembers();
let allActiveMembersNames = membersArray.allActive.map(obj => obj['Co-Op Member']);
let tasksArray = await getTasks();
let allActiveTaskNames = tasksArray.map(obj=> obj["Task Name"]);

let whoParentEl = document.getElementById('Day');
let placeholderWhoDidTask = document.getElementsByName('Co-Op Members Loading')[0];

let tasksParentEl = document.getElementById('Tasks');
let placeholderTasks = document.getElementsByName('Tasks Loading')[0];

populateInputs(
    {
    question: formDict.whoDidTask,
    name: "", // if necessary
    label: "Who did task", // if necessary label
    placeholder: "-", // if necessary
    description: "", // if necessary
    type: "select", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: allActiveMembersNames, // if necessary from type
    required: true, // true or false
    startBlank: true, // only for select
  },whoParentEl
)
populateInputs(
    {
    question: "Tasks",
    name: "", // if necessary
    label: "", // if necessary label
    placeholder: "-", // if necessary
    description: "", // if necessary
    type: "radio", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: allActiveTaskNames, // if necessary from type
    required: true, // true or false
    startBlank: true, // only for select
  },tasksParentEl
)

placeholderWhoDidTask.remove()
placeholderTasks.remove()





