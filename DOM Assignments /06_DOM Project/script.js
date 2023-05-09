let logo = document.querySelector(".logo");
logo.src = "https://ineuron.ai/images/ineuron-logo.png";

let price = document.querySelector(".app_price span");
price.innerText = "$10";

let footerSocial = document.querySelector(".footer_social");
let socialDiv = document.createElement("div");
let icon = document.createElement("i");

socialDiv.className = "footer_social_ico";
icon.className = "fa-brands fa-linkedin";

socialDiv.appendChild(icon);
footerSocial.appendChild(socialDiv);
