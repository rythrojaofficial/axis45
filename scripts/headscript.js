//==============
//  addNavHeader 
// =============   
function navLink(id, text, link){
    let myList = document.getElementById(id);
    let myLink = document.createElement('a');
        myLink.href = link;
        myLink.innerText = text;
    myList.appendChild(myLink);
}
function navIcon(id, icon, link){
    let myList = document.getElementById(id);
    let myLink = document.createElement('a');
        myLink.href = link;
        
    let myIcon = document.createElement('ion-icon');
        myIcon.setAttribute('size', 'large');
        myIcon.setAttribute('name', icon)
    console.log(myIcon)
    myLink.appendChild(myIcon);
    myList.appendChild(myLink);

}
navLink('home-link', 'home', 'https://www.seattletricking.com');
navLink('current-offerings-link', 'current offerings', 'https://www.seattletricking.com/current-offerings');
navLink('memberships-link', 'memberships', 'https://www.seattletricking.com/memberships');
navLink('waivers-link', 'waivers', 'https://www.seattletricking.com/waivers');
navLink('faq-link', 'faq', 'https://www.seattletricking.com/faq');
navLink('upcoming-link', 'upcoming events', 'https://www.seattletricking.com/upcoming');
navIcon('insta-nav', 'logo-instagram', 'https://www.instagram.com/seattletricking');
navIcon('facebook-nav', 'logo-facebook', 'https://www.facebook.com/groups/432112633636377')
navIcon('youtube-nav', 'logo-youtube', 'https://www.youtube.com/@mercenarytricking2852/videos')
navIcon('venmo-nav', 'logo-venmo', 'https://www.venmo.com/u/seattletricking')
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


