import themes from "./themes.js";
const title = document.querySelector(".randomColor");

setInterval(() => {
  const color = ((Math.random() * 0xffffff) << 0).toString(16);
  title.style.color = `#${color}`;
}, 200);

const icons = document.querySelectorAll(".icon");
const imageToChange = document.querySelector(".imageToChange");
const playBtn = document.querySelector(".play");
let selectedTheme;

icons.forEach((i) => i.addEventListener("click", handleChangeTheme));
playBtn.addEventListener("click", handlePlay);

function handleChangeTheme(e) {
  const dataTheme = e.target.getAttribute("data-theme");
  selectedTheme = dataTheme;
  imageToChange.src = `resources/${themes[dataTheme].player}.png`;
}

function handlePlay() {
  location.href = `game.html?theme=${selectedTheme}`;
}