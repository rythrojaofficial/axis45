// import * as html from "../htmlElement.js"
// // HtmlElement: type, parent, properties{}, content""
// // mdConvert: parent, propertiesObject = {}, mdfile
import { populateShowMore } from "../showMore.js"
// add class show-more 
import * as admin from "./adminCard.js"
import { ButtonElement, HtmlElement, mdElement, capitalizeWords } from "../htmlElement.js";
import { tapToPopulate } from "../tap-to-populate.js";

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

const checklistsArray = [
    {
            active:true,
            mdTrueLink: '',
            name: 'opening',
            properties: {
                class:'',
                id:''
            }
        },
        {
            active:true,
            mdTrueLink: '',
            name: 'session',
            properties: {
                class:'',
                id:''
            }
        },
        {
            active:true,
            mdTrueLink: '',
            name: 'closing',
            properties: {
                class:'',
                id:''
            }
        },
]
const checklistButtonsWrapper = document.getElementById('checklist-button-toggle');
const checklistDisplayTarget = document.getElementById('checklist-toggle-display');
const checklistLinkTemplates = {
    mdTemplate: {
        // ./secret_pages/adminMD/${name}.md
        before:'./adminMD/',  
        after: '-checklist.md'
        },
    classes: 'gray-container',
    id: `-checklist` // ${name}-checklist
}

checklistsArray.forEach((obj)=>{
    tapToPopulate(obj, checklistButtonsWrapper, checklistDisplayTarget, checklistLinkTemplates)
})


const whereIsStuffChecklist = [
    {
        active:true,
        mdTrueLink: '',
        name: 'where-is-first-aid',
        properties: {
            class: '',
            id: ''
        },
    },
    {
        active:true,
        mdTrueLink: '',
        name: 'where-is-misc',
        properties: {
            class: '',
            id: '',
        }
        
    },
    
]

const whereIsStuffWrapper = document.getElementById('where-is-stuff-button-wrapper')
const whereisStuffDisplayTarget = document.getElementById('where-is-stuff-toggle-display')
const whereisStuffTemplates = {
    mdTemplate:{
        before: './adminMD/',
        after: '.md'
    },
    classes: 'gray-container',
    id: `-populated`
}
whereIsStuffChecklist.forEach((obj)=>{
    tapToPopulate(obj, whereIsStuffWrapper, whereisStuffDisplayTarget, whereisStuffTemplates)

})

