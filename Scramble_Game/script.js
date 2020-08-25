const msg = document.querySelector(".msg");
const guess = document.querySelector("input");
const btn = document.querySelector(".btn");
let play = false;
let words = ['apple', 'banana', 'mango', 'cherry', 'pineapple', 'orange', 'strawberry', 'lemon', 'graps', 'watermilon', 'rasberry'];
let newWord = "";
let sWords = "";

btn.addEventListener('click', function () {
    if (!play) {
        play = true;
        btn.innerText = "Guess!";
        guess.classList.toggle('hidden');
        newWord = getNewWords();
        sWords = getSWords(newWord.split(''));
        sWords = sWords.join("");
        msg.innerHTML = sWords;
    } else {
        let userWord = guess.value.trim();
        if (userWord === newWord) {
            play = false;
            msg.innerHTML = "Correct Answer it is :" + newWord;
            btn.innerHTML = "Strat Again";
            guess.classList.toggle('hidden');
            guess.value = "";
        } else {
            msg.innerHTML = "oops! please, try again!" + sWords;
        }
    }
});

const getNewWords = () => {
    let i = Math.floor(Math.random() * words.length);
    let temp = words[i];
    return temp;
}
const getSWords = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let temp = arr[i];
        let j = Math.floor(Math.random() * (i + 1));
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
