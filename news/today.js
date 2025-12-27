import { localDateToSortableDate, sortableDateToLocalDate } from "../scripts/parsedate.js";


// if you want to change the date, for testing vvvv
//        ==vvv fake date vvv==
const testDate = {
  active:false,
  date: 251225
}
let utcdate = '';

switch(testDate.active){
  case true: utcdate = sortableDateToLocalDate(testDate.date);
    break;
  case false: utcdate = new Date();
    break;
  default: console.log('error, check today.js');
  break;
}
// // ================================================

// replaced below with automatic
// const sortableToday = localDateToSortableDate(utcdate);

export const today = {
  utc: utcdate,
  weekday: utcdate.toLocaleDateString("en-US", { weekday: "long" }),
  dd: utcdate.getDate(),
  mm: utcdate.getMonth() + 1, // 1 indexed
  mmZeroIndexed: utcdate.getMonth(),
  yy: utcdate.getFullYear(),
  // sortable: sortableToday
  sortable: localDateToSortableDate(utcdate)
};