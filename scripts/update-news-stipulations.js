// If today's session is canceled
export let noSesh = {
  cancelled: false,
  messages: [
    "Friday practice canceled",
    "Nothing Scheduled!",
    "Enjoy the day off :-)",
  ],
};

// Emergency News
export let emergencyNews = {
  active: false,
  title: "",
  firstLine: "",
  secondLine: "",
  md: "./events/emergencyNews.md",
};
