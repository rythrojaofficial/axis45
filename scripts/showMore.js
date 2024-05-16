import { ButtonElement } from "./htmlElement.js";

// +++++++++++++++++++
// affects all div elements with the classname 'show-more' 
// First child alway visible, 
// second child always invisible
// button generated automagically
// +++++++++++++++++++
export function populateReadMore(){
    let showMoreArray = Array.from(document.getElementsByClassName('show-more'));
    let options = {
    showMore: 'show more',
    hideMore: 'show less'
    }


    for (let i = 0; i < showMoreArray.length; i++){
        let conditionallyVisibleContent = showMoreArray[i].children[1];
            conditionallyVisibleContent.classList.add('show-more-hide-conditionally-visible')
        let showHideButton = new ButtonElement(showMoreArray[i], showHideMore,
            {},
            options.showMore);
        let isShowMore = false;
        function showHideMore(){
            switch (isShowMore){
                case false: 
                    conditionallyVisibleContent.classList.remove('show-more-hide-conditionally-visible');
                    showHideButton.element.textContent = options.hideMore;
                    isShowMore = true;
                    break;
                case true: 
                    conditionallyVisibleContent.classList.add('show-more-hide-conditionally-visible');
                    showHideButton.element.textContent = options.showMore;
                    isShowMore = false;
                    break;
            }
        }
    }
}


       
            
 

