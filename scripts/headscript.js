import {
  populateTodaysSessions,
  createOfferingsMDFrames,
} from "./current-offerings.js";
import { populateContactForm } from "../forms/contact/contact.js";
import { populateShowMore } from "./showMore.js";
import { mdConvert } from "./markdown-parse.js";
import { nextFoundationsDate } from "./news/update-news-stipulations.js";
import { populateNews } from "./news/updateNews.js";
import { populateWorkoutmonthDropdown, populateWorkouts } from "./workouts.js";
import { HtmlElement } from "./htmlElement.js";
// =======================
// update next foundations
// =======================

function updateFoundations(nextDate) {
  let instancesOfNextFoundationsDate = [
    ...document.querySelectorAll(".next-foundations-date"),
  ];
  instancesOfNextFoundationsDate.forEach((instance) => {
    instance.textContent = nextDate;
  });
}
updateFoundations(nextFoundationsDate());

//==============
//  addNavHeader
// =============
const navbarTextList = [];
const navbarIconList = [];
const navbarHeaderList = [];
// constructors
function NavText(name, id, link) {
  this.name = name;
  this.id = id;
  this.link = link;
  navbarTextList.push(this);
}
function NavIcon(icon, id, link) {
  this.icon = icon;
  this.id = id;
  this.link = link;
  navbarIconList.push(this);
}
//nav headers
const myHeader = document.createElement("header");
const flexHeaderReorder = document.createElement("ul");
const flexHeaderLinks = document.createElement("ul");
flexHeaderLinks.id = "navLinks";
const flexHeaderIcons = document.createElement("ul");
flexHeaderIcons.id = "navIcons";
navbarHeaderList.push(flexHeaderReorder, flexHeaderLinks, flexHeaderIcons);
// navs text link
const navHome = new NavText(
  "home",
  "home-link",
  "https://www.seattletricking.com"
);
const navCurrent = new NavText(
  "current offerings",
  "current-offerings-link",
  "https://www.seattletricking.com/current-offerings"
);
const navWorkouts = new NavText(
  "workouts",
  "workouts-link",
  "https://www.seattletricking.com/workouts"
)
// const navUpcoming = new NavText(
//   "upcoming events",
//   "upcoming-link",
//   "https://www.seattletricking.com/upcoming"
// );
const navMemberships = new NavText(
  "memberships",
  "memberships-link",
  "https://www.seattletricking.com/memberships"
);
const navWaivers = new NavText(
  "waivers",
  "waivers-link",
  "https://www.seattletricking.com/waivers"
);
const navFaq = new NavText(
  "faq",
  "faq-link",
  "https://www.seattletricking.com/faq"
);
const navContact = new NavText(
  "contact",
  "contact-link",
  "https://www.seattletricking.com/contact"
);
// const navCommunity = new NavText(
//   "Community",
//   "community-link",
//   "https://www.seattletricking.com/discord"
// );
//nav icon links
const navInsta = new NavIcon(
  "logo-instagram",
  "insta-nav",
  "https://www.instagram.com/seattletricking"
);
const navDiscord = new NavIcon(
  "logo-discord",
  "discord-nav",
  "https://www.seattletricking.com/discord"
);
// const navFb = new NavIcon(
//   "logo-facebook",
//   "facebook-nav",
//   "https://www.facebook.com/groups/432112633636377"
// );
const navYoutube = new NavIcon(
  "logo-youtube",
  "youtube-nav",
  "https://www.youtube.com/@mercenarytricking2852/videos"
);

const navVenmo = new NavIcon(
  "logo-venmo",
  "venmo-nav",
  "https://www.venmo.com/u/seattletricking"
);

function addNav() {
  navbarHeaderList.forEach((header) => {
    header.classList.add("flex-header");
  });
  navbarTextList.forEach((nav) => {
    let li = document.createElement("li");
    li.id = nav.id;
    let a = document.createElement("a");
    a.innerText = nav.name;
    a.href = nav.link;
    li.appendChild(a);
    flexHeaderLinks.appendChild(li);
  });

  navbarIconList.forEach((nav) => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = nav.link;
    a.id = nav.id;
    let icon = document.createElement("ion-icon");
    icon.setAttribute("size", "large");
    icon.setAttribute("name", nav.icon);
    a.appendChild(icon);
    li.appendChild(a);
    flexHeaderIcons.appendChild(li);
  });

  let reorder = document.createElement("li");
  reorder.id = "reorder-nav";
  flexHeaderReorder.appendChild(reorder);
  let reorderIcon = document.createElement("ion-icon");
  reorderIcon.setAttribute("size", "large");
  reorderIcon.setAttribute("name", "menu-outline");

  reorder.appendChild(reorderIcon);
  flexHeaderReorder.appendChild(reorder);

  // append the lists to myHeader
  navbarHeaderList.forEach((header) => {
    myHeader.appendChild(header);
  });
  // add header to body
  document.body.prepend(myHeader);
}
addNav();

let reorderBtn = document.getElementById("reorder-nav");
let links = document.getElementById("navLinks");
let icons = document.getElementById("navIcons");
reorderBtn.addEventListener(
  "click",
  () => {
    if (links.style.display === "none") {
      links.style.display = "flex";
      icons.style.flexDirection = "column";
    } else {
      links.style.display = "none";
      icons.style.flexDirection = "row";
    }
  },
  false
);

// ---------------
// add footer
// --------------

const footer = document.createElement("div");
const footLine1 = document.createElement("p");
const footLine2 = document.createElement("p");


footer.className = "footer";
footLine1.id = "foot-line-one";
footLine2.id = "foot-line-two";

// footLine1.innerText = "7701 230th St SW";
// footLine2.innerText = "Edmonds, WA 98026";
footLine1.textContent = "Axis 45: Home of Seattle Tricking";

document.body.appendChild(footer);
const returnToTopWrapper = new HtmlElement('div',footer,{})
const returnToTopA = new HtmlElement(
  'a',
  returnToTopWrapper.element,
  {href:'#'},'return to top ↑'
)
footer.appendChild(footLine1);
footer.appendChild(footLine2);


// ============
// enable icons from iconify
// ============

const iconEnable = document.createElement("script");
iconEnable.setAttribute("type", "module");
iconEnable.src =
  // "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
  "https://cdn.jsdelivr.net/npm/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
document.body.appendChild(iconEnable);

// enable timestamping

function stampTime() {
  return new Date(Date.now());
}

if (document.getElementById("stamp-time")) {
  const hiddenTime = document.getElementById("stamp-time");
  let time = stampTime();
  haveRead.addEventListener("click", () => {
    hiddenTime.value = time;
  });
}
// load certian things by page

let h1Title = document.querySelector("h1.title");
switch (h1Title.textContent) {
  case "AXIS 45":
    populateNews();
    populateTodaysSessions();
  case "Current Offerings" || "AXIS 45":
    const offeringsArray = Array.from(
      document.querySelectorAll("#offerings > ul > li")
    );
    const offHoursArray = Array.from(document.querySelectorAll('#off-hours-etc > li'))
    createOfferingsMDFrames(offeringsArray);
    createOfferingsMDFrames(offHoursArray);
    break;
  case "Contact":
    populateContactForm();
    break;
  case "Seattle Tricking Discord":
    mdConvert(document.getElementById("discord-page"), "./discord/discord.md");
    break;
  case "Workouts":
    populateWorkoutmonthDropdown();
    populateWorkouts();
    break;
  default:
    break;
}

// Populate readMore's

populateShowMore();
