const colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.querySelector(".click-btn");
const textColor = document.querySelector(".bgcolor");


btn.addEventListener('click', function () {
    let hex = "#";
    for (i = 0; i < 6; i++) {
        let randomNum = getRandomNum();
        hex += colors[randomNum];
    }
    document.body.style.backgroundColor = hex;
    textColor.textContent = hex;
})

function getRandomNum() {
    return Math.floor(Math.random() * colors.length);
}