import { mdElement } from "../../scripts/htmlElement.js";

let display = document.getElementById('md-display')
let mdEl = new mdElement(display,{}, "./backflip-a-thon.md")

let pageText = document.getElementById('share-this-page-link');
let copyButton = document.getElementById('copy-text-button');
copyButton.addEventListener('click', ()=>{
    pageText.select();
    pageText.setSelectionRange(0,99999); // for mobile
    navigator.clipboard.writeText(copyText.value);

    alert(`text copied`)
})

