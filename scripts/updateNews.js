let emergencyNews = {
  active: false,
  title: "",
  firstLine: "",
  secondLine: "",
  md: "./events/emergencyNews.md",
};

import { HtmlElement, mdElement } from "./htmlElement.js";
import { calculateNextFoundations } from "./calculateNextFoundation.js";

let utcdate = new Date();
let today = {
  weekday: utcdate.toLocaleDateString("en-US", { weekday: "long" }),
  dd: utcdate.getDate(),
  mm: utcdate.getMonth() + 1,
  yy: utcdate.getFullYear(),
};

// ===vvvvv==Foundations==vvvvv=========
export function nextFoundationsDate() {
  let nextFoundations;

  let manualFoundations = {
    date: "7/11",
    message: "due to 4th of july 🇺🇸",
  };

  if (manualFoundations.date === "") {
    return calculateNextFoundations(today.yy, today.mm, today.dd);
  } else return `${manualFoundations.date} ${manualFoundations.message}`;
}
export // ====^^^^===============^^^^==========
let newsContainer = document.querySelector(".update-news");
class NewsCard {
  constructor(title, detailsArray = [], md = "", href = "") {
    this.title = title;
    this.details = detailsArray;
    this.md = md;
    this.link = href;
    this.addCard();
  }

  addCard() {
    let wrapper = new HtmlElement("div", newsContainer, { class: "news-card" });
    let newA;
    switch (this.link) {
      case "":
        newA = new HtmlElement("div", wrapper.element, {});
        break;
      default:
        newA = new HtmlElement("a", wrapper.element, { href: this.link });
        break;
    }

    let newH2 = new HtmlElement("h2", newA.element, {}, this.title);
    if (this.md !== "" && this.md !== "offerings") {
      let showmore = new HtmlElement("div", wrapper.element, {
        class: "show-more",
      });
      let displayedDetails = new HtmlElement("div", showmore.element, {}, "");
      let newMdFrame = new mdElement(
        showmore.element,
        {
          width: "100vw",
          height: "50vh",
          scroll: "auto",
          class: "md-converted-frame",
        },
        this.md
      );
    } else if (this.md === "offerings") {
      let newMdFrame = new HtmlElement("div", wrapper.element, {
        id: "todays-offerings",
      });
    }

    for (let i = 0; i < this.details.length; i++) {
      switch (i) {
        case this.details.length - 1:
          let lastLine = new HtmlElement(
            "div",
            newA.element,
            { class: "last-line" },
            this.details[i]
          );
          break;
        default:
          let nextLine = new HtmlElement(
            "div",
            newA.element,
            { class: "middle-line" },
            this.details[i]
          );
      }
    }
  }
}

let todaysSessions = new NewsCard(
  `${today.weekday} ${today.mm}/${today.dd} Axis Sessions ⬇️`,
  [],
  "offerings",
  ""
);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Actual New News
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
if (emergencyNews.active === true) {
  let emergencyNewsActive = new NewsCard(
    emergencyNews.title,
    [emergencyNews.firstLine, emergencyNews.secondLine],
    emergencyNews.md
  );
}

let loopkicks24 = new NewsCard(
  "Loopkicks 2024 Gathering fieldtrip!",
  ["Jul 19-21, Santa Clara CA", "20th Anniversary!"],
  "./events/2024loopkicks.md"
);

let rcg24 = new NewsCard(
  "Rose City Gathering 3 fieldtrip!",
  ["Jul 26-28, Beaverton OR", "The Portland Homies main summer Gathering"],
  "./events/2024rcg.md"
);

let Foundations = new NewsCard(
  "Next 4-week Tricking Foundations Class",
  [
    `Beginning Thursday ${nextFoundationsDate()}`,
    "full info and registration here!",
  ],
  "",
  "https://www.seattletricking.com/tricking-foundations"
);
// let memorial24 = new NewsCard(
//     'Updated Hours: Memorial Day week',
//     [
//         'Monday and Thursday Hours adjusted!'
//     ],
//     './events/2024memorial-day.md'
// )
// let earthDay = new NewsCard(
//     'Earth Day Tricking Invitational in Portland!',
//     [
//         'Saturday April 27th at 6pm',
//         'Click here for carpool survey, registration, and full details'
//     ],
//     'https://seatricks.teamapp.com/clubs/559888/events/24614775-earth-day-invitational-field-trip-pdx-gathering?_detail=v1&_expires_at=1714521599'
// )
// let meanyDance = new NewsCard(
//     'Cie Hervé KOUBI: The Barbarian Nights',
//     [
//         'French Dance/Tricking company in town!',
//         'Performing 8pm at Meany Center at UW May 9,10,11',
//         "I'm thinking Saturday 🤔",
//         'more info here!'
//     ],
//     './events/2024barbariannights/page'

// )

// let rickyShirt24 = new NewsCard(
//     "Ricky's got a new shirt",
//     [
//         'If you climb rocks or wear shirts. . .',
//         'order here!'
//     ],'',
//     'https://www.rtmvmt.com/'
// )

// Recurring News

// let injuryScreen = new NewsCard(
//     'April Injury Screen',
//     [
//         'Gina will be back on Friday April 12!',
//         'Injury screen is free with membership or Drop-in',
//         'First come first served :-)'
//     ]
// )
