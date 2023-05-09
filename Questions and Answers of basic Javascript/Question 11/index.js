// 11. Use the Date object to do the following activities

const date = new Date(); // 2023-02-09T17:57:57.829Z

//     - What is the year today?
const year = date.getFullYear(); // 2023
//     - What is the month today as a number?
const month = date.getMonth(); // 1 (because it starts from 0 so feb is at 1 index)
//     - What is the date today?
const todayDate = date.getDate(); // 9
//     - What is the day today as a number?
const dayAsNumber = date.getDay(); // 4 (thursday so its 4)
//     - What is the hours now?
const hours = date.getHours(); // 23 (it's 11 right now)
//     - What is the minutes now?
const minutes = date.getMinutes(); // 33 (it's 11.33 right now)

//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.
const today = new Date();
const past = new Date(1970 - 01 - 01);

const secondsElapsed = today - past;
const result = secondsElapsed / 1000;
console.log(result);
