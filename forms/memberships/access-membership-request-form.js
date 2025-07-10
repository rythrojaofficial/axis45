import { populateForm } from "../../../scripts/forms.js";

let sections = [];
// form sections

let contactPrompts = [
  { legend: "Contact Information" },
  {
    // name
    question: "Full Name",
    name: "", // if necessary
    label: "Full Name", // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "text", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: true, // true or false
  },
  {
    // email
    question: "Email",
    name: "", // if necessary
    label: "Email", // if necessary label or legend
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "email", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: true, // true or false
  },
  {
    // Instagram
    question: "Instagram",
    name: "", // if necessary
    label: "@Instagram (not required)", // if necessary label or legend
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "text", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: false, // true or false
  },
];
sections.push(contactPrompts);

let request = [
  { legend: "Your Situtation" },
  { 
    question: "Briefly describe your situation",
    name: "", // if necessary
    label: "Without going into too much detail, briefly describe your situation", // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "textarea", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: true, // true or false
  },
]
sections.push(request)

let requestDetails = [
    { legend: "Request Type" },

  {
    // name
    question: "Duration",
    name: "", // if necessary
    label: "", // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "radio", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [
        "Short term: 1-3 month check-in",
        "Medium term: 6 month check-in",
        "Long term: 12 month check-in",
    ], // if necessary from type
    required: true, // true or false
  },
  {
    // name
    question: "Do you have talents or resources you're willing to share/trade?",
    name: "", // if necessary
    label: "", // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "checkbox", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [
        "able to help with projects",
        "trade skills",
        "design/merch work",
        "photo/video/editing work",
        "other"
    ], // if necessary from type
    required: false, // true or false
  },
  {
    // name
    question: "",
    name: "", // if necessary
    label: "If you have can offer anything else, list it below:", // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "textarea", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: false, // true or false
  }
]
sections.push(requestDetails);

let acknowledgement = [
  { legend: "Acknowledgement" },
  {
    // SEA -> PDX
    question: "Access memberships are offered based on need and availability.  We review all access membership requests with care and respect for privacy. You can expect to hear back from us within a week.",
    name: "", // if necessary
    label: "", // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "checkbox", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [
      "I understand and accept",
    ], // if necessary from type
    required: true, // true or false
  },
];
sections.push(acknowledgement);



//  form Information
let title = "Access Membership Request Form";
let myForm = {
  method: "POST",
  action:
  "https://script.google.com/macros/s/AKfycbzAuBI7maoET0BJwbqMM8cIGYbBh1h6l2ozpNkvdE5it_4gq1DKQ_X4AhuFLvglPJU/exec",
  styleSheet: "../css-sheets/test.css",
  font: "https://fonts.google.com/specimen/Fira+Sans?stroke=Sans+Serif",
  title: title,
  id: title.replace(/ /g, "-"),
  description: "We believe everyone should have access to Tricking and community, regardless of financial circumstances. If cost is a barrier for you, we offer access memberships on a case-by-case basis.",
  sectionArray: sections,
  submitMessage: "Submitting. . . Please Wait 🙂",
  submitError: "*Please check fields",
};
populateForm(myForm, document.querySelector("body"));



// ===========================================================
//  If you want to console log the questions, for google forms
// ===========================================================

myForm.sectionArray.forEach((section) => {
  section.forEach((question) => {
    if (question.question) {
      console.log(question.question);
    }
  });
});