// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const arr = [];
for (let i = 0; i <= 100; i++) {
  if (isPrime(i)) {
    arr.push(i);
  }
}
console.log(arr);
// [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, ];
