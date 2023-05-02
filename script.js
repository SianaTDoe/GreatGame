

let redPanda = document.querySelector('.redPanda');

// Switch Red Panda
document.addEventListener('keydown', function(event) {
    if(event.key === "ArrowRight") {
        redPanda.style.transform = 'rotateY(0)';
    } else {
        redPanda.style.transform = 'rotateY(180deg)';
    }
})

// Generate Apples 
function apple() {

}