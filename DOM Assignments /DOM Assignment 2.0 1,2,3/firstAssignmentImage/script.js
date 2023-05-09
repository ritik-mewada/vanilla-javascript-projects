// Task 1
let ul = document.querySelector("#navigation-links");
let newLi = document.createElement("li");
let newAnchorTag = document.createElement("a");
let changeName = document.querySelector("li:nth-child(3) a");
// Change Name of 3rd li to Hire Me
changeName.innerText = "Hire Me";
// insert new li
newAnchorTag.innerText = "Projects";
newLi.appendChild(newAnchorTag);
ul.insertBefore(newLi, ul.children[2]);

// Task 2
let searchDiv = document.querySelector(".search-field input");
searchDiv.placeholder = "Search My Projects";

// Task 3
let nameToEmployee = document.querySelector(".freelance");
nameToEmployee.innerText = "an Employee";

// Task 4
let changeImage = document.querySelector(".hero-right-section img");
changeImage.src =
	"https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg";

// Task 5
let selectButtonList = document.querySelector(".hero-right-section-btns");
let newButton = document.createElement("button");

newButton.textContent = "Support Me";
selectButtonList.appendChild(newButton);
