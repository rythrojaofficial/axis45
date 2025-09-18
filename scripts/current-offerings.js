import { HtmlElement, mdElement, BreakElement } from "./htmlElement.js";
import { thisWednesdaySesh } from "../news/update-news-stipulations.js";

class Offering {
  constructor(
    name,
    description,
    duration = "varies",
    experience = "",
    days = ""
  ) {
    this.name = name;
    this.title = name
      .replace("-", " ")
      .replace(/(^|\s)[a-z]/gi, (l) => l.toUpperCase());
    this.description = description;
    this.duration = duration;
    this.days = days;
    this.experience = experience;
    this.id = `offerings-${this.name}`;
    this.mdpage = `./current-offerings/${name}.md`;
  }
}

// let offeringsLibrary = [];
let expLibrary = [
  "No Experience Required ✔️",
  "Introductory Experience Recommended 👌",
  "Some Experience Recommended 💪",
  "Experience levels vary",
];

let offeringsLibrary = {
  openTricking: new Offering(
    "open-tricking",
    "Classic open session. No instruction provided. ",
    "120m",
    expLibrary[2]
    // "Monday/Friday/(& some Wednesdays!)"
  ),
  // 1.12.25 december ended, flipped line 177
  // decemberWorkshop: new Offering(
  //  "december-workshops",
  //  "Deep Dive into specific assorted topics.  Taking the place of tricking foundations for December only!",
  //  "60m",
  //  expLibrary[1],
  //  "Thursday"
  // ),
  
  // ====================== 12.5.24 Put This back after december ends ===============
  // And dont forget to flip line 177. 1.12.25, completed

   trickingFoundations: new Offering(
     "tricking-foundations",
     "Tricking 101. Learn the most foundational take-offs, shapes, transitions, and combinations of tricking!",
     "60m",
     expLibrary[0],
     "Thursday"
   ),
  flippingProgressions: new Offering(
    "flipping-progressions",
    "Primarily focused on Frontflips, Backflips, and Sideflips.",
    "60m",
    expLibrary[0],
    "Thursday"
  ),
  guidedTricking: new Offering(
    "guided-tricking",
    "Suits trickers through intermediate ranges.  If you don't already have a robust training regimen, we've got you covered.",
    "90m",
    expLibrary[1],
    "Tuesday"
  ),
  trickingExercise: new Offering(
    "tricking-exercise",
    "Prepare your body for the rigors of tricking.  Plyometrics, strength, balance, and more.",
    "60m",
    expLibrary[0],
    "Tuesday"
  ),
  guidedFlexibility: new Offering(
    "guided-flexibility",
    "Full body stretch including a front splits series, a middle splits series, and shoulder mini-series.",
    "120m",
    expLibrary[0],
    "Sunday"
  ),
  openBreakdance: new Offering(
    "open-breakdance",
    "Like open Tricking, but usually with break beats :D.  No instruction provided.",
    "120m",
    expLibrary[2],
    "Sunday"
  ),
  openFlipping: new Offering(
    "open-flipping",
    "Extra Open mat time for our Tuesday and Thursday classes!  Airtrack and mats will be out and available.  Feel free to ask for tips if you've already got stuff you're working on!",
    "120m",
    expLibrary[0],
    "Sunday"
  ),
  workshops: new Offering(
    "workshops",
    "Rotating menu of comprehensive topics.",
    "60-120m",
    expLibrary[3]
  ),
  privateLessons: new Offering(
    "private-lessons",
    "Get it right the first time",
    "60-120m",
    expLibrary[0]
  ),
  facilityRental: new Offering(
    "facility-rental",
    "Have a project that could use the space?",
    "times negotiable",
    expLibrary[3]
  ),
  offHoursTraining: new Offering(
    "off-hours-sessions",
    "If you need extra practice or can't make normal sesh times",
    "times negotiable",
    expLibrary[1]
  )
};

let noSessionMessage =
  "No sessions scheduled today at Axis, enjoy the day off! 🙂";

export function createOfferingsMDFrames(offeringsArray) {
  offeringsArray.forEach((li) => {
    if (li.textContent !== noSessionMessage) {
      let currentOffering = offeringsLibrary[li.textContent];
      // get text from li
      li.textContent = "";
      // clear text from li
      let showMore = new HtmlElement("div", li, {
        class: "show-more",
        id: currentOffering.id,
      });
      let previewOffering = new HtmlElement("div", showMore.element);
      let offeringTitle = new HtmlElement(
        "strong",
        previewOffering.element,
        {},
        `${currentOffering.days} ${currentOffering.title} (${currentOffering.duration}): `
      );
      let offeringDescription = new HtmlElement(
        "span",
        previewOffering.element,
        {},
        currentOffering.description
      );
      let space = new BreakElement(previewOffering.element);
      let offeringExp = new HtmlElement(
        "span",
        previewOffering.element,
        {
          style: "font-style: italic",
        },
        currentOffering.experience
      );
      let mdFrame = new mdElement(
        showMore.element,
        {
          width: "100vw",
          height: "50vh",
          scroll: "auto",
          class: "md-converted-frame",
          style: "border = none",
        },
        currentOffering.mdpage
      );
    }
  });
}

// courtesy of updateNews.js
function isWednesdaySesh() {
  switch (thisWednesdaySesh) {
    case true:
      return "openTricking";
      break;
    case false:
      return noSessionMessage;
      break;
    default:
      console.log("error");
      break;
  }
}

export function populateTodaysSessions() {
  let dateLibrary = {
    Monday: ["openTricking"],
    Tuesday: ["guidedTricking", "trickingExercise"],
    Wednesday: [isWednesdaySesh()],
    Thursday: [
      // "decemberWorkshop",
      "trickingFoundations",
      "flippingProgressions",
    ],
    Friday: ["openTricking"],
    Saturday: [noSessionMessage],
    Sunday: ["guidedFlexibility", "openBreakdance"],
  };
  let todaysDay = new Date().toLocaleDateString("en-US", { weekday: "long" });
  let tomorrowsDate = new Date();
  tomorrowsDate.setDate(tomorrowsDate.getDate() + 1);
  let tomorrowsDay = tomorrowsDate.toLocaleDateString("en-US", {
    weekday: "long",
  });
  let targetElement = document.getElementById("todays-offerings");
  let div = new HtmlElement("div", targetElement, { id: "offerings" });
  let ul = new HtmlElement("ul", div.element, {});

  dateLibrary[todaysDay].forEach((session) => {
    let li = new HtmlElement("li", ul.element, {}, session);
  });
}
