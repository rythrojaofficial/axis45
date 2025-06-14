import { capitalizeWords, clearTarget, ButtonElement } from "./htmlElement.js";
import { State, populateTarget } from "./state-instance.js";

export function generalTapToPopulate(arrOfkvPairs, buttonWrapper, displayTarget, templates = '', showFirst = false){
    let state = new State;
    let placeHolderParent = document.createElement('div');
    arrOfkvPairs.forEach( pair => {
        if(templates !== ''){ // if templates exists
            if(templates.classes.length > 0){ // if the array is not empty
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