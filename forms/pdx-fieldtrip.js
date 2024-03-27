// Classes
class HtmlElement{
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
class SelectElement{
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
class RadioElement {
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
        
    }

    addProperties(element, object){
        
        for (let property in object){
            element.setAttribute(`${property}`, object[property]);
        }


    }
    addLabel(){
        this.add()
    }
}

// on load 
let wrapper = new HtmlElement('form',
    document.querySelector('body'),
    {   
        method: 'POST',
        action: 'https://script.google.com/macros/s/AKfycby9n3m3vgXHCM3fhm1siapiRC5GfNMZQae9s5WX_JPPKzb0GBu-juNIOVAnX2bvt-wRjQ/exec',
        class: 'wrapper'
    } 
)
addForm()

// functions
function addForm(){
    addContact();
    addEmergency();
    addSeaToPdx();
    addPdxToSea();  
    addSubmit();  
}
function addContact(){
    let infoFieldset = new HtmlElement('fieldset', wrapper.element);
        let infoLegend = new HtmlElement('legend', 
        infoFieldset.element,{},
        'Contact Info')
        // name 
        let infoName = new HtmlElement('input', 
        infoFieldset.element,
        {
            type: 'text',
            name: 'Name',
            id:'input-name',
            placeholder: 'Name'
        });
        // phone number
        let infoPhone = new HtmlElement('input',
        infoFieldset.element,
        {
            type: 'tel',
            name: 'Phone Number',
            id: 'input-phone',
            placeholder: 'Phone Number'
        })
        // email
        let infoEmail = new HtmlElement('input',
        infoFieldset.element,
        {
            type: 'email',
            name: 'Email',
            id: 'input-email',
            placeholder: 'Email'
        })
        //  instagram
        let infoInstagram = new HtmlElement('input',
        infoFieldset.element,
        {
            type: 'text',
            name: 'Instagram',
            id: 'input-instagram',
            placeholder: 'Instagram'
        })
    
}
function addEmergency(){
    // emergency Contact
    let infoEmergency = new HtmlElement('fieldset', wrapper.element);
        let infoEmergencyLegend = new HtmlElement('legend', 
        infoEmergency.element,{},
        'Emergency Contact Info')
        let infoEmergencyContact = new HtmlElement('input',
        infoEmergency.element,
        {
            type: 'text',
            name: 'Emergency Contact',
            id: 'input-emergency-contact',
            placeholder: 'Emergency Contact Name'
        });
        let infoEmergencyRelation = new HtmlElement('input',
        infoEmergency.element,
        {
            type: 'text',
            name: 'Contact Relationship',
            id: 'input-emergency-relationship',
            placeholder: 'Contact Relationship'
        })
        let infoEmergencyNumber = new HtmlElement('input',
        infoEmergency.element,
        {
            type: 'tel',
            name: 'Emergency Contact Number',
            id: 'input-emergency-contact-number',
            placeholder: 'Emergency Contact Number'
        })
}
function addSeaToPdx(){
    // Transportation sea->pdx
    let transportationPreferenceToPdx = new HtmlElement('fieldset', wrapper.element);
        let LegendTransportationPreferenceToPdx = new HtmlElement('legend',
        transportationPreferenceToPdx.element,{},
        'Transportation SEA -> PDX')
        // car and drive

        let radioWrapper = new HtmlElement('fieldset', transportationPreferenceToPdx.element);
        let legendRadioWrapper = new HtmlElement('legend', 
            radioWrapper.element,{},
            'Cars & Rides')

        let radioDrive = new RadioElement(
        radioWrapper.element,
        {
            name: 'Transport SEA->PDX',
            id: 'radio-drive-pdx',
            value: 'I have a car and want to drive'
        });
        // drive if necessary
        let radioDriveIfNecessary = new RadioElement(
        radioWrapper.element,
        {
            name: 'Transport SEA->PDX',
            id: 'radio-drive-pdx-necessary',
            value: "I have a car and I'll drive if necessary"
        });
        // need a ride
        let radioNeedRide = new RadioElement(
            radioWrapper.element,
        {
            name: 'Transport SEA->PDX',
            id: 'radio-need-ride-pdx',
            value: "I don't have a car and I need a ride",
        });
        // don't need a ride
        let radioDontNeedRide = new RadioElement(
            radioWrapper.element,
        {
            name: 'Transport SEA->PDX',
            id: 'radio-dont-need-ride-pdx',
            value: "I don't need a ride"
        });

    // Time Leaving for PDX
    let timePreferencePdx = new HtmlElement('fieldset', transportationPreferenceToPdx.element);
        let legendTimePreferencePdx = new HtmlElement('legend', 
        timePreferencePdx.element,{},
        'Ideally, what time would you leave?')
        let radioSaturdayAM = new RadioElement(
            timePreferencePdx.element,
            {
                name: 'Time SEA->PDX',
                id: 'radio-time-pdx-friday',
                value: "Saturday AM"
            }
        )
        let radioOther = new RadioElement(
            timePreferencePdx.element,
            {
                name:'Time SEA->PDX',
                id: 'radio-time-pdx-other',
                value: 'Other'
            }
        );
        let radioOtherOption = new HtmlElement('input',
        timePreferencePdx.element,
        {
            type: 'text',
            name: 'Time SEA->PDX other',
            id: 'radio-time-pdx-other-option'

        })
    // Total seats
    let totalsSeatsPdx = new HtmlElement('fieldset', transportationPreferenceToPdx.element);
        let legendTotalSeats = new HtmlElement('legend',
        totalsSeatsPdx.element,{},
        'Drivers Only');
        let totalSeatsInput = new SelectElement(totalsSeatsPdx.element,
            {
               name: 'Total Seats (Including You)',
               id: 'input-total-seats-pdx' 
            },
            [1,2,3,4,5,6,7,8]
            )
    // leaving location
    let leavingLocationPdx = new HtmlElement('fieldset', transportationPreferenceToPdx.element);
            let legendLeavingLocationPdx = new HtmlElement('legend',
            leavingLocationPdx.element,{},
            'What neighborhood/general area are you leaving from'
            )
            let inputLeavingLocationPDX = new HtmlElement('input',
            leavingLocationPdx.element,
            {
                type: 'text',
                name: 'What neighborhood/general area are you leaving from',
                id: 'input-area-leaving-from-sea',
                placeholder: 'eg. capitol hill'
            });
}
function addPdxToSea(){
    // Transportation sea->pdx
    let transportationPreferenceToSea = new HtmlElement('fieldset', wrapper.element);
        let LegendTransportationPreferenceToSea = new HtmlElement('legend',
        transportationPreferenceToSea.element,{},
        'Transportation PDX -> SEA')
        // car and drive

        let radioWrapper = new HtmlElement('fieldset', transportationPreferenceToSea.element);
        let legendRadioWrapper = new HtmlElement('legend', 
            radioWrapper.element,{},
            'Cars & Rides')

        let radioDrive = new RadioElement(
        radioWrapper.element,
        {
            name: 'Transport PDX->SEA',
            id: 'radio-drive-SEA',
            value: 'I have a car and want to drive'
        });
        // drive if necessary
        let radioDriveIfNecessary = new RadioElement(
        radioWrapper.element,
        {
            name: 'Transport PDX->SEA',
            id: 'radio-drive-sea-necessary',
            value: "I have a car and I'll drive if necessary"
        });
        // need a ride
        let radioNeedRide = new RadioElement(
            radioWrapper.element,
        {
            name: 'Transport PDX->SEA',
            id: 'radio-need-ride-sea',
            value: "I don't have a car and I need a ride",
        });
        // don't need a ride
        let radioDontNeedRide = new RadioElement(
            radioWrapper.element,
        {
            name: 'Transport PDX->SEA',
            id: 'radio-dont-need-ride-sea',
            value: "I don't need a ride"
        });

    // Time Leaving for PDX
    let timePreferenceSea = new HtmlElement('fieldset', transportationPreferenceToSea.element);
        let legendTimePreferenceSea = new HtmlElement('legend', 
        timePreferenceSea.element,{},
        'Ideally, what time would you leave?')
        let radioSaturdayPM = new RadioElement(
            timePreferenceSea.element,
            {
                name: 'Time PDX->SEA',
                id: 'radio-time-sea-Saturday',
                value: "Saturday PM"
            }
        )
        let radioSundayAM = new RadioElement(
            timePreferenceSea.element,
            {
                name: 'Time PDX->SEA',
                id: 'radio-time-sea-Sunday',
                value: "Sunday AM"
            }
        )
        let radioOther = new RadioElement(
            timePreferenceSea.element,
            {
                name:'Time PDX->SEA',
                id: 'radio-time-sea-other',
                value: 'Other'
            }
        );
        let radioOtherOption = new HtmlElement('input',
        timePreferenceSea.element,
        {
            type: 'text',
            name: 'Time PDX->SEA other',
            id: 'radio-time-sea-other-option'

        })
    // Total seats
    let totalsSeats = new HtmlElement('fieldset', transportationPreferenceToSea.element);
        let legendTotalSeats = new HtmlElement('legend',
        totalsSeats.element,{},
        'Drivers Only');
        let totalSeatsInput = new SelectElement(totalsSeats.element,
            {
               name: 'Total Seats (Including You) -> Seattle',
               id: 'input-total-seats-sea' 
            },
            [1,2,3,4,5,6,7,8]
            )
    // leaving location
    let returningLocationSea = new HtmlElement('fieldset', transportationPreferenceToSea.element);
            let legendLeavingLocationSea = new HtmlElement('legend',
            returningLocationSea.element,{},
            'What neighborhood/general area are you leaving from'
            )
            let inputReturningLocationSea = new HtmlElement('input',
            returningLocationSea.element,
            {
                type: 'text',
                name: 'What neighborhood/general area are you returning to',
                id: 'input-area-returning-to-sea',
                placeholder: 'eg. capitol hill'
            });
}
function addSubmit(){
    let submit = new HtmlElement('button',
    wrapper.element,
    { id: 'submit-button' },
    'Submit')

    submit.element.addEventListener('click', ()=>{
        wrapper.element.innerHTML = '';
        wrapper.element.textContent = 'Submitting. . . Please stay on page :)'
    })
}

