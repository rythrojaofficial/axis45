import { tapToPopulate } from "../scripts/tap-to-populate.js";
const displayArray = [
    {
            active:true, // must be true to work
            mdTrueLink: '', //  only if you don't have a template, or goes off template
            name: 'Four Pillars of Coaching', // required (names the button)
            properties: {
                class:'', // if it needs a special class
                id:'' // if you need it to have a specific non templated name
            }
        },
        {
            active:true,
            mdTrueLink: '../workouts/tuesday-tricking-exercise.md',
            name: 'Tuesday Tricking Exercise',
            properties: {
                class:'',
                id:''
            }
        },
        {
            active:true,
            mdTrueLink: '../workouts/exercise-library.md',
            name: 'Exercise Library',
            properties: {
                class:'',
                id:''
            }
        },
        {
            active:true,
            mdTrueLink: '',
            name: 'Thursday Flipping Checklist',
            properties: {
                class:'',
                id:''
            }
        }
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
        // ./secret_pages/adminMD/${name}.md
        before:'../mercenary-blog/mdfiles/',  
        after: '.md'
        },
    classes: 'gray-container',
    id: `-checklist` // ${name}-checklist
}

tapToPopulate(displayArray, selectionWrapper, displayTarget, linkTemplates)