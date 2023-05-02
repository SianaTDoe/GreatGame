let redPanda = document.querySelector(".redPanda");
let currentPosition = 0;

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
  // appleImage.style.transform = `translateY(${500}px)`;
  // appleImage.style.transition = "translate 3s";
  appleImage.style.left =
    Math.floor(Math.random() * (window.innerWidth - 50)) + "px";
  game.appendChild(appleImage);

  // if(position pomme === bas ecran) {
  //   .style.opacity = 0
  // }
}

setInterval(() => {
  generateApple();
}, 1000);

function moveApple() {}
function checkApples() {
  const apples = document.querySelectorAll(".apple");
  // console.log(apples);
  apples.forEach((a) => {
    const appleRect = a.getBoundingClientRect();
    if (appleRect.top + appleRect.height >= window.innerHeight) {
      a.remove();
    }
  });
}
setInterval(checkApples, 1000);

// Game
let appleCounter = document.getElementById("appleCounter");
let apple = document.querySelectorAll(".apple");
let appleRect = apple.getBoundingClientRect();
let redPandaRect = redPanda.getBoundingClientRect();

function appleCount() {
  appleCounter = 0;
  forEach
  if (appleRect.bottom === redPandaRect.top) {
    appleCounter++;
    counterElement.innerHTML = appleCounter;
  }
}
