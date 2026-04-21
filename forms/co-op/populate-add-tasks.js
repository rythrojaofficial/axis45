// import { allActiveMembersNames } from "./populate-taskmaster";
export const formDict = {
    // title and sections
    title: "Co-op Add Tasks",
    sections: [],
    // below are 
    dateAdded: {
        formName:"Date Added",
        sheetName:"Date Added"
    },
    addedBy: {
        formName: "Added By",
        sheetName:"Added By"
    },
    newTaskName: {
        formName: "Task",
        sheetName: "Task Name"
    },
    isMainMember: {
        formName: "Main Member?",
        sheetName: "Main Member"
    },
    taskDetails: "Task Details",
    taskTier: "Task Tier",
    taskUrgency: "Task Urgency",
    taskStatus: "Task Status",
    taskCollaborators: {
        formName: "Assigned Collaborators (if known)",
        sheetName: "Task Collaborators"
    }

}

let memberInfo = [
  { legend: "Member Info" },
    {
    question: "",
    name: "action", // if necessary
    label: "", // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "hidden", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: true, // true or false
    value: "write"
    },
    {
    question: formDict.dateAdded.formName,
    name: formDict.dateAdded.sheetName, // if necessary
    label: formDict.dateAdded.formName, // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "date", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: true, // true or false
    setDate: "today" // // date only: "today" or sortable date number
    },
  {
    question: formDict.addedBy.formName,
    name: 'member-loading', // if necessary
    label: formDict.addedBy.formName, // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "select", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: true, // true or false
    startBlank: true, // only for select
    value: formDict.addedBy.formName

  },
];
formDict.sections.push(memberInfo);

let taskInfo = [
    { legend: "Task Info"},
  {
    question: formDict.newTaskName.formName,
    name: formDict.newTaskName.sheetName, // if necessary
    label: formDict.newTaskName.formName, // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "text", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: false, // true or false
  },
    {
    question: formDict.taskDetails,
    name: "", // if necessary
    label: formDict.taskDetails, // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "textarea", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: false, // true or false
  },
{
    question: formDict.taskTier,
    name: "", // if necessary
    label: formDict.taskTier, // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "select", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: ["1","2","3"], // if necessary from type
    required: true, // true or false
  },
  {
    question: formDict.taskUrgency,
    name: "", // if necessary
    label: formDict.taskUrgency, // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "select", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [
        "low","medium","high"], // if necessary from type
    required: true, // true or false
  },
    {
    question: formDict.taskStatus,
    name: "", // if necessary
    label: formDict.taskStatus, // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "select", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [
        "Not Started","In Progress","Complete"], // if necessary from type
    required: true, // true or false
  },
    {
    question: formDict.taskCollaborators.formName,
    name: 'member-loading', // if necessary
    label: formDict.taskCollaborators.formName, // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "select", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: true, // true or false
    startBlank: true, // only for select
    value: formDict.taskCollaborators.sheetName

  },

]
formDict.sections.push(taskInfo);

export const addCoOpTaskForm = {
  method: "POST",
  action: 
  "https://script.google.com/macros/s/AKfycbz-3UQJAWtzlKVmTNCMQHQEk4oLtD4cK4Hh-9rltZSNw_tCsldZTIqvFlQ-WHTwkAHvHA/exec",
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
