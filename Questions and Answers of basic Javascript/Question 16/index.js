// 16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const month = Math.floor(Math.random() * months.length);

switch (months[month]) {
  case "December":
  case "January":
  case "February":
    console.log(`It is winter in ${months[month]} `);
    break;
  case "March":
  case "April":
  case "May":
    console.log(`It is Spring in ${months[month]}`);
    break;
  case "June":
  case "July":
  case "August":
    console.log(`It is Summer in ${months[month]}`);
    break;
  case "September":
  case "October":
  case "November":
    console.log(`It is Autumn in ${months[month]}`);
    break;
  default:
    console.log("No Valid month");
}
