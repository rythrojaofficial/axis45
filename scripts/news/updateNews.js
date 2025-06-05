import { newNews } from "./newNews.js";
import NewsCard from "./newsCard.js";
import { noSesh } from "./update-news-stipulations.js";
import { nextFoundationsDate } from "./update-news-stipulations.js";
import { localDateToSortableDate } from "../parsedate.js";

const utcdate = new Date();
const sortableToday = localDateToSortableDate(utcdate);

export const today = {
  weekday: utcdate.toLocaleDateString("en-US", { weekday: "long" }),
  dd: utcdate.getDate(),
  mm: utcdate.getMonth() + 1,
  yy: utcdate.getFullYear(),
  sortable: sortableToday
};

// ===vvvvv==Foundations==vvvvv=========

// ====^^^^===============^^^^==========
export function populateNews() {
  switch (noSesh.cancelled) {
    case true:
      const todaysSessionsNone = new NewsCard(
        `${today.weekday} ${today.mm}/${today.dd} Axis Sessions ⬇️`,
        noSesh.messages,
        "",
        ""
      );
      break;
    case false:
      const todaysSessions = new NewsCard(
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
  newNews.forEach((newsData) => {
    if (newsData.expires !== false){
      // if an expiry date exists
      let sortableDate = localDateToSortableDate(utcdate);
      if (sortableDate >= newsData.expires){
        newsData.active = false;
      }
    }
    if (newsData.active === true) {
      const card = new NewsCard(
        newsData.title,
        newsData.lines,
        newsData.md,
        newsData.link
      );
    }
  });
  let Foundations = new NewsCard(
    "Next 4-week Tricking Foundations Class",
    [
      `Beginning Thursday ${nextFoundationsDate()}`,
      "click for full info and registration!",
    ],
    "",
    "https://www.seattletricking.com/tricking-foundations"
  );
}
// let earlySunday = new NewsCard("Early stretch this Sunday!", [
//   "9.29 Sunday Stretch will start at 11am :)",
// ]);
// let concreteParking24 = new NewsCard(
//  "Concrete Repair, Parking may be affected",
//  [
//    "9.19-9.21/Thurs-Sat",
//    "Property Managers are fixing the driveway and stall",
//    "concrete between thursday and sunday!",
//    "We will be open, but parking may be impacted!",
//  ]
// );

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

// let discordAnnouncement24 = new NewsCard(
//   "Seattle Tricking Discord is Live!",
//   [
//     "Get notified of updates, announcements, and more!",
//     "click here for the full details!",
//     "seattletricking.com/discord",
//   ],
//   "./discord/discord.md",
//   "./discord.html"
// );
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
