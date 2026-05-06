import { HtmlElement, mdElement, capitalizeWords } from "../htmlElement.js";
import { tapToPopulate } from "../tap-to-populate.js";
import { generalTapToPopulate } from "../general-tap-to-populate.js";
import { KvPair } from "../state-instance.js";

let formsIframeArray = [
    {
        active: true,
        name: 'member tally',
        checkFormLink:'https://docs.google.com/spreadsheets/d/1ubR4QNCNjvtW5DVs1o0tYddQmzzoTERIRMM04uIf_Kg/edit?usp=sharing',
        srcLink:'../forms/memberships/member-tally-form.html',
    },
    {
        active: true,
        name: 'add member',
        checkFormLink:'https://docs.google.com/spreadsheets/d/1Lzep4_1eJk5omSYb1wZ2_JHyHVjJQGfb_MFowWdmJTs/edit?usp=sharing',
        srcLink:'../forms/memberships/new-members-form.html',
    },
    {
        active: true,
        name: 'log expenses',
        checkFormLink:'https://docs.google.com/spreadsheets/d/1jtoN7tPJvzYyLqdjuHN0YoNxsVyTGksn7Vm4RjtTIoA/edit#gid=0',
        srcLink:'./expe.html',
    },
    {
        active: true,
        name: 'bonus wednesday',
        checkFormLink:'https://docs.google.com/spreadsheets/d/1raSUB3jhBuu8Nndp-n_HY1QW5RJUHBFWFA-rjGtEgMk/edit?usp=sharing',
        srcLink:'../forms/wednesday-bonus/wednesday-bonus.html',
    },
    {
        active: true,
        name: 'Taskmaster',
        checkFormLink: {
            'Co-Op Tasks':'https://docs.google.com/spreadsheets/d/1iTjw5XojY-wwjcTHjprjg-WRZNOgtpkvwyn_nsSYry4/edit?usp=sharing',
            'Co-Op Members':'https://docs.google.com/spreadsheets/d/1cHmzkOeFDXXlLb_hYgEmGQrVbkbjbitHoQknycrDHhc/edit?gid=0#gid=0',
        },
        srcLink:'../forms/co-op/taskmaster.html'
    },
    {
        active: true,
        name: 'incident report',
        checkFormLink:'https://docs.google.com/spreadsheets/d/1JSAnYZ9y7ouFPncnBmDjvtEPiqbJlg5qf1-oUdDAmjs/edit?usp=sharing',
        srcLink: '../forms/incident-report/incident-report-form.html',
    },
    
    
]
let formsKvPairArray = [];
// populate tap-to-populate forms
for (const form of formsIframeArray){
    // set iframe properties 
    form.properties = {
        src: form.srcLink,
        width: '100%',
        frameborder:'0',
        height: '400',
        marginHeight:'0',
        marginWidth:'0',            
    };

    let dummyParent = document.createElement('div');
    if(form.checkFormLink !== ''){
        if (typeof form.checkFormLink === 'object'){
            for (const [key, value] of Object.entries(form.checkFormLink)){
                let checkFormButton = new HtmlElement('div',
                    dummyParent,
                    {class: 'flex-button-container'}
                )
                    let div1 = new HtmlElement('div',
                        checkFormButton.element,
                        {},
                    )
                    let a1 = new HtmlElement('a',
                        div1.element,
                        {href: value},
                        `check ${key} responses`
                    )
            }
        }else{
            // check form responses as a button
            let checkFormButton = new HtmlElement('div',
                dummyParent,
                {class: 'flex-button-container'}
            )
            let div1 = new HtmlElement('div',
                checkFormButton.element,
                {},
            )
            let a1 = new HtmlElement('a',
                div1.element,
                {href: form.checkFormLink},
                `check ${form.name} responses`
            )
        }
        }
        
    let newEl = new HtmlElement(
        'iframe',
        dummyParent,
        form.properties
    )
    let kvPair = new KvPair(form.name, dummyParent)
    formsKvPairArray.push(kvPair)
}
const membershipButtonsWrapper = document.getElementById('membership-button-toggle');
const membershipDisplayTarget = document.getElementById('membership-toggle-display');
const membershipLinkTemplates = {
    linkTemplate: {
        // ./forms/memberships/${name}.html
        before:'../forms/memberships/',  
        after: '-form.html'
        },
    classes: ['container'],
    id: `-iframe` // ${name}-iframe
}
generalTapToPopulate(formsKvPairArray, membershipButtonsWrapper, membershipDisplayTarget, membershipLinkTemplates, true)

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
for (const newMD of adminMDPopulate){
    if (newMD.active === true){
        const thisParent = document.getElementById(newMD.parentID);
        const thisMd = `./adminMD/${newMD.name}.md`;
        const thisID = newMD.name;
        let newElement = new mdElement(
            thisParent,
            newMD.properties,
            thisMd
        )
        newElement.id = newElement.name;
    }
};





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


