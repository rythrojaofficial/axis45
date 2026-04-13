import { todaysDate } from "../../scripts/preloadDate.js";
const formDict = {
    title: 'Co-Op Taskmaster',
    sections: [],
    whoDidTask: 'Taskee',
    whenTaskDone: 'Task Date'
}

let tallyInfo = [
  { legend: "Who" },
    {
    question: formDict.whenTaskDone,
    name: formDict.whenTaskDone, // if necessary
    label: formDict.whenTaskDone, // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "date", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: true, // true or false
    setDate: "today" // date only
  },
  {
    question: "Co-Op Members Loading",
    name: "member-loading", // if necessary
    label: "Who did Task", // if necessary label
    placeholder: "Co-Op Members Loading. . .", // if necessary
    description: "", // if necessary
    type: "text", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: false, // true or false
    startBlank: true, // only for select
  }, // placeholder 

];
formDict.sections.push(tallyInfo);


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

//  form Information
export const taskmasterForm = {
  method: "POST",
  action: 
  "https://script.google.com/macros/s/AKfycby6V44VRmRZXBythAuppb8NIQagK9sR3USfOfCuxkRfHuAROVxnkfDRlSr_9v68T64/exec",
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