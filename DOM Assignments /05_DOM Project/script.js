// adding button at top right corner
let navCenter = document.querySelector(".nav-center").lastElementChild;
let newButton = document.createElement("button");
newButton.className = "btn";
newButton.innerText = "Pro Subscription";
navCenter.appendChild(newButton);

// Adding new Meal at left side
let addMealName = document.querySelector(".tags-container").lastElementChild;
let newMeal = document.createElement("a");
newMeal.innerText = "Chinese (7)";
addMealName.appendChild(newMeal);

// adding new meal at right side
{
	/* <div class="card">
	<a href="#" class="recipe-text">
		<img src="./img/recipe-2.jpeg" class="recipe-img" />
		<h5 class="recipe-name">Paneer</h5>
		<p class="recipe-disp">Prep : 15min | Cook : 25min</p>
	</a>
</div>; */
}
let recipeGallery = document.querySelector(".recipe-gallery");
let parentDiv = document.createElement("div");
let link = document.createElement("a");
let image = document.createElement("img");
let h5 = document.createElement("h5");
let p = document.createElement("p");

parentDiv.className = "card";
link.className = "recipe-text";
image.className = "recipe-img";
h5.className = "recipe-name";
p.className = "recipe-disp";

h5.innerText = "Cheese Cake";
p.innerText = "Prep : 30min | Cook : 40min";
image.src = "./img/recipe-6.jpg";

link.append(image, h5, p);
parentDiv.append(link);

recipeGallery.appendChild(parentDiv);
