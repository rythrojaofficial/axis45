import { populateForm } from "../../../scripts/forms.js";

let sections = [];
// form sections

let hosting = [
  { legend: "" },
    {
    // What neighborhood/area are you leaving from
    question: "Bonus Date?",
    name: "", // if necessary
    label: "Bonus Date?", // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "date", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: true, // true or false
  },
  {
    question: "Who's hosting?",
    name: "Who's hosting?", // if necessary
    label: "", // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "radio", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [
      "jc",
      "ab",
      "hs",
      "other",
    ], // if necessary from type
    required: true, // true or false
  },

];
sections.push(hosting);

//  form Information
let title = "Wednesday Bonus";
let rcgForm = {
  method: "POST",
  action: "https://script.google.com/macros/s/AKfycbwZWM82krrMoT_ZMNjkZMFg8YuyhkjghY5MiqnB4iUok1V2yczNOrcQLLjJq9xM81rVSg/exec",
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
