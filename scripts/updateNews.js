import { HtmlElement } from "./htmlElement.js";
// ===vvvvv==Foundations==vvvvv========= 
export let nextFoundations = '5/2/2024'
// ====^^^^===============^^^^==========
let  newsContainer = document.querySelector('.update-news');
class NewsCard{
    constructor(title, detailsArray=[], href=''){
        this.title = title;
        this.details = detailsArray;
        this.link = href; 
        this.addCard();
    }

    addCard(){
        let wrapper = new HtmlElement('div', newsContainer, { class: 'news-card' });
        let newA = new HtmlElement('a', wrapper.element, { href: this.link });
        let newH2 = new HtmlElement('h2', newA.element, {}, this.title);
        
        for (let i = 0; i < this.details.length; i++){
            switch (i){
                case (this.details.length-1):
                    let lastLine  = new HtmlElement('div', newA.element, { class: 'last-line'}, this.details[i]);
                    break;
                default:
                    let nextLine = new HtmlElement('div', newA.element, { class: 'middle-line'}, this.details[i]) 
            }
        }
        
        
    }

}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Actual New News 
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let earthDay = new NewsCard(
//     'Earth Day Tricking Invitational in Portland!',
//     [
//         'Saturday April 27th at 6pm',
//         'Click here for carpool survey, registration, and full details'
//     ], 
//     'https://seatricks.teamapp.com/clubs/559888/events/24614775-earth-day-invitational-field-trip-pdx-gathering?_detail=v1&_expires_at=1714521599'
// )
let loopkicks = new NewsCard(
    'Loopkicks 2024 Gathering fieldtrip!',
    [
        'Quite a few Seattle peeps tryna attend loopkicks 2024!',
        'click here for trip and Gathering info!'
    ],
    './events/2024loopkicks/page'
)


// Recurring News 

// let injuryScreen = new NewsCard(
//     'April Injury Screen',
//     [
//         'Gina will be back on Friday April 12!',
//         'Injury screen is free with membership or Drop-in',
//         'First come first served :-)'
//     ]
// )
let Foundations = new NewsCard(
    'Next 4-week Tricking Foundations Class',
    [
        `Beginning Thursday ${nextFoundations}`,
        'full info and registration here!'
    ],
    'https://www.seattletricking.com/tricking-foundations'
)
