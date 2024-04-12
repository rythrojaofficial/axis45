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
export class BreakElement{
    constructor(parent){
        this.element = ''
        this.type = 'br';
        this.parent = parent;
        this.add();
    }

    add(){
        let newElement = document.createElement(this.type);
        if (this.parent){
            this.parent.appendChild(newElement);
        }
        this.element = newElement;
        
    }
}
export class SectionElement{
    constructor(parent, propertiesObject={}, content = ''){
        this.element = '';
        this.type = 'div';
        this.parent = parent;
        this.properties = propertiesObject;
        this.content = content;
        this.add();
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

export class InputElement{
    constructor(parent, propertiesObject, placeholder = '', label = ''){
        this.element = '';
        this.labelElement = ''
        this.type = 'input';
        this.parent = parent;
        this.properties = propertiesObject;
        this.placeholder = placeholder;
        this.label = label;
        this.add();
    }

    add(){
        let newElement = document.createElement(this.type);
        if (JSON.stringify(this.properties !== '{}')) {
            this.addProperties(newElement, this.properties);
        } 
        if (this.placeholder !== ''){
            newElement.placeholder = this.placeholder;
        }

        let newLabelElement = document.createElement('label');
        if (this.label !== ''){
            newLabelElement.setAttribute('for', this.properties.name);
            newLabelElement.textContent = this.label;
        }
        if (this.parent){
            if(this.label !== ''){
                this.parent.appendChild(newLabelElement);
            }
            this.parent.appendChild(newElement);
        }
        this.element = newElement;
        this.labelElement = newLabelElement;
        
    }

    addProperties(element, object){
        // add {propertyName: property} to element
        for (let property in object){
            element.setAttribute(`${property}`, object[property]);
        }


    }

}
export class TextAreaElement{
    constructor(parent, propertiesObject, placeholder = '', label = '', rows = ''){
        this.element = '';
        this.labelElement = ''
        this.type = 'textarea';
        this.parent = parent;
        this.properties = propertiesObject;
        this.placeholder = placeholder;
        this.label = label;
        this.rows = rows;
            // control width using css
        this.add();
        }
        add(){
            let newElement = document.createElement(this.type);
            if (JSON.stringify(this.properties !== '{}')) {
                this.addProperties(newElement, this.properties);
            } 
            if (this.placeholder !== ''){
                newElement.placeholder = this.placeholder;
            }
            if (JSON.stringify(this.rows !== '')){
                newElement.setAttribute('rows', JSON.stringify(this.rows));
                
            }
    
            let newLabelElement = document.createElement('label');
            if (this.label !== ''){
                newLabelElement.setAttribute('for', this.properties.name);
                newLabelElement.textContent = this.label;
            }
            if (this.parent){
                if(this.label !== ''){
                    this.parent.appendChild(newLabelElement);
                }
                this.parent.appendChild(newElement);
            }
            this.element = newElement;
            this.labelElement = newLabelElement;
            
        }
    
        addProperties(element, object){
            // add {propertyName: property} to element
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
