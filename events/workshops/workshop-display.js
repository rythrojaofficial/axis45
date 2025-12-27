import { HtmlElement, mdElement, SelectElement, ButtonElement } from "../../scripts/htmlElement.js";
import { readText } from "../../scripts/getText.js";
import { upcomingWorkshops } from "./upcoming-workshops.js";
import { sortableDateToKdsObject, localDateToSortableDate } from "../../scripts/parsedate.js";
import { today } from "../../news/today.js";

const displayWorkshop = document.getElementById('display-workshop');
displayUpcoming();


console.log('setting up workshop Codes Array')
let workshopCodesArray = [
    {
        name:'241116technical-sequences',
        code:'4novts',
        mdEl:''
    },
    {
        name:'241205hs',
        code:'4dechs',
        mdEl:''
    },
    {
        name:'241212raiz',
        code:'4decrz',
        mdEl:''
    },
    {
        name:'250406aerialwushu',
        code:'5apraw',
        mdEl:''
    },
    {
        name:'251218btwist',
        code:'5decbt',
        mdEl:''
    },
]

console.log({workshopCodesArray:workshopCodesArray})

console.log('fetching mdEls. . .')
workshopCodesArray.forEach(wsObject=>{
    let code = wsObject.code;
    let name = wsObject.name;
    const mdLink = `./events/workshops/${name}/workshop.md`;
    console.log({mdLink: mdLink})
    const failMessage = `sorry, workshop with code:${code} was not found.`

    const html = readText(mdLink)
        .then(value =>{
            let newDiv = document.createElement('div');
            if (value === null){
                let failElement = new HtmlElement(
                    'em',
                    newDiv,
                    { id: 'workshop-md-element'},
                    failMessage
                )
                wsObject.mdEl = newDiv;
            }else {
                let workshopElement = new mdElement(
                    newDiv,
                    { id: 'workshop-md-element'},
                    mdLink
                );
                 wsObject.mdEl = newDiv;

            }
        }).catch((error)=>{
            console.log(error)
            let newDiv = document.createElement('div');
            let failElement = new HtmlElement(
                'em',
                newDiv,
                { id: 'workout-md-element'},
                failMessage       
            );
            wsObject.mdEl = newDiv;

        })
})
console.log('workshop mdsElements added')
console.log(
    {workshopCodesArray: workshopCodesArray}
)
let waitForQuery = '1000';
setTimeout(() => {
  console.log(`setTimeout for ${waitForQuery}`);
  addQuery()
}, waitForQuery);




function addQuery(){
    const inputWorkshopQuery = document.getElementById('workshop-query');
    const queryButton = document.getElementById('query-button');
    queryButton.addEventListener('click', ()=>{
        const query = inputWorkshopQuery.value;
        console.log({
            query:query
        })
        clearElement(inputWorkshopQuery);
        clearElement(displayWorkshop);

        let match = false;
        console.log({workshopCodesArraylength: workshopCodesArray.length})
        for (let i = 0; i < workshopCodesArray.length; i++){
            console.log({forloop:i})
            console.log(workshopCodesArray[i])
            if (workshopCodesArray[i].code === query){
                match = true;
                console.log('match')
                displayWorkshop.appendChild(
                    workshopCodesArray[i].mdEl
                )
            }
        }
        if (match === false){
            let failElement = new HtmlElement(
                    'em',
                    displayWorkshop,
                    { id: 'workout-md-element'},
                    `sorry, workshop with code: ${query} not found.`       
                );
        }
        
        
    })
    }


function clearElement(el){
    el.innerText = '';
}

function displayUpcoming(){
    let upcomingTitle = new HtmlElement('h1',
        displayWorkshop,
        {},
        'Upcoming Workshops:'
    );
    let upcoming = upcomingWorkshops.filter(ws => ws.date > today.sortable);
    console.log({futureWorkshops: upcoming})
    if (upcoming.length < 1){
        console.log('no future workshops')
        let initialWrapper = document.createElement('div');
        let title = new HtmlElement('em',
            initialWrapper,
            {},
            `None Planned, request a workshop in our contacts page!`
        );
         displayWorkshop.appendChild(initialWrapper)

    }else{
    upcoming.forEach(ws =>{
        let initialWrapper = document.createElement('div');
        let title = new HtmlElement('h2',
            initialWrapper,
            {},
            `${ws.name} Workshop`
        );
        let theDate = sortableDateToKdsObject(ws.date);
        let dateTime = new HtmlElement('em',
            initialWrapper,
            {},
            `${theDate.weekday} ${theDate.localString} at ${ws.startTime}`
        );
        let description = new HtmlElement('div',
            initialWrapper,
            {},
            `Description: ${ws.description}`
        );
        let prerequisites = new HtmlElement('em',
            initialWrapper,
            {},
            'Pre-Requisites:'
        )
        for(let i = 0; i < ws.prerequisites.length; i++){
            let prerequisite = new HtmlElement('div',
                prerequisites.element,
                {},
                `${i+1}). ${ws.prerequisites[i]}` // 0 index to 1 index for list
            )
        }
        displayWorkshop.appendChild(initialWrapper)
    })
    }
    
    // console.log(upcomingWorkshops[0])
    // let text = upcomingWorkshops.name;
    // displayWorkshop.appendChild(initialWrapper)
}