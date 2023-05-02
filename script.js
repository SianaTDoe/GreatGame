let redPanda = document.querySelector(".redPanda");
let currentPosition = 0;

// Red Panda
document.addEventListener("keydown", function (event) {
  const redPandaGeo = redPanda.getClientRects();
  if (event.key === "ArrowRight") {
    redPanda.style.transform = "rotateY(0)";
    if (currentPosition < window.innerWidth - redPandaGeo[0].width * 1.2) {
      currentPosition += 50;
      redPanda.style.left = currentPosition + "px";
    }
  } else if (event.key === "ArrowLeft") {
    redPanda.style.transform = "rotateY(180deg)";
    if (currentPosition > 0) {
      currentPosition -= 50;
      redPanda.style.left = currentPosition + "px";
    }
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

setInterval(() => {
  generateApple();
}, 500);

function moveApple() {
  appleImage.style.transform = "translateY(100%)";
  appleImage.style.transition = "3s";
}
