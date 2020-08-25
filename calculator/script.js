function getOutput() {
    return document.getElementById('output-value').innerText;
}
function printOutput(num) {
    document.getElementById('output-value').innerText = formatNumber(num);
}

function getHistory() {
    return document.getElementById('history-value').innerText;
}
function printHistory(num) {
    document.getElementById('history-value').innerText = num;
}

function formatNumber(num) {
    var n = Number(num);
    var val = n.toLocaleString();
    return val;
}
function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ''));
}
var number = document.getElementsByClassName('number');
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        var output = reverseNumberFormat(getOutput()).toString();
        if (output != NaN) {
            output = output + this.id;
            printOutput(output);
        }
    });
}

var operator = document.getElementsByClassName('operator');
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        if (this.id == "clear") {
            printOutput("");
            printHistory("");
        }
        else if (this.id == "backspace") {
            var output = reverseNumberFormat(getOutput()).toString();
            if (output) {
                output = output.substr(0, output.length - 1);
                printOutput(output);
            }
        }
        else {
            var output = getOutput();
            var history = getHistory();
            if (output != "") {
                output = reverseNumberFormat(output);
                history = history + output;
                if (this.id == "=") {
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }

        }
    })
}