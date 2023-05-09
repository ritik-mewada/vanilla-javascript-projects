// Task 2
let parantDiv = document.querySelector(".accordian-wrapper");
let accordianDiv = document.createElement("div");
let accordianh3 = document.createElement("h3");
let accordianPara = document.createElement("p");

accordianDiv.className = "accordian";
accordianh3.innerText = "Skills";
accordianPara.innerText =
	"I posses a very good command over Full Stack Development Technologies like MERN which can be seen in my work over the GitHub";
accordianDiv.append(accordianh3, accordianPara);
parantDiv.appendChild(accordianDiv);

// Task 1
let addBackgroundColor = document.querySelectorAll(".accordian h3");
addBackgroundColor.forEach((element) => {
	element.style.backgroundColor = "#DDD5F3";
});

// accordian click events
let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
	element.addEventListener("click", () => {
		let para = element.nextElementSibling;
		if (para.style.display === "block") {
			para.style.display = "none";
		} else {
			para.style.display = "block";
		}
	});
});
