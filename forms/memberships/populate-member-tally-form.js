import { populateForm, populateInputs } from "../../../scripts/forms.js";
import { googleSheetsDateToLocalDate } from "../../scripts/parsedate.js";
import { getMembers } from './get-members.js'

let sectionPrompts = [
  { legend: "" },
  {
    // title
    question: "", // this will be .name by default
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

let tallyInfo = [
  { legend: "Day" },
    {
    // What neighborhood/area are you leaving from
    question: "Tally Date",
    name: "", // if necessary
    label: "Tally Date", // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "date", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: true, // true or false
  },
  {
    question: "Tallied By",
    name: "Tallied By", // if necessary
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




];
sections.push(tallyInfo);
let membersList = await getMembers();

let tallyMembers = [
    {legend: "Members"}
]
sections.push(tallyMembers)
async function addMembers(sessions){
    let list = await membersList;
    console.log({list: list})
    let memberFieldset = document.getElementById('Members');
    list.forEach(member =>{
        populateInputs(
            {
        question: member.name,
        name: "", // if necessary
        label: "", // if necessary label
        placeholder: "", // if necessary
        description: "", // if necessary
        type: "checkbox", // text, name, email, number, checkbox, date, select, radio
        appendedOptions: sessions, // if necessary from type
        required: false, // true or false
    }, memberFieldset)
    })
}   
//  form Information
let title = "Member Tally Form";
let tallyForm = {
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

populateForm(tallyForm, document.querySelector("body"));
 let date = document.querySelector('[name="Tally Date"]')
    date.addEventListener("change", addDate)
    date.valueAsDate = new Date();
    addDate()


function addDate(){
    let dayElement = document.getElementById('Day').firstChild
    dayElement.innerText = getDayofWeek()
    let options = []
    switch (dayElement.innerText){
        case "Tuesday":
            options = [
                "Intermediate Guided Tricking",
                "Tricking Exercise",
                "other"
            ]
            break;
        case "Sunday":
            options = [
                "Guided Flexibility",
                "Open Breaking",
                "other"
            ]
            break;
        default:
            options = [
                "Open Tricking",
                "other"
            ]
            break;
    }
    addMembers(options)
}



function getDayofWeek(){
    let daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let localDate = googleSheetsDateToLocalDate(date.value)
    let theDayIndex = localDate.getDay();
    return(daysArray[theDayIndex])
}
