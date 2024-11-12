import calculateNextFoundations from "./calculateNextFoundation.js";
import { today } from "./updateNews.js";

// If today's session is canceled or otherwise changed
export let noSesh = {
  cancelled: false,
  days: [],
  messages: [
    "Halloween sesh! Details below!",
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
    date: "11/7, ",
    // message will show ONLY if there is a date
    message: "Last class of the month will be on weds 11/27 due to 🦃 day!",
  };

  if (manualFoundations.date === "") {
    return calculateNextFoundations(today.yy, today.mm, today.dd);
  } else return `${manualFoundations.date} ${manualFoundations.message}`;
}
