import themes from "./themes.js";
const themeParam = new URL(location.href).searchParams.get("theme");
const theme = themes[themeParam] || Object.values(themes)[0];

const game = document.querySelector("#game");
const playerDiv = document.getElementById("player");
const itemCount = document.querySelector("#itemCountSection>span");
const itemCountIcon = document.querySelector("#itemCountSection>img");
const bombCount = document.querySelector("#bombCountSection>span");
const bombCountIcon = document.querySelector("#bombCountSection>img");
let playerPosition = 0;
let playerScore = 0;
let playerBomb = 0;

function setupTheme() {
  playerDiv.src = `resources/${theme.player}.png`;
  itemCountIcon.src = `resources/${theme.item}.png`;
  bombCountIcon.src = `resources/${theme.bomb}.png`;
  game.style.background = `url("resources/${theme.background}.png")`;
}
setupTheme();

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
function createGameObject(type, xPosition) {
  return `<img
    class="object"
    data-type="${type}"
    src="resources/${theme[type]}.png"
    style="left: ${xPosition}px"
  />`;
}
function generateObject() {
  const xPosition = Math.floor(Math.random() * (window.innerWidth - 50));
  const objectRand = Math.ceil(Math.random() * 100);
  let gameObject;
  if (objectRand <= 20) {
    gameObject = createGameObject("bomb", xPosition);
  } else {
    gameObject = createGameObject("item", xPosition);
  }
  game.insertAdjacentHTML("beforeend", gameObject);
}
let difficulty = 1;
let spawnIntervalDelay = 1000;
let spawnInterval;
function initSpawnInterval() {
  spawnInterval = setInterval(() => {
    generateObject();
  }, spawnIntervalDelay);
}
initSpawnInterval();

function checkObjects() {
  const objects = document.querySelectorAll(".object");
  const playerRect = playerDiv.getBoundingClientRect();
  objects.forEach((o) => {
    const itemRect = o.getBoundingClientRect();

    if (itemRect.bottom >= window.innerHeight) {
      o.remove();
      return;
    }

    if (
      (itemRect.left > playerRect.left && itemRect.left < playerRect.right) ||
      (itemRect.right > playerRect.left && itemRect.right < playerRect.right)
    ) {
      if (itemRect.bottom > playerRect.top) {
        o.remove();
        const objectType = o.dataset.type;
        if (objectType === "item") {
          handleGetItem();
        } else if (objectType === "bomb") {
          handleGetBomb();
        }
      }
    }
  });
}
setInterval(checkObjects, 250);

function handleGetItem() {
  playerScore++;
  itemCount.innerText = playerScore;
  if (!(playerScore % 10) && playerScore >= difficulty * 10) {
    difficulty++;
    spawnIntervalDelay *= 0.9;
    clearInterval(spawnInterval);
    initSpawnInterval();
  }
}

function handleGetBomb() {
  playerBomb++;
  bombCount.innerText = playerBomb;
  if (playerBomb >= 3) {
    location.href = "/gameOver.html";
  }
}
