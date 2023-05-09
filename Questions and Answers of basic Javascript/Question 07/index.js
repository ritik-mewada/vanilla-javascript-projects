// 07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

// finding index of lat occurence
const arrayOne = ["html", "css", "javascript", "pw skills"];
console.log(arrayOne.lastIndexOf("pw skills")); // 3

// finding index of first occurence
const arrayTwo = ["pw skills", "html", "css", "javascript"];
console.log(arrayTwo.lastIndexOf("pw skills")); // 0
