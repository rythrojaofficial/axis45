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
    question: "Date Added",
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
        "Tricking Membership",
        "Breaking Membership",
        "Exercise and Stretch Membership",
        "$50 Student Membership",
        "$50 Access Membership",
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
    question: "Membership Status",
    name: "Membership Status", // if necessary
    label: "", // if necessary label or legend
    placeholder: "active", // if necessary
    description: "", // if necessary
    type: "hidden", // text, name, (use text for email)email, (use text for phone nubmers)number, checkbox, date, select, radio, hidden(use placeholder text for value)
    appendedOptions: [], // if necessary from type
    required: true, // true or false
  },


];
sections.push(hosting);

//  form Information
let title = "New Members Addition";
let rcgForm = {
  method: "POST",
  action: 'https://script.google.com/macros/s/AKfycbyOsSFt58h4KR6AnGJ-0KdsgGmpADP_-aEozAacQpmLcUJ8hn1Eey089_60Mqok-Oc/exec',
  styleSheet: "../css-sheets/test.css",
  font: "https://fonts.google.com/specimen/Fira+Sans?stroke=Sans+Serif",
  title: title,
  id: title.replace(/ /g, "-"),
  description: "",
  sectionArray: sections,
  submitMessage: "Submitting. . . Please Wait 🙂",
  submitError: "*Please check fields",
};
populateForm(rcgForm, document.querySelector("body"));
 