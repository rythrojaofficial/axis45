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
const selectHead = document.getElementById('display-workout-selection');
const nextHead = document.getElementById('workouts-next-previous');
const head = document.getElementById('display-workout');
const date = new Date();
const currentYear = date.getFullYear();
let monthIndex = date.getMonth();

// let yearsArray = [];
let thisYear = currentYear;
let yearsArray = [currentYear];
while (thisYear - 1 > 2022){
    yearsArray.push(thisYear - 1);
    thisYear--;
} // populate yearsArray from 2023 to present; this year is already added in creating the dropdown
let yearMonthComboArray = [];
class YearMonthCombo{
    constructor(year, month){
        this.year = year.toString();
        this.month = month;
        this.wrapperDiv = document.createElement('div')
        if (this.validateCombo() === true){
            createMdLink(this.year, this.month, this.wrapperDiv)

        }
    }
    validateCombo(){
        // ####create validation logic####
    return true
    }
} 
// console.log(yearMonthComboArray)
yearsArray.forEach(year =>{
    monthsArray.forEach(month =>{
        let combo = new YearMonthCombo(year, month)
        yearMonthComboArray.push(combo)
        })
})
export function populateWorkoutmonthDropdown(){
    // create dropdown menus for Years and months
    let serving = new HtmlElement(
        'em',
        document.getElementById('now-serving'),
        {},
        `Workout archives currently serves November 2023 - ${currentYear} ${monthsArray[monthIndex].slice(2)}`
    )
    let yearSelect = new SelectElement(
        selectHead,
        {
            name: currentYear,
            id: 'select-workout-year'
        },
        yearsArray,
    )
    yearSelect.element.addEventListener("change", populateWorkouts)
    let monthSelect = new SelectElement(
        selectHead,
        {
            name: monthsArray[monthIndex],
            id: 'select-workout-month'
        },
        monthsArray
    )
    monthSelect.element.addEventListener("change", populateWorkouts)
    let previousButton = new ButtonElement(
        nextHead,
        previousWorkoutLogic,
        {
            name: 'workout-previous',
            id: 'workout-previous-button'
        },
        "Previous"
    )
    let nextButton = new ButtonElement(
        nextHead,
        nextWorkoutLogic,
        {
            name: 'workout-next',
            id: 'workout-next-button'
        },
        "Next"
    )

}

function previousWorkoutLogic(){
    let displayedYear = document.getElementById('select-workout-year');
    let displayedMonth = document.getElementById('select-workout-month');
    // don't get stuck at index0
    let monthIndex = monthsArray.lastIndexOf(displayedMonth.value);
    displayedMonth.selectedIndex = monthIndex+1;
        switch(displayedMonth.selectedIndex){
            case 1:
                if(displayedYear.selectedIndex !== yearsArray.length){
                    displayedMonth.selectedIndex = 12;
                    displayedYear.selectedIndex++;
                }
                break;
            default:
                displayedMonth.selectedIndex--;
                break;
    }
    populateWorkouts();

}
function nextWorkoutLogic(){
    let displayedYear = document.getElementById('select-workout-year');
    let displayedMonth = document.getElementById('select-workout-month');
    // don't get stuck at index0
    let monthIndex = monthsArray.lastIndexOf(displayedMonth.value);
    displayedMonth.selectedIndex = monthIndex+1;
        switch(displayedMonth.selectedIndex){
            case 12:
                if (displayedYear.selectedIndex !== 0){
                    displayedMonth.selectedIndex = 1;
                    displayedYear.selectedIndex--;
                }
                break;
            default:
                displayedMonth.selectedIndex++;
                break;       
        }
    populateWorkouts();
}

function clearMdElement(){
    head.innerText = ''
    
}
function createMdLink(yrStr, mStr, target){
    let failMessage = "Workout not found. Does the workout archive currently serve this year/month?"
    let mdString = `./workouts/${yrStr}/${mStr}.md`;
    let html = readText(mdString)
        .then((value) => {
        // console.log(value)
        if (value === null){
            let failElement = new HtmlElement(
                'em',
                target,
                { id: 'workout-md-element'},
                failMessage       
            )
        }else {
            let monthlyWorkoutElement = new mdElement(
                target,
                { id: 'workout-md-element'},
                mdString
            );
        }
    }).catch((error)=>{
        // console.log(error)
        let failElement = new HtmlElement(
            'em',
            target,
            { id: 'workout-md-element'},
            failMessage       
        )
    })
}
function retrieveMD(yearString, monthString){
    yearMonthComboArray.forEach(combo =>{
        if(yearString === combo.year){
            if(monthString === combo.month){
                head.appendChild(combo.wrapperDiv)
            }
        }
    })
}
export function populateWorkouts(){
    clearMdElement();
    // getMonth is zero indexed, but i want january to = 1
    let yearString = document.getElementById('select-workout-year').value;
    let monthString = document.getElementById('select-workout-month').value;
    retrieveMD(yearString, monthString)
}
