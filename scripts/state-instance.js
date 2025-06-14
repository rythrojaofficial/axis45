export class KvPair {
    constructor(name, element){
        this.name = name;
        this.element = element;
    }
}

export class State{
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

export function populateTarget(targ, obj, state){
    // console.log({'stateis': state.is})
    switch(state.is){
        case obj.name:{
            state.changeState('')
            break;
        }
        default:{
            state.changeState(obj.name);
            let thisParent = targ;
            thisParent.appendChild(
                state.retrieveElement(obj.name)
            )
            break;
        }
    }
}

export class MdState{
    constructor(){
        this.is = '';
        this.library = [];
    }
    changeState(newState){
        this.is = newState;
    }
    
    retrieveElement(name){
        for (let i = 0; i < this.library.length; i++){            
            if (name === this.library[i].name){
                return this.library[i].mdElement.element
            }
        }
    }
}