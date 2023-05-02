const game = document.querySelector("#game");
const redPanda = document.getElementById("redPanda");
const appleCounter = document.getElementById("appleCounter");
let pandaPosition = 0;
let appleScore = 0;

// Red Panda
document.addEventListener("keydown", function (event) {
  const redPandaWidth = redPanda.getBoundingClientRect().width;
  if (event.key === "ArrowRight") {
    redPanda.style.transform = "rotateY(0)";
    if (pandaPosition < window.innerWidth - redPandaWidth * 1.2) {
      pandaPosition += 50;
      redPanda.style.left = pandaPosition + "px";
    }
  } else if (event.key === "ArrowLeft") {
    redPanda.style.transform = "rotateY(180deg)";
    if (pandaPosition > 0) {
      pandaPosition -= 50;
      redPanda.style.left = pandaPosition + "px";
    }
  }
});

// Apples
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
}, 1000);

function checkApples() {
  const apples = document.querySelectorAll(".apple");
  const redPandaRect = redPanda.getBoundingClientRect();
  apples.forEach((a) => {
    const appleRect = a.getBoundingClientRect();

    if (appleRect.bottom >= window.innerHeight) {
      a.remove();
      return;
    }

    if (
      (appleRect.left > redPandaRect.left &&
        appleRect.left < redPandaRect.right) ||
      (appleRect.right > redPandaRect.left &&
        appleRect.right < redPandaRect.right )
    ) {
      if (appleRect.bottom > redPandaRect.top) {
        a.remove();
        appleCount();
      }
    }
  });
}
setInterval(checkApples, 250);

// Game
function appleCount() {
  appleScore++;
  appleCounter.innerText = appleScore;
}
