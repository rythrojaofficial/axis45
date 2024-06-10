import { populateForm } from "../../scripts/forms.js";

let sections = []
// form sections
let contactPrompts = [
    { legend: 'Contact Information' },
    {
        // name
        question: 'Full Name'
        ,name: '' // if necessary
        ,label: 'Full Name' // if necessary label
        ,placeholder: '' // if necessary
        ,description: '' // if necessary
        ,type: 'text' // text, name, email, number, checkbox, date, select, radio 
        ,appendedOptions: [] // if necessary from type 
        ,required: true // true or false
    },
    {
        // email
        question: 'Email'
        ,name: '' // if necessary
        ,label: 'Email' // if necessary label or legend
        ,placeholder: '' // if necessary
        ,description: '' // if necessary
        ,type: 'email' // text, name, email, number, checkbox, date, select, radio 
        ,appendedOptions: [] // if necessary from type 
        ,required: true // true or false
    },
    {
        // Phone Number
        question: 'Phone Number'
        ,name: '' // if necessary
        ,label: 'Phone Number' // if necessary label or legend
        ,placeholder: '' // if necessary
        ,description: '' // if necessary
        ,type: 'text' // text, name, email, number, checkbox, date, select, radio 
        ,appendedOptions: [] // if necessary from type 
        ,required: true // true or false
    },
    {
        // Instagram
        question: 'Instagram'
        ,name: '' // if necessary
        ,label: '@Instagram' // if necessary label or legend
        ,placeholder: '' // if necessary
        ,description: '' // if necessary
        ,type: 'text' // text, name, email, number, checkbox, date, select, radio 
        ,appendedOptions: [] // if necessary from type 
        ,required: false // true or false
    },
    {
        // Emergency Contact
        question: 'Emergency Contact Name'
        ,name: '' // if necessary
        ,label: 'Emergency Contact Name' // if necessary label or legend
        ,placeholder: '' // if necessary
        ,description: '' // if necessary
        ,type: 'text' // text, name, email, number, checkbox, date, select, radio 
        ,appendedOptions: [] // if necessary from type 
        ,required: true // true or false
    },
    {
        // Emergency Contact
        question: 'Emergency Contact Relationship'
        ,name: '' // if necessary
        ,label: 'Emergency Contact Relationship' // if necessary label or legend
        ,placeholder: '' // if necessary
        ,description: '' // if necessary
        ,type: 'text' // text, name, email, number, checkbox, date, select, radio 
        ,appendedOptions: [] // if necessary from type 
        ,required: true // true or false
    },
    {
        // Emergency Contact Number
        question: 'Emergency Contact Number'
        ,name: '' // if necessary
        ,label: 'Emergency Contact Number' // if necessary label or legend
        ,placeholder: '' // if necessary
        ,description: '' // if necessary
        ,type: 'text' // text, name, email, number, checkbox, date, select, radio 
        ,appendedOptions: [] // if necessary from type 
        ,required: true // true or false
    }

]
sections.push(contactPrompts)

let drive1stWay = [
    { legend: 'SEA -> PDX' },
    {
        // SEA -> PDX
        question: 'Transportation to PDX'
        ,name: '' // if necessary
        ,label: '' // if necessary label
        ,placeholder: '' // if necessary
        ,description: '' // if necessary
        ,type: 'radio' // text, name, email, number, checkbox, date, select, radio 
        ,appendedOptions: [
            'I have a car and want to drive'
            ,"I have a car, and I'll drive if necessary"
            ,"I don't have a car and I need a ride"
            ,"I don't have a car but I don't need a ride"
            
        ] // if necessary from type 
        ,required: true // true or false
    },
    {
        // When do you plan on leaving?
        question: 'When do you plan on leaving SEA?'
        ,name: '' // if necessary
        ,label: '' // if necessary label
        ,placeholder:'' // if necessary
        ,description: '' // if necessary
        ,type: 'radio' // text, name, email, number, checkbox, date, select, radio 
        ,appendedOptions: [
            'Friday Morning'
            ,'Friday Noonish'
            ,'Friday Evening'
            ,'Saturday Morning'
            ,'other'
            
        ] // if necessary from type 
        ,required: true // true or false
    },
    {
        // How many total seats do you have (including you)
        question: 'How many total seats do you have (including you) to PDX'
        ,name: '' // if necessary
        ,label: '' // if necessary label
        ,placeholder:'' // if necessary
        ,description: '' // if necessary
        ,type: 'radio' // text, name, email, number, checkbox, date, select, radio 
        ,appendedOptions: [
            '0 (passenger)'
            ,'1 seat'
            ,'2 seats'
            ,'3 seats'
            ,'4 seats'
            ,'5 seats'
            ,'6 seats'
            
        ] // if necessary from type 
        ,required: true // true or false
    },
    {
        // What neighborhood/area are you leaving from
        question: 'What neighborhood/area are you leaving from?'
        ,name: '' // if necessary
        ,label: 'What neighborhood/area are you leaving from?' // if necessary label
        ,placeholder:'' // if necessary
        ,description: '' // if necessary
        ,type: 'text' // text, name, email, number, checkbox, date, select, radio 
        ,appendedOptions: [] // if necessary from type 
        ,required: true // true or false
    },


]
sections.push(drive1stWay)

let drive2ndWay = [
    { legend: 'PDX -> SEA' },
    {
        // PDX -> SEA
        question: 'Transportation to SEA'
        ,name: '' // if necessary
        ,label: '' // if necessary label
        ,placeholder: '' // if necessary
        ,description: '' // if necessary
        ,type: 'radio' // text, name, email, number, checkbox, date, select, radio 
        ,appendedOptions: [
            'I have a car and want to drive'
            ,"I have a car, and I'll drive if necessary"
            ,"I don't have a car and I need a ride"
            ,"I don't have a car but I don't need a ride"
            
        ] // if necessary from type 
        ,required: true // true or false
    },
    {
        // When do you plan on leaving?
        question: 'When do you plan on leaving PDX?'
        ,name: '' // if necessary
        ,label: '' // if necessary label
        ,placeholder:'' // if necessary
        ,description: '' // if necessary
        ,type: 'radio' // text, name, email, number, checkbox, date, select, radio 
        ,appendedOptions: [
            'Sunday Morning'
            ,'Sunday Noonish'
            ,'Sunday Night'
            ,'other'
            
        ] // if necessary from type 
        ,required: true // true or false
    },
    {
        // How many total seats do you have (including you)
        question: 'How many total seats do you have (including you) to SEA'
        ,name: '' // if necessary
        ,label: '' // if necessary label
        ,placeholder:'' // if necessary
        ,description: '' // if necessary
        ,type: 'radio' // text, name, email, number, checkbox, date, select, radio 
        ,appendedOptions: [
            '0 (passenger)'
            ,'1 seat'
            ,'2 seats'
            ,'3 seats'
            ,'4 seats'
            ,'5 seats'
            ,'6 seats'
            
        ] // if necessary from type 
        ,required: true // true or false
    },
    {
        // What neighborhood/area are you returning to
        question: 'What neighborhood/area are you returning to?'
        ,name: '' // if necessary
        ,label: 'What neighborhood/area are you returning to?' // if necessary label
        ,placeholder:'' // if necessary
        ,description: '' // if necessary
        ,type: 'text' // text, name, email, number, checkbox, date, select, radio 
        ,appendedOptions: [] // if necessary from type 
        ,required: true // true or false
    },


]
sections.push(drive2ndWay)
let accomodations = [
    { legend: 'Accomodations' },
    {
        // Are you personally booking an Airbnb?
        question: 'Which days are you personally booking an Airbnb?'
        ,name: '' // if necessary
        ,label: '' // if necessary label
        ,placeholder: '' // if necessary
        ,description: '' // if necessary
        ,type: 'checkbox' // text, name, email, number, checkbox, date, select, radio 
        ,appendedOptions: [
            'Friday Night'
            ,'Saturday Night'
            ,'Sunday Night'
        ] // if necessary from type 
        ,required: false // true or false
    },
    {
        // If you have your own Airbnb and want to share, how many spots do you have (including you)?
        question: 'If booking an Airbnb, how many spots do you have (including you)?'
        ,name: '' // if necessary
        ,label: 'If booking an Airbnb, how many spots do you have (including you)?' // if necessary label
        ,placeholder: '' // if necessary
        ,description: '' // if necessary
        ,type: 'select' // text, name, email, number, checkbox, date, select, radio 
        ,appendedOptions: [
            '0 spots: No Airbnb'
            ,'1 spot total'
            ,'2 spots total'
            ,'3 spots total'
            ,'4 spots total'
            ,'5 spots total'
            ,'6 spots total'
        ] // if necessary from type 
        ,required: false // true or false
    },
    {
        // Where are you planning to sleep Friday night?
        question: 'Where are you planning to sleep Friday night?'
        ,name: '' // if necessary
        ,label: '' // if necessary label
        ,placeholder: '' // if necessary
        ,description: '' // if necessary
        ,type: 'radio' // text, name, email, number, checkbox, date, select, radio 
        ,appendedOptions: [
            'Gym-sleepover no matter what'
            ,'Airbnb I personally booked'
            ,'Airbnb someone else has booked (confirmed)'
            ,"N/A: won't be there or have a private setup"
        ] // if necessary from type 
        ,required: true // true or false
    },
    {
        // Where are you planning to sleep Saturday night?
        question: 'Where are you planning to sleep Saturday night?'
        ,name: '' // if necessary
        ,label: '' // if necessary label
        ,placeholder: '' // if necessary
        ,description: '' // if necessary
        ,type: 'radio' // text, name, email, number, checkbox, date, select, radio 
        ,appendedOptions: [
            'Gym-sleepover no matter what'
            ,'Airbnb I personally booked'
            ,'Airbnb someone else has booked (confirmed)'
            ,"N/A: won't be there or have a private setup"
        ] // if necessary from type 
        ,required: true // true or false
    },
    {
        // Where are you planning to sleep Sunday night?
        question: 'Where are you planning to sleep Sunday night?'
        ,name: '' // if necessary
        ,label: '' // if necessary label
        ,placeholder: '' // if necessary
        ,description: '' // if necessary
        ,type: 'radio' // text, name, email, number, checkbox, date, select, radio 
        ,appendedOptions: [
            'Gym-sleepover no matter what'
            ,'Airbnb I personally booked'
            ,'Airbnb someone else has booked (confirmed)'
            ,"N/A: won't be there or have a private setup"
        ] // if necessary from type 
        ,required: true // true or false
    },
]
sections.push(accomodations)

//  form Information
let title = 'RCG Field Trip Carpool Survey'
let rcgForm = {
    method: 'POST'
    ,action: 'https://script.google.com/macros/s/AKfycbzfnG0OPY7t8ubVq5qNXP89aqRWI7_5EVbI7uLYxcIWEHzGqGBwWPiNXNWSey7aIFW6kQ/exec'
    ,styleSheet: '../css-sheets/test.css'
    ,font: 'https://fonts.google.com/specimen/Fira+Sans?stroke=Sans+Serif'
    ,title: title
    ,id: title.replace(/ /g,"-")
    ,description: 'July 26-28'
    ,sectionArray: sections
    ,submitMessage: 'Submitting. . . Please Wait 🙂'
    ,submitError: '*Please check fields'
    }
populateForm(rcgForm, document.querySelector('body'))
