let wrapper = document.querySelectorAll(".clash-card__unit-stats");
let backgroundColor = ["#ec9b3b", "#ee5487", "#f6901a", "#82bb30", "#4facff"];
[...wrapper].map((element, index) => {
	element.style.backgroundColor = backgroundColor[index];
	element.style.color = "#FFFFFF";
	element.lastElementChild.style.color = "#ffffff";
});
