import { tapToPopulate } from "../../../scripts/tap-to-populate.js";
import { HtmlElement } from "../../../scripts/htmlElement.js";

const displayArray = [
    {
            active:true,
            mdTrueLink: '',
            name: 'main info',
            properties: {
                class:'',
                id:'',
            }
    },
    {
        active:true, // must be true to work
        mdTrueLink: '', //  only if you don't have a template, or goes off template
        name: 'competition format', // required (names the button)
        properties: {
            class:'', // if it needs a special class
            id:'', // if you need it to have a specific non templated name
        }
    },
    {
        active:true,
        mdTrueLink: '',
        name: 'volunteers',
        properties: {
            class:'',
            id:''
        }
    },
    {
        active:false,
        mdTrueLink: '../workouts/exercise-library.md',
        name: 'Exercise Library',
        properties: {
            class:'',
            id:''
        }
    },
    {
        active:false,
        mdTrueLink: '',
        name: 'Thursday Observation Checklist',
        properties: {
            class:'',
            id:''
        }
    },
    {
        active:false,
        mdTrueLink: '',
        name: 'On Warm ups',
        properties: {
            class:'',
            id:''
        }
    },
    

]
const archived = [
    {
        active:false,
        mdTrueLink: '../workouts/subbing/250422tuesday-tricking.md',
        name: '250422 Tuesday Tricking Lesson Plan',
        properties: {
            class:'',
            id:''
        }
    },
]
const selectionWrapper = document.createElement('div');
    selectionWrapper.classList.add('button-toggle-wrapper')
const displayTarget = document.createElement('div');
    displayTarget.classList.add('markdown-body')
const body = document.querySelector('body');
body.append(selectionWrapper, displayTarget)
const linkTemplates = {
    mdTemplate: {
        // ./mdFiles/${name}.md
        before:'./mdFiles/',  
        after: '.md'
        },
    classes: 'gray-container',
    id: `-md` // ${name}-md
}

tapToPopulate(displayArray, selectionWrapper, displayTarget, linkTemplates, true)

// purchasing
const buyWrapper = new HtmlElement("div", body,
    {class: 'flex-container',
        id: 'buy-button-wrapper'
    }
)
const stripeGeneralBuyButton = new HtmlElement("stripe-buy-button",buyWrapper.element,
    {"buy-button-id":"buy_btn_1RoEIhBsl5oBKoQQ1CdWsyEO",
    "publishable-key":"pk_live_51KlOCjBsl5oBKoQQqyPwvWZMjftHQY1RijceWNoHYfw7Ov9avaij54oDcXihYCOAnCbJo32SQ38qDs7D7iOF3wbP00D1xIE7I4"
    }
)
const stripeSpectatorBuyButton = new HtmlElement("stripe-buy-button",buyWrapper.element,
    {"buy-button-id":"buy_btn_1RoEooBsl5oBKoQQDjc7c447",
    "publishable-key":"pk_live_51KlOCjBsl5oBKoQQqyPwvWZMjftHQY1RijceWNoHYfw7Ov9avaij54oDcXihYCOAnCbJo32SQ38qDs7D7iOF3wbP00D1xIE7I4"
    }
)
const stripeMealBuyButton = new HtmlElement("stripe-buy-button",buyWrapper.element,
    {"buy-button-id":"buy_btn_1RoEzbBsl5oBKoQQdPTPcGQS",
    "publishable-key":"pk_live_51KlOCjBsl5oBKoQQqyPwvWZMjftHQY1RijceWNoHYfw7Ov9avaij54oDcXihYCOAnCbJo32SQ38qDs7D7iOF3wbP00D1xIE7I4"
    }
)


