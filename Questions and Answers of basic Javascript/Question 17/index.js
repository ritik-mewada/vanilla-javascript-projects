// 17. Write a program which tells the number of days in a month.

function getDaysInMonth(month, year) {
  const daysInMonth = new Date(year, month, 0).getDate(); // o will give last day of month
  const whichMonth = new Date(year, month, 0).toLocaleDateString("default", {
    month: "long",
  });
  return { daysInMonth, whichMonth };
}

const randomMonth = Math.floor(Math.random() * 12);
const randomYear = Math.floor(Math.random() * 3000);
const daysInMonth = getDaysInMonth(randomMonth, randomYear);

console.log(
  `${daysInMonth.daysInMonth} days in ${daysInMonth.whichMonth} in year ${randomYear}`
);
