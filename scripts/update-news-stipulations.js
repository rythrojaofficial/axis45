// If today's session is canceled or otherwise changed
export let noSesh = {
  cancelled: true,
  days: [],
  messages: [
    "Sunday update: 
    "stretch is 11am-1pm today! ",
    "Open break 1-3pm! ",
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
