// 23. Write a program to check that the number given by the user is a prime number or not.

const number = Math.floor(Math.random() * 100);
let flag = false;

if (number == 1) {
  console.log(" 1 is neither prime nor composite");
} else if (number > 1) {
  for (let i = 2; i < number / 2; i++) {
    if (number % i == 0) {
      console.log(`${number} is not a prime number`);
      break;
    } else {
      console.log(`${number} is a prime number`);
      break;
    }
  }
} else {
  console.log(`${number} is not a prime number`);
}
