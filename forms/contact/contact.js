import { populateForm } from "../../scripts/forms.js";

let formParent = document.getElementById("contact-form");

let sections = [];
let contactPrompts = [
  { legend: "Contact Information" },
  {
    // name
    question: "Name",
    name: "", // if necessary
    label: "Name (if desired)", // if necessary label
    placeholder: "Anonymous", // if necessary
    description: "", // if necessary
    type: "text", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: false, // true or false
  },
  {
    // email
    question: "Email",
    name: "", // if necessary
    label: "Email (if looking for a response)", // if necessary label or legend
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "text", // text, name, (use text for email)email, (use text for phone nubmers)number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: false, // true or false
  },
  {
    // title
    question: "Question, Comment, or Suggestion",
    name: "", // if necessary
    label: "Question, Comment, or Suggestion", // if necessary label or legend
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "textarea", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: true, // true or false
  },
];
sections.push(contactPrompts);
let title = "Any Questions, Comments, or Suggestions are welcome!";
let contactForm = {
  method: "POST",
  action:
    "https://script.google.com/macros/s/AKfycbyfdfv0mFJ7UMjWgDw2VLewix3V9MsC1NawjQ0BnsOAC1Npr9ArJuKpk1cCE1235W5E_A/exec",
  noValidate: false, // true or false,
  styleSheet: "./forms/css-sheets/test.css",
  font: "",
  title: title,
  id: title.replace(/ /g, "-"),
  description: "",
  sectionArray: sections,
  submitWheel: '../../assets/svg-images/ouroboros-load-wheel.svg', // check this
  submitMessage: "Submitting. . . Please Wait 🙂",
  submitError: "*Please check fields",
};
export function populateContactForm() {
  populateForm(contactForm, formParent);
}
