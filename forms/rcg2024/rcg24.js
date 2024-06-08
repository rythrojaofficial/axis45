import { HtmlElement } from "../../scripts/htmlElement.js";
import { populateForm } from "../../scripts/forms.js";


let contactPrompts = [
    { legend: 'la lagende kick!' },
    {
        // name
        question: 'Full Name'
        ,name: '' // if necessary
        ,label: '' // if necessary label
        ,placeholder: 'Full Name' // if necessary
        ,description: '' // if necessary
        ,type: 'text' // text, name, email, number, checkbox, date, select, radio 
        ,appendedOptions: [] // if necessary from type 
        ,required: true // true or false
    },
    {
        // email
        question: 'Email'
        ,name: '' // if necessary
        ,label: '' // if necessary label or legend
        ,placeholder: 'Email' // if necessary
        ,description: '' // if necessary
        ,type: 'email' // text, name, email, number, checkbox, date, select, radio 
        ,appendedOptions: [] // if necessary from type 
        ,required: true // true or false
    },
    {
        // Phone Number
        question: 'Phone Number'
        ,name: '' // if necessary
        ,label: '' // if necessary label or legend
        ,placeholder: 'Phone Number' // if necessary
        ,description: '' // if necessary
        ,type: 'number' // text, name, email, number, checkbox, date, select, radio 
        ,appendedOptions: [] // if necessary from type 
        ,required: true // true or false
    },
    {
        // Instagram
        question: 'Instagram'
        ,name: '' // if necessary
        ,label: '' // if necessary label or legend
        ,placeholder: '@Instagram' // if necessary
        ,description: '' // if necessary
        ,type: 'text' // text, name, email, number, checkbox, date, select, radio 
        ,appendedOptions: [] // if necessary from type 
        ,required: false // true or false
    },
    {
        // Emergency Contact
        question: 'Emergency Contact'
        ,name: '' // if necessary
        ,label: '' // if necessary label or legend
        ,placeholder: 'Emergency Contact' // if necessary
        ,description: '' // if necessary
        ,type: 'text' // text, name, email, number, checkbox, date, select, radio 
        ,appendedOptions: [] // if necessary from type 
        ,required: true // true or false
    },
    {
        // Emergency Contact Number
        question: 'Emergency Contact Number'
        ,name: '' // if necessary
        ,label: '' // if necessary label or legend
        ,placeholder: 'Emergency Contact Number' // if necessary
        ,description: '' // if necessary
        ,type: 'number' // text, name, email, number, checkbox, date, select, radio 
        ,appendedOptions: [] // if necessary from type 
        ,required: true // true or false
    }

]



let sections = [
    contactPrompts
    
]
let rcgForm = {
    title: 'RCG Field Trip Carpool Survey'
    ,id: ''
    ,method: 'POST'
    ,action: '#'
    ,sectionArray: sections
    ,prompts: contactPrompts

    }
populateForm(rcgForm, document.querySelector('body'))