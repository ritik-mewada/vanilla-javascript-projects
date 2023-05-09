// #dc143c
let title = document.querySelector(".caption h1");
title.style.color = "#dc143c";

let addTocartButton = document.querySelector(".add-to-cart");

addTocartButton.addEventListener("mouseover", () => {
	addTocartButton.style.background = "#DC143C";
});

addTocartButton.addEventListener("mouseout", () => {
	addTocartButton.style.background = "hsl(158, 36%, 37%)";
});
