const selectedDrink = localStorage.getItem("selectedDrink");
const selectedSize = localStorage.getItem("selectedSize");

const times = {
    small: 25*60,
    medium: 45*60,
    large: 60*60
};

let timeLeft = times[selectedSize] || 25*60;
let timerInterval = null;
let isRunning = false;

const drinkImg = document.getElementById("drink-img");
const timerDisplay = document.getElementById("timer-display");
const pauseBtn = document.getElementById("pause-btn");
const playBtn = document.getElementById("play-btn");

if (selectedDrink) {
    drinkImg.src = `src/images/drinks/${selectedDrink}.png`;
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
}

timerDisplay.textContent = formatTime(timeLeft);

function startTimer() {
    isRunning = true;
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = formatTime(timeLeft);

        if(timeLeft <= 0) {
            clearInterval(timerInterval);
            isRunning = false;
            document.getElementById("done-popup").classList.remove("hidden");
            typewriter("done-text", "you're all done! ☕");
        }
    }, 1000);
};

function pauseTimer() {
    isRunning = false;
    clearInterval(timerInterval);
};

pauseBtn.addEventListener("click", pauseTimer);
playBtn.addEventListener("click", () => {
    if (!isRunning) {
        startTimer();
    }
});

document.getElementById("leave-btn").addEventListener("click", () => {
    window.location.href = "/index.html";
});
document.getElementById("new-order-btn").addEventListener("click", () => {
    window.location.href = "/menu.html";
});