// 28. Write a program to print the given patterns using the loops

// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***

for (let i = 1; i <= 3; i++) {
  console.log("*".repeat(i));
}
console.log("-----------");
// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***
for (let i = 1; i <= 3; i++) {
  //   console.log("*".repeat(3));
}
// console.log("-----------");
// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	  *
// 	 ***
//  *****
for (let i = 1; i <= 3; i++) {
  //   console.log(" ".repeat(3 - i), "*".repeat(i * 2 - 1), " ".repeat(3 - i));
}
