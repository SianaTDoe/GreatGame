let redPanda = document.querySelector(".redPanda");
let currentPosition = 0;

// Red Panda
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    redPanda.style.transform = "rotateY(0)";
    currentPosition += 50;
    redPanda.style.left = currentPosition + "px";
  } else {
    redPanda.style.transform = "rotateY(180deg)"; 
    currentPosition -= 50;
    redPanda.style.left = currentPosition + "px";
  }
});

// Generate Apples
let game = document.querySelector("#game");

function generateApple() {
  let appleImage = document.createElement("img");
  appleImage.src = "resources/apple.png";
  appleImage.classList.add("apple");
  appleImage.style.left =
    Math.floor(Math.random() * (window.innerWidth - 50)) + "px";
  game.appendChild(appleImage);
}

for (let i = 0; i < 200; i++) {
  generateApple();
}
