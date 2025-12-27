import { localDateToSortableDate } from "../scripts/parsedate.js";
// if you want to change the date, for testing vvvv
const utcdate = new Date(); // real date
//        ==vvv fake date vvv==
// const fakeDate = 251225;
// const utcdate = new Date(sortableDateToLocalDate(fakeDate));
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