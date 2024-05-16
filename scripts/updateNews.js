import { HtmlElement } from "./htmlElement.js";
// ===vvvvv==Foundations==vvvvv========= 
export let nextFoundations = '6/6/2024'
// ====^^^^===============^^^^==========
let  newsContainer = document.querySelector('.update-news');
class NewsCard{
    constructor(title, detailsArray=[], md = '', href=''){
        this.title = title;
        this.details = detailsArray;
        this.md = md;
        this.link = href; 
        this.addCard();
    }

    addCard(){
        let wrapper = new HtmlElement('div', newsContainer, { class: 'news-card' });
        let newA = new HtmlElement('a', wrapper.element, { href: this.link });
        let newH2 = new HtmlElement('h2', newA.element, {}, this.title);
        if(this.md !== ''){ 
            let showmore = new HtmlElement('div', wrapper.element, {class: 'show-more'});
            let fullDetails = new HtmlElement('div', showmore.element, {}, '')
            let newIframe = new HtmlElement('iframe', showmore.element, 
            {
                src: this.md,
                width: '100%',
                height: '500px'
             })
        }
        
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
// let meanyDance = new NewsCard(
//     'Cie Hervé KOUBI: The Barbarian Nights',
//     [
//         'French Dance/Tricking company in town!',
//         'Performing 8pm at Meany Center at UW May 9,10,11',
//         "I'm thinking Saturday 🤔",
//         'more info here!'
//     ],
//     './events/2024barbariannights/page'

// )
let loopkicks24 = new NewsCard(
    'Loopkicks 2024 Gathering fieldtrip!',
    [
        'Jul 19-21, Santa Clara CA',
        '20th Anniversary!'
    ],
    './events/2024loopkicks/page.html'
)

let rcg24 = new NewsCard(
    'Rose City Gathering 3 fieldtrip!',
    [
        'Jul 26-28, Beaverton OR',
        'The Portland Homies main summer Gathering'
    ],'./events/2024rcg/page.html'
)


let rickyShirt24 = new NewsCard(
    "Ricky's got a new shirt",
    [
        'If you climb rocks or wear shirts. . .',
        'order here!'
    ],'',
    'https://www.rtmvmt.com/'
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
    ],'',
    'https://www.seattletricking.com/tricking-foundations'
)
