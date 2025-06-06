import { populateShowMore } from "../showMore.js"
// add class show-more 
import { HtmlElement, mdElement, capitalizeWords } from "../htmlElement.js";
import { tapToPopulate } from "../tap-to-populate.js";

const googleFormsIframePopulate = [
    {
        active: true,
        name: '',
        parentID:'membership-addition-iframe',
        properties:
            {
                src:'../forms/memberships/new-members-form.html',
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
    {
        active: true,
        name: '',
        parentID:'bonus-wednesday-iframe',
        properties:
            {
                src:'../forms/wednesday-bonus/wednesday-bonus.html',
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
tapToPopulate(checklistsArray, checklistButtonsWrapper, checklistDisplayTarget, checklistLinkTemplates)

// ###populate where is stuff buttons ###
const whereIsStuffChecklist = [
    {
        active:true,
        mdTrueLink: '',
        name: 'where is first Aid',
        properties: {
            class: '',
            id: ''
        },
    },
    {
        active:true,
        mdTrueLink: '',
        name: 'where is misc',
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
tapToPopulate(whereIsStuffChecklist, whereIsStuffWrapper, whereisStuffDisplayTarget, whereisStuffTemplates)


