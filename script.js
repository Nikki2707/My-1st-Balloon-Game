const balloon = document.getElementById("balloon");
const pump = document.getElementById("pump");

let size = 50;  // Initial size of the balloon
let maxSize = 150; // Size at which balloon starts moving
let isFlying = false;

// Function to inflate the balloon
pump.addEventListener("click", () => {
    if (!isFlying) {
        size += 10;
        balloon.style.width = size + "px";
        balloon.style.height = size + "px";

        if (size >= maxSize) {
            startFlying();
        }
    }
});

// Function to make the balloon move randomly
function startFlying() {
    isFlying = true;
    moveBalloon();
}

function moveBalloon() {
    setInterval(() => {
        if (isFlying) {
            let x = Math.random() * (window.innerWidth - 100);
            let y = Math.random() * (window.innerHeight - 100);
            balloon.style.transform = `translate(${x}px, ${y}px)`;
        }
    }, 1000);
}

// Function to burst the balloon on tap
balloon.addEventListener("click", () => {
    if (isFlying) {
        alert("Balloon Burst!");
        resetGame();
    }
});

// Reset the game
function resetGame() {
    size = 50;
    isFlying = false;
    balloon.style.width = "50px";
    balloon.style.height = "50px";
    balloon.style.transform = "translateX(-50%)";
}
