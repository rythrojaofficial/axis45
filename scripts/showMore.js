import { ButtonElement } from "./htmlElement.js";

// +++++++++++++++++++
// First child alway visible, 
// second child always invisible
// button generated automagically
// +++++++++++++++++++

let showMoreArray = Array.from(document.getElementsByClassName('show-more'));
for (let i = 0; i < showMoreArray.length; i++){
    let conditionallyVisibleContent = showMoreArray[i].children[1];
        conditionallyVisibleContent.classList.add('show-more-hide-conditionally-visible')
    let showHideButton = new ButtonElement(showMoreArray[i], showHideMore,
        {},
        '+');
    let isShowMore = false;
    function showHideMore(){
        switch (isShowMore){
            case false: 
                conditionallyVisibleContent.classList.remove('show-more-hide-conditionally-visible');
                showHideButton.element.textContent = '-';
                isShowMore = true;
                break;
            case true: 
                conditionallyVisibleContent.classList.add('show-more-hide-conditionally-visible');
                showHideButton.element.textContent = '+';
                isShowMore = false;
                break;
        }
    }
}

       
            
 

