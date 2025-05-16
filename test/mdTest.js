import { mdConvert } from "../scripts/markdown-parse.js";
const linkTemplates = {
    mdTemplate: {
        // ./secret_pages/adminMD/${name}.md
        before:'../../mercenary-blog/mdfiles/',  
        name:'planning-checklist',
        after: '.md',
        fulLink(){
            return this.before+this.name+this.after
        } 
        },
    classes: 'gray-container',
    id: `` // ${name}-checklist
}
const selectionWrapper = document.createElement('div');
    selectionWrapper.classList.add('container')
const displayTarget = document.createElement('div');
    displayTarget.classList.add('markdown-body')
mdConvert(displayTarget, linkTemplates.mdTemplate.fulLink())

selectionWrapper.appendChild(displayTarget);

const body = document.querySelector('body');
body.appendChild(selectionWrapper)


