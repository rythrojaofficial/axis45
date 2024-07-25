// If today's session is canceled
export let noSesh = {
  cancelled: false,
  days: [],
  messages: [
    "Practices canceled due to Rose City Gathering",
    "Enjoy the day off :-)",
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
