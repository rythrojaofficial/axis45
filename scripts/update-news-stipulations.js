// If today's session is canceled
export let noSesh = {
  cancelled: true,
  days: [],
  messages: [
    "normal Practices canceled due to Rose City Gathering",
    "slava planning on stretching Sunday 12noon",
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
