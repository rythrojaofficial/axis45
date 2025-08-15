import { HtmlElement } from "../scripts/htmlElement.js";

const wrapper = document.getElementById('waiver-frame');

const youthButton = document.getElementById('youth-waiver-button')
    youthButton.addEventListener('click', ()=>{
        wrapper.innerHTML = '';
        const youthWaiverFrame = new HtmlElement(
        "iframe",
        wrapper,
        {
            src: "./forms/waiver-youth.html",
            frameborder: '0',
            width: '100%',
            height: '800px'
        }
)
    })
const adultButton = document.getElementById('adult-waiver-button')
    adultButton.addEventListener('click', ()=>{
    wrapper.innerHTML = '';
    const adultWaiverFrame = new HtmlElement(
            "iframe",
            wrapper,
            {src: "./forms/waiver-adult.html",
                frameborder: '0',
                width: '100%',
                height: '800px'
            }
        )
    })



