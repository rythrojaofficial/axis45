//==============
//  addNavHeader 
// =============   

const homeList = document.getElementById('home-link');
const homeLink = document.createElement('a');
    homeLink.href = 'https://seattletricking.com';
    homeLink.innerText = 'Home';
    
    
const currentOfferingsList = document.getElementById('current-offerings-link');
const currentOfferingsLink = document.createElement('a');
    currentOfferingsLink.href = 'https://seattletricking.com/current-offerings';
    currentOfferingsLink.innerText = 'Current Offerings';
    

const membershipsList = document.getElementById('memberships-link');
const membershipsLink = document.createElement('a');
    membershipsLink.href = 'https://www.seattletricking.com/memberships';
    membershipsLink.innerText = 'Memberships';
    

const waiversList = document.getElementById('waivers-link');
const waiversLink = document.createElement('a');
    waiversLink.href = 'https://www.seattletricking.com/waivers';
    waiversLink.innerText = 'waivers';
    

const faqList = document.getElementById('faq-link');
const faqLink = document.createElement('a');
    faqLink.href = 'https://www.seattletricking.com/faq';
    faqLink.innerText = 'faq';
    

const upcomingList = document.getElementById('upcoming-link');
const upcomingLink = document.createElement('a');
    upcomingLink.href = 'https://www.seattletricking.com/upcoming';
    upcomingLink.innerText = 'upcoming';
    

    homeList.appendChild(homeLink);
    currentOfferingsList.appendChild(currentOfferingsLink);
    membershipsList.appendChild(membershipsLink);
    waiversList.appendChild(waiversLink);
    faqList.appendChild(faqLink);
    upcomingList.appendChild(upcomingLink);
// ---------------
// add footer 
// --------------
    
const footer = document.createElement('div');
const footLine1 = document.createElement('p');
const footLine2 = document.createElement('p');

footer.className = 'footer';
footLine1.id = 'foot-line-one';
footLine2.id = 'foot-line-two'; 

footLine1.innerText = '7701 230th St SW';
footLine2.innerText = 'Edmonds, WA 98026';

document.body.appendChild(footer);
footer.appendChild(footLine1);
footer.appendChild(footLine2);



// ============
// enable icons from iconify
// ============

const iconEnable = document.createElement('script');
    iconEnable.setAttribute('type', 'module');
    iconEnable.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
    document.body.appendChild(iconEnable);

