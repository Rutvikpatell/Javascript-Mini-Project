let count = 0;
let counter = document.querySelector('.counter');
let btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const buttonClass = e.currentTarget.classList;
        if (buttonClass.contains("increase")) {
            count++;
            counter.textContent = count;
        } else if (buttonClass.contains("decrease")) {
            count--;
            counter.textContent = count;
        } else {
            count = 0;
            counter.textContent = count;
        } if (count > 0) {
            document.body.style.color = "green";
        } else if (count < 0) {
            document.body.style.color = "red";
        } else {
            document.body.style.color = "black";
        }
    })
})
