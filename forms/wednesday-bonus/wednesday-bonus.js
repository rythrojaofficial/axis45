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
      "mz",
      "other",
    ], // if necessary from type
    required: true, // true or false
  },

];
sections.push(hosting);

//  form Information
let title = "Wednesday Bonus";
let wednesdayBonus = {
  method: "POST",
  action: 'https://script.google.com/macros/s/AKfycbyXtos7msA_N4k3CKLmIeZDvte970v92jL8vhOZcB1MslP5Mw8GgEC-fb9NxtEm281xSg/exec', // check this
  styleSheet: "../css-sheets/test.css", // check this
  font: "https://fonts.google.com/specimen/Fira+Sans?stroke=Sans+Serif",
  title: title,
  id: title.replace(/ /g, "-"),
  description: "",
  sectionArray: sections,
  submitWheel: '../../assets/svg-images/ouroboros-load-wheel.svg', // check this
  submitMessage: "Submitting. . . Please Wait 🙂",
  submitError: "*Please check fields",
};
populateForm(wednesdayBonus, document.querySelector("body"));
 