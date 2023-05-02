const redPanda = document.querySelector(".redPanda");
const appleCounter = document.getElementById("appleCounter");
let currentPosition = 0;
let appleScore = 0;

// Red Panda
document.addEventListener("keydown", function (event) {
  const redPandaWidth = redPanda.getBoundingClientRect().width;
  if (event.key === "ArrowRight") {
    redPanda.style.transform = "rotateY(0)";
    if (currentPosition < window.innerWidth - redPandaWidth * 1.2) {
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

// Apples
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
}, 1000);

function checkApples() {
  const apples = document.querySelectorAll(".apple");
  const redPandaRect = redPanda.getBoundingClientRect();
  console.log("redPandaRect", redPandaRect);
  console.log("apples", apples);
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
