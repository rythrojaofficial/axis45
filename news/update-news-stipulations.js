import calculateNextFoundations from "./calculateNextFoundation.js";
import { checkWednesdaySheet } from "./checkWednesdaySheet.js";
import { noSeshDates } from "./seshCancellations.js";
import { today } from "./today.js";

// import { getCSVdata } from "../google-sheets-logic/read-public-csv.js";
// If today's session is canceled or otherwise changed


// test change date on today.js

export let noSesh = {
  cancelled: false, // changed by ./seshCancellations.js
  messages: [], // changed by ./seshCancellations.js
};
console.log(today.sortable)
if(noSeshDates.length > 0){
    // console.log('checking cancellations: ')
  noSeshDates.forEach(cancellation =>{
    if (cancellation.dateExpires === ''){
      let lastIndex = cancellation.dateCancelled.length - 1;
      cancellation.dateExpires = cancellation.dateCancelled[lastIndex]+1;
    }
    if (today.sortable < cancellation.dateExpires ){
      cancellation.dateCancelled.forEach(date =>{
        if (date === today.sortable){
          noSesh.cancelled = true;
          noSesh.messages = cancellation.messages;
          return
        }
      })
    }
  })
}


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
    date: "1/8",
    // message will show ONLY if there is a date
    message:
      "due to 1/1 being New Year's day.",
      //  "due to early February snow and icy roads.  February will be a 3-week session, priced proportionately."
      // "December will have workshops rather than foundations due to the holidays :)",
  };

  if (manualFoundations.date === "") {
    return calculateNextFoundations(today.yy, today.mm, today.dd);
  } else return `${manualFoundations.date} ${manualFoundations.message}`;
}
