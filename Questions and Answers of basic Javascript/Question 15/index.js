// 15. Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

const score = Math.floor(Math.random() * 100);

switch (true) {
  case score >= 80:
    console.log("Grade A");
    break;
  case score >= 70 && score <= 79:
    console.log("Grade B");
    break;
  case score >= 60 && score <= 69:
    console.log("Grade C");
    break;
  case score >= 50 && score <= 59:
    console.log("Grade D");
    break;
  case score > 0 && score <= 49:
    console.log("Grade F");
    break;

  default:
    console.log("Not Valid Number");
    break;
}
