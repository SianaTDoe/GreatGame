import themes from "./themes.js";

const title = document.querySelector(".randomColor");
function changeTitleColor() {
  setInterval(() => {
    const color = ((Math.random() * 0xffffff) << 0).toString(16);
    title.style.color = `#${color}`;
  }, 200);
}
changeTitleColor();

const themeContainer = document.getElementById("themeContainer");
function buildThemeList() {
  const themeList = Object.entries(themes).map(
    ([name, theme]) =>
      `<span class="icon" data-theme="${name}">${theme.icon}</span>`
  );
  themeContainer.innerHTML = themeList.join("");
}
buildThemeList();

const icons = document.querySelectorAll(".icon");
const previewImg = document.querySelector("#preview>img");
let selectedTheme = Object.keys(themes)[0];
changePreview(selectedTheme)
icons.forEach((i) => i.addEventListener("click", handleChangeTheme));
function handleChangeTheme(e) {
  selectedTheme = e.target.getAttribute("data-theme");
  changePreview(selectedTheme)
}
function changePreview(theme){
  previewImg.src = `resources/${themes[theme].player}.png`;
}

const playBtn = document.getElementById("play");
playBtn.addEventListener("click", handlePlay);
function handlePlay() {
  location.href = `game.html?theme=${selectedTheme}`;
}
