let counter = document.querySelector('.counter');
let btn_increase = document.querySelector('.increase');
let btn_decrease = document.querySelector('.decrease');
let btn_reset = document.querySelector('.reset');

let count = 0;

btn_increase.addEventListener('click', function () {
    count = count + 1;
    counter.textContent = count;
})

btn_reset.addEventListener('click', function () {
    count = 0;
    counter.textContent = count;
})

btn_decrease.addEventListener('click', function () {
    count = count - 1;
    counter.textContent = count;
})