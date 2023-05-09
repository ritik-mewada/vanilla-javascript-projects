// api key =f30a84a16cd74a248ae95541231602
// url: http://api.weatherapi.com/v1/current.json?key=f30a84a16cd74a248ae95541231602&q=London

// data
// Variable to store the element
// function to get the data from weather app
// manipulate the variable of already created element

let data;

const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temprature = document.getElementById("temprature");
const logoImage = document.getElementById("logoImage");
const weatherStatus = document.getElementById("weatherStatus");

const getData = async (event) => {
	event.preventDefault();
	if (!inputBox.value) {
		alert("Please enter city name");
		return;
	}

	const city = inputBox.value;

	// fetch details
	let url = `http://api.weatherapi.com/v1/current.json?key=f30a84a16cd74a248ae95541231602&q=${city}`;
	const fetchData = await fetch(url);

	const orgData = await fetchData.json();
	data = orgData;

	// display
	countryName.innerHTML = data.location.country;
	stateName.innerHTML = data.location.region;
	cityName.innerHTML = data.location.name;
	humidity.innerHTML = data.current.humidity;
	windSpeed.innerHTML = data.current.wind_kph;
	temprature.innerHTML = data.current.temp_c;
	logoImage.src = data.current.condition.icon;
	weatherStatus.innerHTML = data.current.condition.text;
};
