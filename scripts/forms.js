import { HtmlElement } from "./htmlElement.js";

let sectionPrompts = [
    { legend: ''},
    {
        // title
        question: ''
        ,name: '' // if necessary
        ,label: '' // if necessary label or legend
        ,placeholder: '' // if necessary
        ,description: '' // if necessary
        ,type: 'text' // text, name, email, number, checkbox, date, select, radio 
        ,appendedOptions: [] // if necessary from type 
        ,required: true // true or false
    }
]

let selectOptions = [
    ''//first option is the select placeholder
    ,''
    ,''
    ,''
    ,'' //options name
]

let radioOptions = [
    ''
    ,''
    ,'' //options name
]

let theForm = {
    title: ''
    ,id: ''
    ,method: 'POST'
    ,action: '#'
    // ,sectionArray: sectionsArray

}

export function populateForm(formObject, targetElement){
    let formWrapper = new HtmlElement('div', targetElement)
    let form = new HtmlElement('form', formWrapper.element
        ,{
            id: formObject.id
            ,method: formObject.method
            ,action: formObject.action
        }, formObject.title)
    // populateSections(formObject.sectionArray, form.element)
    populateSections(formObject, form.element)
    
    
    
    
    

}
function populateInputs(inputObject, parentElement){
    
    let theName = (inputObject.name !== '') ? inputObject.name : inputObject.question;
    let input;
    if (inputObject.label !== ''){
        let label = new HtmlElement('label', parentElement,{for: theName}, inputObject.label)
    }
    switch (inputObject.type){
        case 'textarea':
            input = new HtmlElement('textarea', parentElement, 
                {
                    name: theName
                    ,label: inputObject.label
                    ,placeholder: inputObject.placeholder
                    ,required: inputObject.required
                }
                )
            break;
        case 'select':
            break;
        default:
            input = new HtmlElement('input', parentElement, 
                {
                    name: (inputObject.name !== '') ? inputObject.name : inputObject.question
                    ,type: inputObject.type
                    ,label: inputObject.label
                    ,placeholder: inputObject.placeholder
                    ,required: inputObject.required
                }
                )
            break;
    }
    
}
function populateSections(formObject, parentElement){
    
    let sectionArray = formObject.sectionArray
    sectionArray.forEach((sec)=>{
        let newSection = new HtmlElement('fieldset', parentElement)
            ,newLegend = new HtmlElement('legend', newSection.element, {}, sec[0].legend)
        sec.slice(1).forEach((obj)=>{
                populateInputs(obj, newSection.element)
            })
    })
}