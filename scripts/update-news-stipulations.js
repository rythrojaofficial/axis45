// If today's session is canceled or otherwise changed
export let noSesh = {
  cancelled: false,
  days: [],
  messages: [
    "Axis 45 is closed on Labor Day!",
    "Join us outside for a grass sesh",
    "at Bellevue Downton Park 3:30pm!",
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
