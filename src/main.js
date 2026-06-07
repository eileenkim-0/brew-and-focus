import { typewriter } from "./typewriter.js";

const cat = document.getElementById("cat");
const cafeBg = document.getElementById("cafe-bg");

typewriter("welcome-text", "welcome to brew & focus !", 90, () => {
    setTimeout(() => {
        typewriter("sub-text", "enter the cafe to focus . . .", 60);
    });
});

cat.addEventListener("click", () => {
    const heart = document.createElement("img");
    heart.src = "/images/heart.png";
    heart.classList.add("heart");
    
    const catRect = cat.getBoundingClientRect();
    heart.style.left = (catRect.left + catRect.width / 2) + "px";
    heart.style.top = (catRect.top - 20) + "px";
    
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 1000);

    const meow = new Audio('/sounds/meow.wav');
    meow.volume = 0.3;
    meow.play();
});

cafeBg.addEventListener("click", () => {
    window.location.href = "/menu.html";
});
