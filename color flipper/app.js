let colors = ['green', 'red', 'yellow', 'purple', 'pink', 'orange', 'tomato', 'mediumpurple', 'hotpink', 'thistle'];
let btn = document.querySelector(".click-btn");
let color = document.querySelector(".bgcolor");


btn.addEventListener('click', function () {
    randomNum = getRandomNum();
    document.body.style.backgroundColor = colors[randomNum];
    color.textContent = colors[randomNum];
})

function getRandomNum() {
    return Math.floor(Math.random() * colors.length);
}



