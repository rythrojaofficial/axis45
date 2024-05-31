import { HtmlElement, mdElement, BreakElement } from "./htmlElement.js";


class Offering{
    constructor(name, description, duration = 'varies', experience = ''){
        this.name = name;
        this.title = (name.replace('-', ' ')).replace(/(^|\s)[a-z]/gi, l => l.toUpperCase())
        this.description = description;
        this.duration = duration;
        this.experience = experience;
        this.id = `offerings-${this.name}`;
        this.mdpage = `./current-offerings/${name}.md`;
        offeringsLibrary.push(this)
    }
}

let offeringsLibrary = [];
let expLibrary = [
    'No Experience Required ✔️',
    'Foundations Experience Recommended 👌',
    'Experience Recommended 💪',
    'Experience levels vary'
]
let trickingFoundations = new Offering('tricking-foundations', 
    'Tricking 101. Learn the most foundational take-offs, shapes, transitions, and combinations of tricking!'
    ,'60m', expLibrary[0]
    )
let flippingProgressions = new Offering('flipping-progressions', 
    'Primarily focused on Frontflips, Backflips, and Sideflips.'
    ,'60m', expLibrary[0]
    )
let guidedTricking = new Offering('guided-tricking', 
    "Suits trickers through intermediate ranges.  If you don't already have a robust training regimen, we've got you covered."
    ,'90m', expLibrary[1]
    )
let trickingExercise = new Offering('tricking-exercise', 
    'Prepare your body for the rigors of tricking.  Plyometrics, strength, balance, and more.'
    ,'60m', expLibrary[0]
    )
let guidedFlexibility = new Offering('guided-flexibility', 
    "Full body stretch including a front splits series, a middle splits series, and shoulder mini-series."
    ,'120m', expLibrary[0]
    )
let openTricking = new Offering('open-tricking', 
    'Classic open session. No instruction provided. '
    ,'120m', expLibrary[2]
)
let openBreakdance = new Offering('open-breakdance', 
    'Like open Tricking, but usually with break beats :D.  No instruction provided.'
    ,'120m', expLibrary[2]
    )
// let workshops = new Offering('workshops', 
//     'Rotating menu of comprehensive topics.'
//     ,'60-120m', expLibrary[3]
// )




export function createOfferingsMDFrames(){
    
    let offeringsArray = Array.from(document.querySelectorAll('#offerings > ul > li'));
    for (let i = 0; i < offeringsArray.length; i++){
        console.log(offeringsArray[i].id)
        let showMore = new HtmlElement('div',
            offeringsArray[i],
            { class: 'show-more', id: offeringsLibrary[i].id }
        )
        let previewOffering = new HtmlElement('div',
            showMore.element)
            let offeringTitle = new HtmlElement('strong',
            previewOffering.element,
            {},`${offeringsLibrary[i].title} (${offeringsLibrary[i].duration}): `

            )
            let offeringDescription = new HtmlElement('span',
            previewOffering.element,
            {},
            offeringsLibrary[i].description
            )
            let space = new BreakElement(previewOffering.element);
            let offeringExp = new HtmlElement('span',
                previewOffering.element,
                {
                    style: 'font-style: italic'
                },offeringsLibrary[i].experience
            )
        let mdFrame = new mdElement(
            showMore.element,
            { 
                width: '100vw', 
                height: '50vh',
                scroll: 'auto',
                class: 'md-converted-frame',
                style: 'border = none', 
            }, 
            offeringsLibrary[i].mdpage
        )
    }
}