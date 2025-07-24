import { tapToPopulate } from "../../scripts/tap-to-populate.js";
const displayArray = [
    {
            active:true,
            mdTrueLink: '',
            name: 'info',
            properties: {
                class:'',
                id:''
            }
    },
    {
        active:false, // must be true to work
        mdTrueLink: '', //  only if you don't have a template, or goes off template
        name: 'Four Pillars of Coaching', // required (names the button)
        properties: {
            class:'', // if it needs a special class
            id:'' // if you need it to have a specific non templated name
        }
    },
    {
        active:false,
        mdTrueLink: '../workouts/tuesday-tricking-exercise.md',
        name: 'Tuesday Tricking Exercise',
        properties: {
            class:'',
            id:''
        }
    },
    {
        active:false,
        mdTrueLink: '../workouts/exercise-library.md',
        name: 'Exercise Library',
        properties: {
            class:'',
            id:''
        }
    },
    {
        active:false,
        mdTrueLink: '',
        name: 'Thursday Observation Checklist',
        properties: {
            class:'',
            id:''
        }
    },
    {
        active:false,
        mdTrueLink: '',
        name: 'On Warm ups',
        properties: {
            class:'',
            id:''
        }
    },
    

]
const archived = [
    {
        active:false,
        mdTrueLink: '../workouts/subbing/250422tuesday-tricking.md',
        name: '250422 Tuesday Tricking Lesson Plan',
        properties: {
            class:'',
            id:''
        }
    },
]
const selectionWrapper = document.createElement('div');
    selectionWrapper.classList.add('button-toggle-wrapper')
const displayTarget = document.createElement('div');
    displayTarget.classList.add('markdown-body')
const body = document.querySelector('body');
body.append(selectionWrapper, displayTarget)
const linkTemplates = {
    mdTemplate: {
        // ./mdFiles/${name}.md
        before:'./mdFiles/',  
        after: '.md'
        },
    classes: 'gray-container',
    id: `-md` // ${name}-md
}

tapToPopulate(displayArray, selectionWrapper, displayTarget, linkTemplates, true)
