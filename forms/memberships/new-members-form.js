import { populateForm } from "../../../scripts/forms.js";
let sectionPrompts = [
  { legend: "" },
  {
    // title
    question: "",
    name: "", // if necessary
    label: "", // if necessary label or legend
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "text", // text, name, (use text for email)email, (use text for phone nubmers)number, checkbox, date, select, radio, hidden(use placeholder text for value)
    appendedOptions: [], // if necessary from type
    required: true, // true or false
  },
];


let sections = [];
// form sections

let hosting = [
  { legend: "" },
    {
    // What neighborhood/area are you leaving from
    question: "Date",
    name: "", // if necessary
    label: "Date Added", // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "date", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: true, // true or false
  },
  {
    question: "Member Name",
    name: "", // if necessary
    label: "Member Name", // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "text", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: true, // true or false
  },
  {
    question: "Member Email",
    name: "Member Email", // if necessary
    label: "Member Email", // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "email", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: false, // true or false
  },
  {
    question: "Membership Type",
    name: "Membership Type", // if necessary
    label: "", // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "radio", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [
        "Tricking",
        "Breaking",
        "Exercise and Stretch",
        "$50 Student",
        "$50 Access",
        "other"
    ], // if necessary from type
    required: true, // true or false
  },
  {
    question: "Added By",
    name: "Added By", // if necessary
    label: "", // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "radio", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [
        "Krissy",
        "Jared",
        "other"
    ], // if necessary from type
    required: true, // true or false
  },
  {
    // title
    question: "",
    name: "Priority", // if necessary
    label: "", // if necessary label or legend
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "checkbox", // text, name, (use text for email)email, (use text for phone nubmers)number, checkbox, date, select, radio, hidden(use placeholder text for value)
    appendedOptions: [
      "yes",
    ], // if necessary from type
    required: false // true or false
  },
  {
    // title
    question: "",
    name: "Member Notes", // if necessary
    label: "Notes (if applicable)", // if necessary label or legend
    placeholder: "eg. 250701 Chris on Access Membership only for July", // if necessary
    description: "", // if necessary
    type: "textbox", // text, name, (use text for email)email, (use text for phone nubmers)number, checkbox, date, select, radio, hidden(use placeholder text for value)
    appendedOptions: [
      "yes",
    ], // if necessary from type
    required: false // true or false
  },
  {
    // title
    question: "Membership Status",
    name: "Membership Status", // if necessary
    label: "", // if necessary label or legend
    placeholder: "active", // if necessary
    description: "", // if necessary
    type: "hidden", // text, name, (use text for email)email, (use text for phone nubmers)number, checkbox, date, select, radio, hidden(use placeholder text for value)
    appendedOptions: [], // if necessary from type
    required: false, // true or false
  },


];
sections.push(hosting);

//  form Information
let title = "New Members Addition";
let myForm = {
  method: "POST",
  action:
  'https://script.google.com/macros/s/AKfycbz7sXODucQ0gUCJmHPjA0t7CFHCrS-IalQ4BjsicumWQ40phg87FQCwFrn3EvfRIO0/exec', 
  styleSheet: "../css-sheets/test.css",
  font: "https://fonts.google.com/specimen/Fira+Sans?stroke=Sans+Serif",
  title: title,
  id: title.replace(/ /g, "-"),
  description: "",
  sectionArray: sections,
  submitMessage: "Submitting. . . Please Wait 🙂",
  submitError: "*Please check fields",
};
populateForm(myForm, document.querySelector("body"));
let date = document.querySelector('[name="Date"]')
    date.valueAsDate = new Date();
 