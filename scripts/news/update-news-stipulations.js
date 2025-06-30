import calculateNextFoundations from "./calculateNextFoundation.js";
import { today } from "./updateNews.js";
import { checkWednesdaySheet } from "./checkWednesdaySheet.js";
// import { getCSVdata } from "../google-sheets-logic/read-public-csv.js";
// If today's session is canceled or otherwise changed
export let noSesh = {
  cancelled: false,
  days: [
    'justtoday',
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ],
  messages: [
"no open sesh tonight! We're battling in vancouver Wa tonight for RCG :) enjoy the day off!"
    // "No stretch/break today!  Massive Monkees Day is going on and many folks are out of town for memorial day weekend! Monday sesh as normal!"
    // "Thursday Classes cancelled due to Snow and Ice!",
    // "Whatever melts today is likely to refreeze overnight.",
    // "A 3 week cycle for tricking foundations will start next Thursday 2/13 at the proportionate rate :-)",
    // "Everyone stay safe out there!",
    // "J&K on Holiday in Hawaii from Sunday 1/19 through Wednesday 1/29!",
    // "Class schedule may be affected!",
    // "Please see below ⬇️ for the projected changes!",
    // "tuesday-thursday practices cancelled due to Christmas! ",
    // "happy holidays and see y'all on Friday! ",

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
let thisWednesdaySesh = false;
// console.log(today.weekday)
if (today.weekday === 'Wednesday'){
    let activeBonus = await checkWednesdaySheet()
    activeBonus.forEach(date => {
    if (date === today.sortable){
        thisWednesdaySesh = true;
    }
    })
}
export { thisWednesdaySesh }
// Manual Foundations, next foundations date
export function nextFoundationsDate() {
  // let nextFoundations;
  let manualFoundations = {
    date: "",
    // message will show ONLY if there is a date
    message:
       "due to early February snow and icy roads.  February will be a 3-week session, priced proportionately."
      // "December will have workshops rather than foundations due to the holidays :)",
  };

  if (manualFoundations.date === "") {
    return calculateNextFoundations(today.yy, today.mm, today.dd);
  } else return `${manualFoundations.date} ${manualFoundations.message}`;
}
