import { mdElement, SelectElement, ButtonElement } from "./htmlElement.js";
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
    while (thisYear > 2022){
        yearsArray.push(thisYear);
        thisYear--;
    } // populate yearsArray from 2023 to present

    // create dropdown menus for Years and months
    let yearSelect = new SelectElement(
        selectHead,
        {
            name: 'workout-year',
            id: 'select-workout-year'
        },
        yearsArray,
    )
    let monthSelect = new SelectElement(
        selectHead,
        {
            name: 'workout-month',
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

    setTimeout(() => {
    // Check after delay
        if (document.querySelector('pre') !== null){
            monthlyWorkoutElement.element.innerText = failMessage
        }
    }, 1000);
}
export function populateWorkouts(){
    clearMdElement();
    // getMonth is zero indexed, but i want january to = 1
    let yearString = document.getElementById('select-workout-year').value;
    let monthString = document.getElementById('select-workout-month').value;
    switch(true){
        case yearString.includes('workout')
        && monthString.includes('workout'):
            yearString = currentYear.toString();
            monthString = monthsArray[monthIndex];
            createMdLink(yearString,monthString)
            break;
        default:
            createMdLink(yearString,monthString)
    }
    
    
}