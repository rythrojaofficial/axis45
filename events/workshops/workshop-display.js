import { HtmlElement, mdElement, SelectElement, ButtonElement } from "../../scripts/htmlElement.js";
import { readText } from "../../scripts/getText.js";
import { upcomingWorkshops } from "./upcoming-workshops.js";
import { sortableDateToKdsObject } from "../../scripts/parsedate.js";

const displayWorkshop = document.getElementById('display-workshop');
displayUpcoming();


console.log('setting up workshop Codes Array')
let workshopCodesArray = [
    '241116technical-sequences',
    '241205hs',
    '241212raiz',
    '250406aerialwushu',
    '251218btwist'
]
let workshopMdElArray = [];
console.log({workshopCodesArray:workshopCodesArray})

console.log('fetching mdEls. . .')
workshopCodesArray.forEach(code=>{
    const mdLink = `./events/workshops/${code}/workshop.md`;
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
                workshopMdElArray.push(newDiv);
            }else {
                let workshopElement = new mdElement(
                    newDiv,
                    { id: 'workshop-md-element'},
                    mdLink
                );
                 workshopMdElArray.push(newDiv);

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
            workshopMdElArray.push(newDiv);

        })

})
console.log(
    {workshopMdElArray: workshopMdElArray}
)


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
        if (workshopCodesArray[i] === query){
            match = true;
            console.log('match')
            displayWorkshop.appendChild(
                workshopMdElArray[i]
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


function clearElement(el){
    el.innerText = '';
}

function displayUpcoming(){
    let upcomingTitle = new HtmlElement('h1',
        displayWorkshop,
        {},
        'Upcoming Workshops:'
    );
    upcomingWorkshops.forEach(ws =>{
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
    // console.log(upcomingWorkshops[0])
    // let text = upcomingWorkshops.name;
    // displayWorkshop.appendChild(initialWrapper)
}