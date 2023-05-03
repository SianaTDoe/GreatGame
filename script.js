console.log("What are you doing ? Feed the pet, not your curiosity !")

const game = document.querySelector("#game");
const playerDiv = document.getElementById("player");
const score = document.getElementById("score");
let playerPosition = 0;
let playerScore = 0;
let theme = "apple";

// Player
document.addEventListener("keydown", function (event) {
  const playerWidth = playerDiv.getBoundingClientRect().width;
  if (event.key === "ArrowRight") {
    playerDiv.style.transform = "rotateY(0)";
    if (playerPosition < window.innerWidth - playerWidth * 1.2) {
      playerPosition += 50;
      playerDiv.style.left = playerPosition + "px";
    }
  } else if (event.key === "ArrowLeft") {
    playerDiv.style.transform = "rotateY(180deg)";
    if (playerPosition > 0) {
      playerPosition -= 50;
      playerDiv.style.left = playerPosition + "px";
    }
  }
});

// Item
function generateItem() {
  const xPosition = Math.floor(Math.random() * (window.innerWidth - 50));
  const itemDiv = 
    `<img 
        class="item"
        src="resources/${theme}.png"
        style="left: ${xPosition}px"
      />`;
  game.insertAdjacentHTML("beforeend",itemDiv);
}
setInterval(() => {
  generateItem();
}, 1000);

function checkItems() {
  const items = document.querySelectorAll(".item");
  const playerRect = playerDiv.getBoundingClientRect();
  items.forEach((a) => {
    const itemRect = a.getBoundingClientRect();

    if (itemRect.bottom >= window.innerHeight) {
      a.remove();
      return;
    }

    if (
      (itemRect.left > playerRect.left &&
        itemRect.left < playerRect.right) ||
      (itemRect.right > playerRect.left &&
        itemRect.right < playerRect.right )
    ) {
      if (itemRect.bottom > playerRect.top) {
        a.remove();
        itemCount();
      }
    }
  });
}
setInterval(checkItems, 250);

function itemCount() {
  playerScore++;
  score.innerText = playerScore;
}
