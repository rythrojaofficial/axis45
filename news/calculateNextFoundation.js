export default function calculateNextFoundations(
  todayYear,
  todayMonth,
  todayDay
) {
  let firstDayOfMonth = new Date(todayYear, todayMonth - 1, 1),
    firstDayOfNextMonth = new Date(todayYear, todayMonth, 1),
    currentDay,
    thursdayArray = [];

  switch (true) {
    case todayDay <= 11:
      currentDay = firstDayOfMonth;
      break;
    case todayDay > 11:
      currentDay = firstDayOfNextMonth;
      break;
  }

  for (let i = 0; i < 11; i++) {
    currentDay.setDate(1 + i);
    let currentDayWeekday = currentDay.toLocaleDateString("en-US", {
      weekday: "long",
    });
    if (currentDayWeekday === "Thursday") {
      let thursdays = new Date(currentDay.setDate(1 + i));
      thursdayArray.push(thursdays);
    }
  }
  let output = {
    dd: thursdayArray[0].getDate(),
    mm: thursdayArray[0].getMonth() + 1,
  };
  let outputDate = `${output.mm}/${output.dd}`;
  return outputDate;
}
