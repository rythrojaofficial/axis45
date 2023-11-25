//==============
//  addNavHeader 
// =============   
function createFlexHeader(){
    let myHeader = document.createElement("header");
    let flexHeaderReorder = document.createElement("ul");
        flexHeaderReorder.className = "flex-header";
    let flexHeaderLinks = document.createElement("ul");
        flexHeaderLinks.className = "flex-header";
        flexHeaderLinks.id = "navLinks";
    let flexHeaderIcons = document.createElement("ul");
        flexHeaderIcons.className = "flex-header";
    let home1 = document.createElement("li");
        home1.id="home-link";
    let current = document.createElement("li");
        current.id = "current-offerings-link";
    let upcoming = document.createElement("li");
        upcoming.id = "upcoming-link";
    let memberhsips = document.createElement("li");
        memberhsips.id = "memberships-link";
    let waivers = document.createElement("li");
        waivers.id = "waivers-link";
    let faq = document.createElement("li");
        faq.id = "faq-link";
    let insta = document.createElement("li");
        insta.id = "insta-nav";
    let fb = document.createElement("li");
        fb.id = "facebook-nav";
    let youtube = document.createElement("li");
        youtube.id = "youtube-nav";
    let venmo = document.createElement("li");
        venmo.id = "venmo-nav";

    let reorder = document.createElement("li")
        reorder.id = "reorder-nav";
    flexHeaderReorder.appendChild(reorder);
    
    flexHeaderLinks.appendChild(home1);
    flexHeaderLinks.appendChild(current);
    flexHeaderLinks.appendChild(upcoming);
    flexHeaderLinks.appendChild(memberhsips);
    flexHeaderLinks.appendChild(waivers);
    flexHeaderLinks.appendChild(faq);

    flexHeaderIcons.appendChild(insta);
    flexHeaderIcons.appendChild(fb);
    flexHeaderIcons.appendChild(youtube);
    flexHeaderIcons.appendChild(venmo);

    myHeader.appendChild(flexHeaderReorder);
    myHeader.appendChild(flexHeaderLinks);
    myHeader.appendChild(flexHeaderIcons);
    document.body.prepend(myHeader);

}
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
    myLink.appendChild(myIcon);
    myList.appendChild(myLink);

}
function navReorder(id, icon){
    let myList = document.getElementById(id);
    let myIcon = document.createElement('ion-icon');
        myIcon.setAttribute('size', 'large');
        myIcon.setAttribute('name', icon)

    myList.appendChild(myIcon);
}
createFlexHeader();
navReorder('reorder-nav', 'menu-outline');
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

let reorderBtn = document.getElementById("reorder-nav");
let links = document.getElementById('navLinks');
    reorderBtn = addEventListener ('click', ()=>{

        if(links.style.display === "none"){
            links.style.display = "flex";
        }
        
        else{
            links.style.display = "none";
        }
    })

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


