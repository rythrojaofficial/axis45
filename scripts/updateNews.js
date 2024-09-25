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
    date: "",
    message: "due to 4th of july 🇺🇸 pushing back things 1 week :)",
  };

  if (manualFoundations.date === "") {
    return calculateNextFoundations(today.yy, today.mm, today.dd);
  } else return `${manualFoundations.date} ${manualFoundations.message}`;
}
// ====^^^^===============^^^^==========
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

import { noSesh } from "./update-news-stipulations.js";
switch (noSesh.cancelled) {
  case true:
    let todaysSessionsNone = new NewsCard(
      `${today.weekday} ${today.mm}/${today.dd} Axis Sessions ⬇️`,
      noSesh.messages,
      "",
      ""
    );
    break;
  case false:
    let todaysSessions = new NewsCard(
      `${today.weekday} ${today.mm}/${today.dd} Axis Sessions ⬇️`,
      [],
      "offerings",
      ""
    );
    break;
  default:
    console.log("error noSesh.cancelled updatenews.js");
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Actual New News
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
import { emergencyNews } from "./update-news-stipulations.js";
switch (emergencyNews.active) {
  case true:
    let emergencyNewsActive = new NewsCard(
      emergencyNews.title,
      emergencyNews.messages,
      emergencyNews.md
    );
    break;
  case false:
    break;
  default:
    console.log("error emergencynews updatejs");
}
// let concreteParking24 = new NewsCard(
//  "Concrete Repair, Parking may be affected",
//  [
//    "9.19-9.21/Thurs-Sat",
//    "Property Managers are fixing the driveway and stall",
//    "concrete between thursday and sunday!",
//    "We will be open, but parking may be impacted!",
//  ]
// );

let discordAnnouncement24 = new NewsCard(
  "Seattle Tricking Discord is Live!",
  [
    "Get notified of updates, announcements, and more!",
    "click here for the full details!",
    "seattletricking.com/discord",
  ],
  "./discord/discord.md",
  "./discord.html"
);
// let ggbeach24 = new NewsCard(
//  "Golden Gardens Beach Day!",
//  ["9.7/Sat/4pm", "Golden Gardens Beach Park"],
//  "./events/24ggbeachday.md"

// );
// let labordayMondaySesh = new NewsCard(
//   "Labor Day Grass Sesh!",
//   ["9.2/Mon/3:30pm", "Bellevue Downtown Park"],
//   "./events/24labordayseshbellevue.md"
// );
// let jerWeddingDay = new NewsCard("Sunday 8/25 Reminder!", [
//   "Jared & Krissy are attending an afternoon wedding!",
//   "Sunday stretch to start 10:45am,",
//   "Sunday Breaking will be canceled",
//   "Enjoy the rest of your Sunday :-)",
// ]);

// let laborDay24 = new NewsCard(
//  "[Sat/8.31] Labor Day Mini: Not a Gathering (2)",
//  ["Click here for full page", "Single Pass comp,", "Open Tricking, & More!"],
// "./events/2024-laborday-mini.md",
// "./events/2024-laborday-mini.html"
// );

// let closures = new NewsCard(
//  "Upcoming Closures due to events!",
//   ["RCG3 this week!"],
//   "./events/2024julyclosures.md"
// );
// let loopkicks24 = new NewsCard(
//   "Loopkicks 2024 Gathering fieldtrip!",
//   ["Jul 19-21, Santa Clara CA", "20th Anniversary!"],
//   "./events/2024loopkicks.md"
// );

// let rcg24 = new NewsCard(
//  "Rose City Gathering 3 fieldtrip!",
//  ["Jul 26-28, Beaverton OR", "The Portland Homies main summer Gathering"],
//  "./events/2024rcg.md"
// );

let Foundations = new NewsCard(
  "Next 4-week Tricking Foundations Class",
  [
    `Beginning Thursday ${nextFoundationsDate()}`,
    "click for full info and registration!",
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
