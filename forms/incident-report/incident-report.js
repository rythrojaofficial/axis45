import { HtmlElement, ButtonElement, SectionElement, InputElement, BreakElement, TextAreaElement } from "../../scripts/htmlElement.js";


let thebody = document.querySelector('body');
let theForm = new HtmlElement('form', thebody,
{ 
    id: 'my-form',
    method: 'POST',
    action: 'https://script.google.com/macros/s/AKfycbzO0G3QvaNEjGs0-MBzdddM3FWaG2zijqPcCxuzaUDLqSNLm0yqn0Ii6TeCJRGCCHHswQ/exec'
});
addForm()

function addForm(){
    addTitle()
    addSectionWhoIsFilling()
    addSectionIncident()
    addSubmit()


}
function addTitle(){
    let title = new HtmlElement('div',
    theForm.element,
    { class: 'title' },
    'Incident Report')
}
function addSectionWhoIsFilling(){
    let section1 = new SectionElement(theForm.element, {class: 'incidentSection'});
    let titleIncident = new HtmlElement('div', section1.element ,{ class: 'subtitle'}, 'Person Submitting');
    let inputName = new InputElement(section1.element,
        { 
            name: 'Name-and-role',
            required: true
        }, 
        'Full Name',
        'Name and Role of Person Completing Form')
    let dateInput = new InputElement(section1.element,
        {
            name: 'Date-of-incident',
            type: 'date',
            required: true
         },
         '',
         'Date of Incident'
         );
}
function addSectionIncident(){
    let section2 = new SectionElement(theForm.element, { class: 'incidentSection' }, );
    let titleIncident = new HtmlElement('div', section2.element ,{ class: 'subtitle'}, 'The Incident');
    let break1 = new BreakElement(section2.element);
    let inputPersonsInvolved = new InputElement(section2.element,
        { 
            name: 'Persons-involved',
            required: true
        },
        'Full names, separted by commas',
        'Persons Involved');
    let inputWhatHappened = new TextAreaElement(section2.element,
        {
            name: 'What-happened',
            required: true
        },
        'Eg.  At approximately 530pm, Johny fell to his back during a backflip drill resulting in a bloody nose',
        'Objective Description of What Happened',
        8
        );
    let inputHowCaredFor = new TextAreaElement(section2.element,
        {
            name: 'Immediate-actions-taken'
        },
        'Eg. Concussion test: some dizziness but not sensitive to light/sound, Johnny was given an icepack for head, and a tampon to plug the nose ',
        'Describe Tests and Immediate Actions taken',
        8);
    let inputHowLeft = new TextAreaElement(section2.element,
        {
            name: 'How-did-they-leave'
        },
        "Eg. Jared drove Johnny home in Johnny's car",
        'Describe How the Injured Left',
        4
        );
    let inputWhoCared = new InputElement(section2.element,
        {name : 'Left-in-care-of'},
        "Eg. Johnny's mom",
        'Who, if anyone, is caring for them?')
    let witnesses = new TextAreaElement(section2.element,
        {name: 'Witnesses', required: true},
        '',
        'List any Witnesses and their contacts, separated by comma',
        4);
    let followup = new TextAreaElement(section2.element,
        { name: 'Actions-to-be-taken'},
        'Eg. text Johnny at 111-111-1111 the morning after to check if he needs additional care',
        'Describe Any Follow-up Actions to Be Taken',
        4)
    let actualFollowUp = new InputElement(section2.element,
        {name: 'Follow-up-Actions-Taken',
        type: "hidden"    
    });
}
function addSubmit(){
    let submitButton = new ButtonElement(theForm.element, submitActions,
        { 
            type: 'submit',
            id: 'form-submit',
        },
        'Submit'
        )
}
function submitActions(){
    if (formValidation() === true){
        replaceSubmit();
    }
}
function replaceSubmit(){
    let buttonElement = document.getElementById('form-submit');
       buttonElement.style.display = 'none';
    document.getElementById('my-form').style.display = 'none';
    let replacementElement = document.createElement('div');
        replacementElement.textContent = 'Submitting, please wait :)';
        replacementElement.classList.add('subtitle')
    thebody.appendChild(replacementElement);
    // console.log('submitting')
}
function formValidation(){
    let requiredArray = Array.from(document.querySelectorAll('[required]'));
    // console.table(requiredArray)
    let nRequired = requiredArray.length;
    let n = 0;
    for( let i = 0; i < nRequired; i++){
        console.log({ 'i': i})
        if (requiredArray[i].value == ''){
            alert(`please check fields ${requiredArray[i].name}`)
            
        }else n++;
    }
    console.log({
        'nRequired': nRequired,
        'n': n
    })
    if (n === nRequired){ return true}
}


