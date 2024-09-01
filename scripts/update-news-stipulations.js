// If today's session is canceled or otherwise changed
export let noSesh = {
  cancelled: false,
  days: [],
  messages: [
    "Not a Gathering Activities are today! see below for details",
    "be weary of PAX traffic!",
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
