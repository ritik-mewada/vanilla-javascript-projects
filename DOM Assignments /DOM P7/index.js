// 7.1
let languageList = document.querySelectorAll("a");
const texts = new Set([...languageList].map((x) => x.innerHTML));

languageList.forEach((tag) => {
	if (tag.innerText.includes("2.0")) {
		tag.remove(tag.innerHTML);
	}
});

// 7.2
let inputBox = document.querySelector(".main__form-input");

const checkInput = () => {
	if (inputBox.value.length > 0) {
		document.querySelector(".main__form-btn").disabled = false;
	} else {
		document.querySelector(".main__form-btn").disabled = true;
	}
};

function onSubmit(event) {
	event.preventDefault();
	let ul = document.querySelector(".list");
	let li = document.createElement("li");

	let value = inputBox.value;
	const string = value.charAt(0).toUpperCase() + value.slice(1);
	li.innerText = string;
	ul.appendChild(li);
	inputBox.value = "";
}
