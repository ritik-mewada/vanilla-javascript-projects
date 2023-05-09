// 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

const fileName = "index.js";

const extension = fileName.split(".").pop();
console.log(extension);
