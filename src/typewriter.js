export function typewriter(elementId, text, speed = 80, onDone=null) {
    const el = document.getElementById(elementId);
    const clickSound = new Audio('/sounds/typewriter2.wav');
    clickSound.volume = 0.1;
    clickSound.currentTime = 0;
    clickSound.play();

    let i = 0;

    function type() {
        if (i < text.length) {
            el.textContent += text[i];
            i++;
            clickSound.play();
            setTimeout(type, speed);
        } else if(onDone) {
            onDone();
        }
    }

    type();
}