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
    type: "email", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: true, // true or false
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
  action: "/",
  styleSheet: "",
  font: "",
  title: title,
  id: title.replace(/ /g, "-"),
  description: "",
  sectionArray: sections,
  submitMessage: "Submitting. . . Please Wait 🙂",
  submitError: "*Please check fields",
  // ,sectionArray: sectionsArray
};
export function populateContactForm() {
  populateForm(contactForm, formParent);
}
