import { HtmlElement } from "./htmlElement.js";
let offeringsLibrary = [];

class Offering{
    constructor(name, description){
        this.name = name;
        this.description = description;
        this.mdpage = `./current-offerings/${name}/page.html`;
        offeringsLibrary.push(this)
    }
}
let openTricking = new Offering(
        'open-tricking',
        'No instruction provided. This is for people looking to TRAIN. You warm up on your own. You focus on what you want to do; expect others to do the same. In general the floor will remain open and free of mats. Experience recommended 🤙',
    )

export function createOfferingsIframes(){
    let offeringsArray = Array.from(document.querySelectorAll('#offerings > ul > li'));
    for (let i = 0; i < offeringsArray.length; i++){
        let container = new HtmlElement('div',
            offeringsArray[i],
            { class: 'show-more' }
        )
        let previewOffering = new HtmlElement('div',
            container.element,
            {},
            offeringsLibrary[i].description
        )
        let iframeFull = new HtmlElement('iframe',
            container.element,
            { 
                width: '100%', 
                height: '600px',
                style: 'border = none',
                
                
                src: offeringsLibrary[i].mdpage 
            }
        )
    }
}