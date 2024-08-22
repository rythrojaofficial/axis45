// If today's session is canceled or otherwise changed
export let noSesh = {
  cancelled: false,
  days: [],
  messages: [
    "Jared & Krissy are attending an afternoon wedding!",
    "Sunday stretch starts 11am,",
    "Sunday breaking is canceled!  Enjoy the rest of your Sunday!",
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
