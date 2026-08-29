import { typewriter } from "./typewriter.js";
typewriter("size-title", "what size is your cup?");

const selectedDrink = localStorage.getItem("selectedDrink");
const drinkImg = document.getElementById("drink-img");

if(selectedDrink) {
    drinkImg.src = `src/images/drinks/${selectedDrink}.png`;
    drinkImg.alt = selectedDrink;
}

const sizeOptions = document.querySelectorAll(".size-option");

sizeOptions.forEach(option => {
    option.addEventListener("click", () => {
        const size = option.dataset.size;
        localStorage.setItem("selectedSize", size);
        window.location.href = "/timer.html";
    });
});