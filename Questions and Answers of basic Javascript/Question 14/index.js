// 14. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.

const evenNumber = Math.floor(Math.random() * 100);

if (evenNumber % 2 === 0) {
  console.log(`${evenNumber} is Even Number!`);
} else {
  console.log(`${evenNumber} is Odd Number!`);
}
