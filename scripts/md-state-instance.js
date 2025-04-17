export class State{
    constructor(){
        this.is = '';
        this.library = [];
    }
    change(newState){
        this.is = newState;
    }
    
    retrieveMD(name){
        for (let i = 0; i < this.library.length; i++){            
            if (name === this.library[i].name){
                return this.library[i].mdElement.element
            }
        }
    }
}