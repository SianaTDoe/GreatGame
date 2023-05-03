import themes from "./themes.js"
const title = document.querySelector('.title');

setInterval(() => {
   const color = (Math.random() * 0xffffff << 0).toString(16);
   title.style.color = `#${color}`;
}, 200)
