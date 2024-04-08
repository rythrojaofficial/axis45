export class HtmlElement{
    constructor(type, parent, propertiesObject = {}, content = ''){
        this.element = '';
        this.type = type;
        this.parent = parent;
        this.properties = propertiesObject;
        this.content = content;
        this.add()
    }

    add(){
        let newElement = document.createElement(this.type);
            
        if (JSON.stringify(this.properties !== '{}')) {
            this.addProperties(newElement, this.properties);
        } 
        if (this.content !== ''){
            newElement.textContent = this.content;
        }
        if (this.parent){
            this.parent.appendChild(newElement);
        }
        this.element = newElement;
        
    }

    addProperties(element, object){
        
        for (let property in object){
            element.setAttribute(`${property}`, object[property]);
        }


    }
}
export class SelectElement{
    constructor(parent, propertiesObject = {}, optionsArray = [], content = ''){
        this.element = '';
        this.type = 'select';
        this.parent = parent;
        this.properties = propertiesObject;
        this.options = optionsArray;
        this.content = content;
        this.add();
        this.addSelectOptions(this.options);
    }

    add(){
        let newElement = document.createElement(this.type);
            
        if (JSON.stringify(this.properties !== '{}')) {
            this.addProperties(newElement, this.properties);
        } 
        if (this.content !== ''){
            newElement.textContent = this.content;
        }
        if (this.parent){
            this.parent.appendChild(newElement);
        }
        this.element = newElement;
        
    }

    addProperties(element, object){
        // add {propertyName: property} to element
        for (let property in object){
            element.setAttribute(`${property}`, object[property]);
        }


    }
    addSelectOptions(Array){
        let labelOption = new HtmlElement('option',
        document.getElementById(this.properties.id),
        { value : this.properties.name },
        this.properties.name)
        Array.forEach((option)=>{
            let newOption = new HtmlElement('option',
            document.getElementById(this.properties.id),
            { value: option },
            option)
        })
    }
       
    
}
export class RadioElement {
    constructor(parent, propertiesObject = {}, content = ''){
        this.element = '';
        this.type = 'input';
        this.parent = parent;
        this.properties = propertiesObject;
        this.properties.type = 'radio';
        this.content = content;
        this.add()

    }
    add(){
        let newElement = document.createElement(this.type);
            
        if (JSON.stringify(this.properties !== '{}')) {
            this.addProperties(newElement, this.properties);
        } 
        if (this.content !== ''){
            newElement.textContent = this.content;
        }
        if (this.parent){
            this.parent.appendChild(newElement);
        }
        this.element = newElement;

        let newLabel = document.createElement('label');
            newLabel.for = this.properties.value;
            newLabel.textContent = this.properties.value;
        this.parent.appendChild(newLabel);
        this.addBreak()
        
    }

    addProperties(element, object){
        
        for (let property in object){
            element.setAttribute(`${property}`, object[property]);
        }


    }
    addLabel(){
        this.add()
    }
    addBreak(){
        let newBr = new HtmlElement('br',this.parent)
    }

}
export class ButtonElement{
    constructor(parent, clickfunction = '', propertiesObject = {}, content = ''){
        this.element = '';
        this.type = 'button';
        this.parent = parent;
        this.properties = propertiesObject;
        this.content = content;
        this.clickfunction = clickfunction
        this.add()
    }

    add(){
        let newElement = document.createElement(this.type);
        if (this.clickfunction !== ''){
            newElement.addEventListener('click', this.clickfunction);
        }
        if (JSON.stringify(this.properties !== '{}')) {
            this.addProperties(newElement, this.properties);
        } 
        if (this.content !== ''){
            newElement.textContent = this.content;
        }
        
        if (this.parent){
            this.parent.appendChild(newElement);
        }
        this.element = newElement;
        
    }

    addProperties(element, object){
        
        for (let property in object){
            element.setAttribute(`${property}`, object[property]);
        }


    }
}
