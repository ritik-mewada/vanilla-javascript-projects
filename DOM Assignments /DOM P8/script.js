let asideSection = document.querySelector(".new");
let hr = document.createElement("hr");
let h2 = document.createElement("h2");
let p = document.createElement("p");

asideSection.style.overflow = "auto";
hr.classname = "hr-line";
h2.className = "new-head";
p.className = "new-p";

h2.innerText = "News One";
p.innerText =
	"Private funding by VC firms is down 50% YOY. We take a look at what that means.";
asideSection.append(hr, h2, p);

document.body.style.backgroundImage = "none";

// navbar
let navbarToggler = document.querySelector(".navbar-toggler");
let collapse = document.querySelector(".navbar-collapse");

navbarToggler.addEventListener("click", function () {
	collapse.classList.toggle("show");
});
