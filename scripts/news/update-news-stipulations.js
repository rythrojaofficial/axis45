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
export let thisWednesdaySesh = true;

// Manual Foundations, next foundations date
export function nextFoundationsDate() {
  // let nextFoundations;
  let manualFoundations = {
    date: "1/2/25, ",
    // message will show ONLY if there is a date
    message:
      "December will have workshops rather than foundations due to the holidays :)",
  };

  if (manualFoundations.date === "") {
    return calculateNextFoundations(today.yy, today.mm, today.dd);
  } else return `${manualFoundations.date} ${manualFoundations.message}`;
}
