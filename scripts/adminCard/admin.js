// import * as html from "../htmlElement.js"
// // HtmlElement: type, parent, properties{}, content""
// // mdConvert: parent, propertiesObject = {}, mdfile
import { populateShowMore } from "../showMore.js"
// add class show-more 
import * as admin from "./adminCard.js"
import { ButtonElement, HtmlElement, mdElement, capitalizeWords } from "../htmlElement.js";
const googleFormsIframePopulate = [
    {
        active: true,
        name: '',
        parentID:'membership-addition-iframe',
        properties:
            {
                src:'https://docs.google.com/forms/d/e/1FAIpQLSeOSc7-6nNn7HhSEbQ2MSank20qanyZxVObD_176kdU0qDihw/viewform?embedded=true',
                width: '100%',
                frameborder:'0',
                height: '400',
                marginHeight:'0',
                marginWidth:'0',
            }
    },
    {
        active: true,
        name: '',
        parentID:'tally-form-iframe',
        properties:
            {
                src:'https://docs.google.com/forms/d/e/1FAIpQLScd0QQ2u3JZmqL97GtPzVbWeKFlOEO1WlSSGNCNtIQbGD7MnA/viewform?embedded=true',
                width: '100%',
                frameborder:'0',
                height: '400',
                marginHeight:'0',
                marginWidth:'0',
            }
    },
    {
        active: true,
        name: '',
        parentID:'log-expenses-iframe',
        properties:
            {
                src:'./expe.html',
                width: '100%',
                frameborder:'0',
                height: '400',
                marginHeight:'0',
                marginWidth:'0',            }
    },
    
]
googleFormsIframePopulate.forEach((newFrame)=>{
        let thisParent = document.getElementById(newFrame.parentID)
        if(newFrame.active === true){
            let newFrameElement = new HtmlElement(
                'iframe',
                thisParent,
                newFrame.properties
            )
        }
})
const adminMDPopulate = [
    // where is stuff
    // {
    //     active: true,
    //     name: 'where-is-first-aid',
    //     parentID: 'first-aid',
    //     properties: {
    //         class: 'container',
    //         id: 'where-is-first-aid'
    //     },
    // },
    // {
    //     active: true,
    //     name: 'where-is-misc',
    //     parentID: 'misc',
    //     properties: {
    //         class: 'container',
    //         id: 'where-is-first-aid',
    //     }
        
    // },
    // injury/emergency
    {
        active: true,
        name: 'injury-unconscious',
        parentID: 'injury-1',
        properties: {
            class: 'container',
        },
    },
    {
        active: true,
        name: 'injury-conscious-bad',
        parentID: 'injury-2',
        properties: {
            class: 'container',
        },
    },
    {
        active: true,
        name: 'injury-conscious-bummer',
        parentID: 'injury-3',
        properties: {
            class: 'container',
        },
    },
    
]
adminMDPopulate.forEach((newMD) => {
    if (newMD.active === true){
        let thisParent = document.getElementById(newMD.parentID);
        let thisMd = `./adminMD/${newMD.name}.md`;
        let thisID = newMD.name;
        let newElement = new mdElement(
            thisParent,
            newMD.properties,
            thisMd
        )
        newElement.id = newElement.name;
        // newElement.addProperties('style', 'text-align:left')
    }
});




// ################
// populate checklistbuttons 
// ################### 

class State{
    constructor(){
        this.is = '';
    }
    change(newState){
        this.is = newState;
    }
}
function clearTarget(targ){
    targ.innerHTML = '';
}
function checklistPopulate(obj, buttonWrapper, displayTarget, state){
    if (obj.active === true){
        let button = new ButtonElement(
            buttonWrapper,
            ()=>{
                clearTarget(displayTarget);
                populateTarget(displayTarget, obj, state)
            },
            {},
            capitalizeWords(obj.name)
        )
    }
}

function populateTarget(targ, obj, state){
    switch(state.is){
        case obj.name:{
            state.change('')
            break;
        }
        default:{
            let thisParent = targ;
            let thisMD;
            if (obj.checklist === true){
                thisMD = `./adminMD/${obj.name}-checklist.md`;
            }else thisMD = `./adminMD/${obj.name}.md`;
            let newElement = new mdElement(
                thisParent,
                obj.properties,
                thisMD
            )
        }
            state.change(obj.name);
            break;
    }

}
let openCloseChecklistState = new State;
const checklistsArray = [
    {
            active:true,
            checklist: true,
            name: 'opening',
            properties: {
                class:'gray-container',
                id:'opening-checklist'
            }
        },
        {
            active:true,
            checklist: true,
            name: 'closing',
            properties: {
                class:'gray-container',
                id:'closing-checklist'
            }
        },
        {
            active:true,
            checklist: true,
            name: 'session',
            properties: {
                class:'gray-container',
                id:'session-checklist'
            }
        },
]
const checklistButtonsWrapper = document.getElementById('checklist-button-toggle');
const checklistDisplayTarget = document.getElementById('checklist-toggle-display');


checklistsArray.forEach((obj)=>{
    checklistPopulate(obj, checklistButtonsWrapper, checklistDisplayTarget, openCloseChecklistState)
})
const whereIsStuffChecklist = [
    {
        active:true,
        checklist: false,
        name: 'where-is-first-aid',
        properties: {
            class: 'gray-container',
            id: 'where-is-first-aid'
        },
    },
    {
        active:true,
        checklist: false,
        name: 'where-is-misc',
        properties: {
            class: 'gray-container',
            id: 'where-is-first-aid',
        }
        
    },
    
]
let whereIsStuffState = new State;
const whereIsStuffWrapper = document.getElementById('where-is-stuff-button-wrapper')
const whereisStuffDisplayTarget = document.getElementById('where-is-stuff-toggle-display')
whereIsStuffChecklist.forEach((obj)=>{
    checklistPopulate(obj, whereIsStuffWrapper, whereisStuffDisplayTarget, whereIsStuffState)

})

