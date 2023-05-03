import themes from "./themes.js";
const title = document.querySelector(".title");

setInterval(() => {
  const color = ((Math.random() * 0xffffff) << 0).toString(16);
  title.style.color = `#${color}`;
}, 200);

const icons = document.querySelectorAll(".icon");
const imageToChange = document.querySelector(".imageToChange");

icons.forEach((i) => {
  i.addEventListener("click", function (event) {
    const dataTheme = event.target.getAttribute("data-theme");
    imageToChange.src = `resources/${themes[dataTheme].player}.png`;
  });
});
