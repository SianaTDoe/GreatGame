const game = document.querySelector("#game");
const player = document.getElementById("player");
const counter = document.getElementById("counter");
let playerPosition = 0;
let playerScor = 0;

// Red player
document.addEventListener("keydown", function (event) {
  const playerWidth = player.getBoundingClientRect().width;
  if (event.key === "ArrowRight") {
    player.style.transform = "rotateY(0)";
    if (playerPosition < window.innerWidth - playerWidth * 1.2) {
      playerPosition += 50;
      player.style.left = playerPosition + "px";
    }
  } else if (event.key === "ArrowLeft") {
    player.style.transform = "rotateY(180deg)";
    if (playerPosition > 0) {
      playerPosition -= 50;
      player.style.left = playerPosition + "px";
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
  const playerRect = player.getBoundingClientRect();
  apples.forEach((a) => {
    const appleRect = a.getBoundingClientRect();

    if (appleRect.bottom >= window.innerHeight) {
      a.remove();
      return;
    }

    if (
      (appleRect.left > playerRect.left &&
        appleRect.left < playerRect.right) ||
      (appleRect.right > playerRect.left &&
        appleRect.right < playerRect.right )
    ) {
      if (appleRect.bottom > playerRect.top) {
        a.remove();
        appleCount();
      }
    }
  });
}
setInterval(checkApples, 250);

// Game
function appleCount() {
  playerScor++;
  counter.innerText = playerScor;
}
