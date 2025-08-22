import { tapToPopulate } from "../scripts/tap-to-populate.js";
const displayArray = [
    {
            active:true,
            mdTrueLink: '',
            name: 'addendum to dogens titanium ankles',
            properties: {
                class:'',
                id:''
            }
    },
 
    

]
const archived = [

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

tapToPopulate(displayArray, selectionWrapper, displayTarget, linkTemplates, true)
