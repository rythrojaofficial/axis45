//==============
//  addNavHeader 
// =============   

const homeList = document.getElementById('home-link');
const homeLink = document.createElement('a');
    homeLink.href = 'https://seattletricking.com';
    homeLink.innerText = 'Home';
    homeList.appendChild(homeLink);
    
const currentOfferingsList = document.getElementById('current-offerings-link');
const currentOfferingsLink = document.createElement('a');
    currentOfferingsLink.href = 'https://seattletricking.com/current-offerings';
    currentOfferingsLink.innerText = 'Current Offerings';
    currentOfferingsList.appendChild(currentOfferingsLink);

const membershipsList = document.getElementById('memberships-link');
const membershipsLink = document.createElement('a');
    membershipsLink.href = 'https://www.seattletricking.com/memberships';
    membershipsLink.innerText = 'Memberships';
    membershipsList.appendChild(membershipsLink);

const waiversList = document.getElementById('waivers-link');
const waiversLink = document.createElement('a');
    waiversLink.href = 'https://www.seattletricking.com/waivers';
    waiversLink.innerText = 'waivers';
    waiversList.appendChild(waiversLink);

const faqList = document.getElementById('faq-link');
const faqLink = document.createElement('a');
    faqLink.href = 'https://www.seattletricking.com/waivers';
    faqLink.innerText = 'faq';
    faqList.appendChild(faqLink);

const upcomingList = document.getElementById('upcoming-link');
const upcomingLink = document.createElement('a');
    upcomingLink.href = 'https://www.seattletricking.com/upcoming';
    upcomingLink.innerText = 'upcoming';
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





