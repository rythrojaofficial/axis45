import { capitalizeWords, clearTarget, ButtonElement, hyphenated, HtmlElement } from "./htmlElement.js";


class State{
    constructor(){
        this.is = '';
        this.library = [];
    }

    changeState(newState){
        this.is = newState;
    }

    retrieveElement(elName){
        for (let i=0; i< this.library.length; i++){
            if (elName === this.library[i].name){
                return this.library[i].element
            }
        }
    }
}

export class KvPair {
    constructor(name, element){
        this.name = name;
        this.element = element;
    }
}


export function generalTapToPopulate(arrOfkvPairs, buttonWrapper, displayTarget, templates = '', showFirst = true){
    console.log('working')
    let state = new State;
    let placeHolderParent = document.createElement('div');
    arrOfkvPairs.forEach( pair => {
        if(templates !== ''){
            if(templates.classes !== ''){
                templates.classes.forEach( className => {
                    pair.element.classList.add(className)
                })
            }
        state.library.push( pair );
        let button = new ButtonElement(
            buttonWrapper,
            ()=>{
                clearTarget(displayTarget);
                populateTarget(displayTarget, pair, state)
            },
            {},
            capitalizeWords(pair.name)
            )
        }

    });
    if (showFirst === true){
        const firstObjName = state.library[0].name;
        const firstObj = state.retrieveElement(firstObjName);
        displayTarget.appendChild(firstObj);
    }
}

function populateTarget(targ, obj, state){
    // console.log({'stateis': state.is})
    switch(state.is){
        case obj.name:{
            state.changeState('')
            break;
        }
        default:{
            state.changeState(obj.name);
            let thisParent = targ;
            // console.log({
            //     'state': state
            // })
            thisParent.appendChild(
                state.retrieveElement(obj.name)
            )
            break;
        }
    }
}