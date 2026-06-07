import { typewriter } from "./typewriter.js";
typewriter("menu-title", "what can i get you today?");

const warmDrinks = [
    "espresso", 
    "americano", 
    "cappuccino", 
    "matcha"
];
const coldDrinks = [
    "icedlatte", 
    "icedmatcha", 
    "affogato", 
    "frappe"
];

const grid = document.getElementById("drinks-grid");

const warmCol = document.createElement("div");
warmCol.classList.add("drink-column");

const coldCol = document.createElement("div");
coldCol.classList.add("drink-column");

warmDrinks.forEach(drink => {
    const div = document.createElement("div");
    div.classList.add("drink");
    div.dataset.drink = drink;

    const img = document.createElement("img");
    img.src = `/images/drinks/${drink}.png`;
    img.alt = drink;
    div.addEventListener("click", () => {
    localStorage.setItem("selectedDrink", drink);
    window.location.href = "/size.html";
    });

    div.appendChild(img);
    warmCol.appendChild(div);
});

coldDrinks.forEach(drink => {
    const div = document.createElement("div");
    div.classList.add("drink");
    div.dataset.drink = drink;

    const img = document.createElement("img");
    img.src = `/images/drinks/${drink}.png`;
    img.alt = drink;
    
    if (drink === "affogato") {
        img.classList.add("affogato-img");
    }

    div.addEventListener("click", () => {
    localStorage.setItem("selectedDrink", drink);
    window.location.href = "/size.html";
    });

    div.appendChild(img);
    coldCol.appendChild(div);
});

grid.appendChild(warmCol);
grid.appendChild(coldCol);