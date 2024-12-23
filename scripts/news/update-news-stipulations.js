import calculateNextFoundations from "./calculateNextFoundation.js";
import { today } from "./updateNews.js";

// If today's session is canceled or otherwise changed
export let noSesh = {
  cancelled: true,
  days: [],
  messages: [
    "Monday Sesh Tentative!",
    "Check the # monfri-open-sessions channel on our discord to vote yes!",

    // "Enjoy the Day off!",

    // "Due to Thanksgiving on Thursday, we Have Thursday Classes on Wednesday!",
    // "6:30pm Tricking Foundations",
    // "7:30pm Flipping Progressions",
    // "9:00pm Bonus Sesh w/ AJ!",

    // "Due to heavy Weather, Tuesday Classes are CANCELLED.  Please stay safe! If you get stuck or need anything, hop in the discord!",
    // "Halloween sesh! Details below!",
    // "5th Thursday update:",
    // "No Classes since there's only 4 classes of Tricking Foundations per session",
    // "Enjoy the Halloween off!",
  ],
};

// Wednesdays
export let thisWednesdaySesh = false;

// Manual Foundations, next foundations date
export function nextFoundationsDate() {
  // let nextFoundations;
  let manualFoundations = {
    date: "",
    // message will show ONLY if there is a date
    message:
      "December will have workshops rather than foundations due to the holidays :)",
  };

  if (manualFoundations.date === "") {
    return calculateNextFoundations(today.yy, today.mm, today.dd);
  } else return `${manualFoundations.date} ${manualFoundations.message}`;
}
