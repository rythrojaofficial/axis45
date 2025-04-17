
import { State } from "./md-state-instance.js";
import { capitalizeWords, clearTarget, ButtonElement, mdElement } from "./htmlElement.js";

//  sample usage
// const checklistsArray = [
//     {
//             active:true, // must be true to work
//             mdTrueLink: '', //  only if you don't have a template, or goes off template
//             name: 'opening', // required (names the button)
//             properties: {
//                 class:'', // if it needs a special class
//                 id:'' // if you need it to have a specific non templated name
//             }
//         },
//         {
//             active:true,
//             mdTrueLink: '',
//             name: 'closing',
//             properties: {
//                 class:'',
//                 id:''
//             }
//         },
//         {
//             active:true,
//             mdTrueLink: '',
//             name: 'session',
//             properties: {
//                 class:'',
//                 id:''
//             }
//         },
// ]
// const checklistButtonsWrapper = document.getElementById('checklist-button-toggle');
// const checklistDisplayTarget = document.getElementById('checklist-toggle-display');
// const checklistLinkTemplates = {
//     mdTemplate: {
//         // ./secret_pages/adminMD/${name}.md
//         before:'./adminMD/',  
//         after: '-checklist.md'
//         },
//     classes: 'gray-container',
//     id: `-checklist` // ${name}-checklist
// }

// checklistsArray.forEach((obj)=>{
//     tapToPopulate(obj, checklistButtonsWrapper, checklistDisplayTarget, checklistLinkTemplates)
// })

class kvPair{
    constructor(name, mdEl){
        this.name = name;
        this.mdElement = mdEl;
    }
}

export function tapToPopulate(arrOfObjects, buttonWrapper, displayTarget, templates = ''){
        let state = new State
        let placeHolderParent = document.createElement('div');
        arrOfObjects.forEach(obj => {
            let thisMD;
                if (obj.mdTrueLink !== ''){
                    thisMD = obj.mdTrueLink;
                }else thisMD = `${templates.mdTemplate.before}${obj.name}${templates.mdTemplate.after}`; // add template md
                // console.log(thisMD)
                obj.properties.class +=` ${templates.classes}` // add template classes to class list
                if(templates.id !== ''){
                    obj.properties.id = `${obj.name}${templates.id}`// add template id
                }
                let newElement = new mdElement(
                    placeHolderParent,
                    obj.properties,
                    thisMD
                )
        let libObject = new kvPair(obj.name, newElement)
        state.library.push(libObject)
        if (obj.active === true){
            let button = new ButtonElement(
                buttonWrapper,
                ()=>{
                    clearTarget(displayTarget);
                    populateTarget(displayTarget, obj, state, templates)
                },
                {},
                capitalizeWords(obj.name)
            )
        }
    });
    
}

function populateTarget(targ, obj, state, templates){
    // console.log({'stateis': state.is})
    switch(state.is){
        case obj.name:{
            state.change('')
            break;
        }
        default:{
            state.change(obj.name);
            let thisParent = targ;
            // console.log({
            //     'state': state
            // })
            thisParent.appendChild(
                state.retrieveMD(obj.name)
            )
            break;
        }
    }
}