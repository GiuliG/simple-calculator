
function getHistory() {
    return document.getElementById('history-value').innerText;
}

//check whether you are getting the history
//alert(getHistory())

function printHistory(num) {
    return document.getElementById('history-value').innerText = num;
}

// print the number in the display
//printHistory('9*9')

function getOutput() {
    return document.getElementById('output-value').innerText;
}

//alert(printOutput());

function printOutput(num) {
    if (num == "") {
        return document.getElementById('output-value').innerText = num;
    } else {
        return document.getElementById('output-value').innerText = getFormattedNumber(num);
    }
}

function getFormattedNumber(num) {
    if (num == "-") {
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value
}

//printOutput('12000')

//revert the number so you can do the operations
function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ''));
}
//console.log((reverseNumberFormat(getOutput())))

var operator = document.getElementsByClassName('operator')

for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        //alert('operator was clicked')
        if (this.id == "clear") {
            printOutput("");
            printHistory("")
        }
        else if (this.id == "backspace") {
            var output = reverseNumberFormat(getOutput()).toString();
            if (output) {
                //if output has a value
                output = output.substr(0, output.length - 1);
                printOutput(output);
            }
        } else {
            var output = getOutput();
            var history = getHistory();
            if (output == "" && history != "") {
                if (isNaN(history[history.length - 1])) {
                    history = history.substr(0, history.length - 1);
                }

            }
            if (output != "" || history != "") {
                //contidion? true:false
                output = output == "" ? output : reverseNumberFormat(output);
                history = history + output
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

var numbers = document.getElementsByClassName('number')
for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function () {
        //alert('number '+ this.id)
        var output = reverseNumberFormat(getOutput())
        if (output != NaN) {
            output = output + this.id;
            printOutput(output);
            //printHistory(output)
        }
    })
}