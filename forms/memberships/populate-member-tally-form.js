import { populateForm, populateInputs } from "../../../scripts/forms.js";
import { googleSheetsDateToLocalDate } from "../../scripts/parsedate.js";
import { getMembers } from './get-members.js'
import { HtmlElement } from "../../scripts/htmlElement.js";

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
    name: "Date", // if necessary
    label: "Tally Date", // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "date", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: true, // true or false
  },
  {
    question: "Tallied By",
    name: "", // if necessary
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
    question: "Tally Day",
    name: "Day", // if necessary
    label: "", // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "hidden", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: true, // true or false
  },





];
sections.push(tallyInfo);


let tallyMembers = [
    {legend: "Members"}
]
sections.push(tallyMembers)

let lists;
let counter = 0;

async function addMembers(sessions){
    let memberFieldset = document.getElementById('Members');
    let priorityDiv = new HtmlElement(
        'div', memberFieldset,{ id: 'priority-members'}, ""
    )
    let priorityDivLabel = new HtmlElement(
        'div', priorityDiv.element, {class: "section"}, "Frequent Members"
    )
    let normalDiv = new HtmlElement(
        'div', memberFieldset, { id: 'normal-members' }, ""
    )
    let normalDivLabel = new HtmlElement(
        "div", normalDiv.element, {class: "section"}, "Normal Members"
    )
    if (counter===0){
            lists = await getMembers();
            counter++;
    }
    lists.priority.forEach(member =>{
        populateInputs({
        question: member.name,
        name: "", // if necessary
        label: "", // if necessary label
        placeholder: "", // if necessary
        description: "", // if necessary
        type: "radio", // text, name, email, number, checkbox, date, select, radio
        appendedOptions: sessions, // if necessary from type
        required: false, // true or false
        class: "priority-member-radio-options",
    }, priorityDiv.element)
    })
    lists.regular.forEach(member =>{
        populateInputs({
        question: member.name,
        name: "", // if necessary
        label: "", // if necessary label
        placeholder: "", // if necessary
        description: "", // if necessary
        type: "radio", // text, name, email, number, checkbox, date, select, radio
        appendedOptions: sessions, // if necessary from type
        required: false, // true or false
        class: "normal-member-radio-options",
    }, normalDiv.element)
    })
}   
//  form Information
let title = "Member Tally Form";
let tallyForm = {
  method: "POST",
  action: 
  "https://script.google.com/macros/s/AKfycby6V44VRmRZXBythAuppb8NIQagK9sR3USfOfCuxkRfHuAROVxnkfDRlSr_9v68T64/exec",
  styleSheet: "../css-sheets/member-tally.css",
  font: "https://fonts.google.com/specimen/Fira+Sans?stroke=Sans+Serif",
  title: title,
  id: title.replace(/ /g, "-"),
  description: "",
  sectionArray: sections,
  submitMessage: "Submitting. . . Please Wait 🙂",
  submitError: "*Please check fields",
};

populateForm(tallyForm, document.querySelector("body"));
let date = document.querySelector('[name="Date"]')
    date.addEventListener("change", addDate)
    date.valueAsDate = new Date();
let talliedBy = document.querySelector('div[name="Tallied By"]');
    talliedBy.addEventListener('change', addDate, { once: true })
let formDay = document.querySelector('[name="Day"]');
    formDay.value = getDayofWeek();

let options = [];
function addDate(){
    let dayElement = document.getElementById('Day').firstChild
    dayElement.innerText = getDayofWeek()
    let tallyWrapper = document.getElementById('Members');
    tallyWrapper.innerHTML = '<legend>Members</legend>';
    let classLibrary = {
        tuesday: [
            "Intermediate Guided Tricking",
            "Tricking Exercise"
        ],
        sunday: [
            "Guided Flexibility",
            "Open Breaking"
        ],
        allOther: [
            "Open Tricking"
        ]
    }
    switch (dayElement.innerText){
        case "Tuesday":
            options = [
                classLibrary.tuesday[0],
                classLibrary.tuesday[1],
                `${classLibrary.tuesday[0]} + ${classLibrary.tuesday[1]}`,
            ]
            break;
        case "Sunday":
            options = [
                classLibrary.sunday[0],
                classLibrary.sunday[1],
                `${classLibrary.sunday[0]} + ${classLibrary.sunday[1]}`,
            ]
            break;
        default:
            options = [
                classLibrary.allOther[0],

            ]
            break;
    }
    addMembers(options)
    // preQueriedList = addMembers(options)
}



function getDayofWeek(){
    let daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let localDate = googleSheetsDateToLocalDate(date.value)
    let theDayIndex = localDate.getDay();
    return(daysArray[theDayIndex])
}




