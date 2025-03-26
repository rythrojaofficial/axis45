import { HtmlElement, mdElement, SelectElement, ButtonElement } from "./htmlElement.js";
import { readText } from "./getText.js";
let monthsArray = [
    '01january',
    '02february',
    '03march',
    '04april',
    '05may',
    '06june',
    '07july',
    '08august',
    '09september',
    '10october',
    '11november',
    '12december'
]
const selectHead = document.getElementById('display-workout-selection')
const head = document.getElementById('display-workout');
const date = new Date();
const currentYear = date.getFullYear();
let monthIndex = date.getMonth();

export function populateWorkoutmonthDropdown(){
    let yearsArray = [];
    let thisYear = currentYear;
    while (thisYear - 1 > 2023){
        yearsArray.push(thisYear - 1);
        thisYear--;
    } // populate yearsArray from 2023 to present; this year is already added in creating the dropdown

    // create dropdown menus for Years and months
    let serving = new HtmlElement(
        'em',
        document.getElementById('now-serving'),
        {},
        `Workout archives currently serves 2024 june - ${currentYear} ${monthsArray[monthIndex].slice(2)}`
    )
    let yearSelect = new SelectElement(
        selectHead,
        {
            name: currentYear,
            id: 'select-workout-year'
        },
        yearsArray,
    )
    let monthSelect = new SelectElement(
        selectHead,
        {
            name: monthsArray[monthIndex],
            id: 'select-workout-month'
        },
        monthsArray
    )
    
    let selectButton = new ButtonElement(
        selectHead,
        populateWorkouts,
        {
            name: 'workout-select',
            id: 'workout-select-button'
        },
        "Find Workout"
    )


}

function clearMdElement(){
    head.innerText = ''
    
}
function createMdLink(yrStr, mStr){
    let monthlyWorkoutElement = new mdElement(
        head,
        { id: 'workout-md-element'},
        `./workouts/${yrStr}/${mStr}.md`
    );
    let failMessage = "no workout found for that Year/Month combination :("

    // setTimeout(() => {
    // // Check after delay
    //     if (document.querySelector('pre') !== null){
    //         monthlyWorkoutElement.element.innerText = failMessage
    //     }
    // }, 3000);
}
export function populateWorkouts(){
    clearMdElement();
    // getMonth is zero indexed, but i want january to = 1
    let yearString = document.getElementById('select-workout-year').value;
    let monthString = document.getElementById('select-workout-month').value;
    createMdLink(yearString,monthString)
}