function getOutput() {
    return document.getElementById('output-value').innerText;
}
function printOutput(num) {
    document.getElementById('output-value').innerText = getFormatedNumber(num);
}
function getHistory() {
    return document.getElementById('history-value').innerText;
}
function printHistory(num) {
    document.getElementById('history-value').innerText = num;
}


function getFormatedNumber(num) {
    if (num == "-") {
        return "";
    }
    var n = Number(num);
    var val = n.toLocaleString("en");
    return val;
}

function reverseFormatedNumber(num) {
    return Number(num.replace(/,/g, ''));
}

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        var output = reverseFormatedNumber(getOutput()).toString();
        if (output != NaN) { //if output is a number
            output = output + this.id;
            printOutput(output);
        }
    });
}

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        if (this.id == "clear") {
            printOutput("");
            printHistory("");
        }
        else if (this.id == "backspace") {
            var output = reverseFormatedNumber(getOutput()).toString();
            if (output) {
                output = output.substr(0, output.length - 1);
                printOutput(output);
            }
        }
        else {
            var output = getOutput();
            var history = getHistory();
            if (output != "") {
                output = reverseFormatedNumber(output);
                history = history + output;
                if (this.id == "=") {
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                } else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}
