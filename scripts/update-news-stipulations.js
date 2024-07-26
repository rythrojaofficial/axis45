// If today's session is canceled
export let noSesh = {
  cancelled: true,
  days: [],
  messages: [
    "normal Practice canceled due to Rose City Gathering",
    "word on the street is slava might sesh 4-6ish, dm him to confirm tho",
  ],
};

// Emergency News
export let emergencyNews = {
  active: false,
  title: "blue",
  messages: ["school", "rules"],
  md: "./events/emergencyNews.md",
};

// Wednesdays
export let thisWednesdaySesh = false;
