const operator = document.getElementsByClassName("operator");
const CE_delete = document.getElementById("delete");
const C_deleteAll = document.getElementById("deleteAll");
const percent = document.getElementById("percent");
const plusMinus = document.getElementById("plusMinus");
const dot = document.getElementById("dot");
const equal = document.getElementById("equal").getAttribute('value');
const operators = ["+", "-", "/", "*"];

let prev = document.getElementById("last_operation_history");
let inputBox = document.getElementById("box");

let operator_value;
let last_button;
let calc_operator;
var firstNum = true;
let numbers = [];


document.querySelectorAll(".num").forEach(btn => {
    btn.addEventListener('click', (e) => {
        pressBtn(e.currentTarget.innerText);
    });
});

document.querySelectorAll(".operator").forEach(operator => {
    operator.addEventListener('click', (e) => {
        pressBtn(e.currentTarget.getAttribute('value'));
    });
});

percent.addEventListener('click', () => {

    if (numbers.length > 0 && typeof last_operator != "undefined") {
        if (last_operator == "+" || last_operator == "-") {
            inputBox.innerText = numbers * inputBox.innerText / 100
        }
        else {
            inputBox.innerText = inputBox.innerText / 100
        }
    }
    else {
        inputBox.innerText = inputBox.innerText / 100
    }
    numbers = []
    numbers.push(inputBox.innerText)

})

plusMinus.addEventListener('click', () => {
    // if any operator is already pressed
    if (typeof last_operator != "undefined") {
        if (numbers.length > 0) {
            // if last button pressed is an operator
            if (operators.includes(last_button)) {
                // if the displayed text is just a negative sign, replace it with a 0
                if (inputBox.innerText == "-") {
                    inputBox.innerText = 0
                    firstNum = true
                    return
                }
                // if the displayed text is not a just a negative sign, replace it with a negative sign
                else {
                    inputBox.innerText = "-"
                    firstNum = false
                }
            }
            // if last button pressed is not an operator, change its sign
            else {
                inputBox.innerText = -inputBox.innerText

                if (numbers.length == 1) {
                    numbers[0] = inputBox.innerText
                }
                else {
                    numbers[1] = inputBox.innerText
                }
            }
        }
        return
    }

    // if displayed text is 0, replace it with a negative sign
    if (inputBox.innerText == 0) {
        inputBox.innerText = "-"
        firstNum = false
        return
    }
    inputBox.innerText = -inputBox.innerText
});

C_deleteAll.addEventListener('click', () => {
    window.location.reload()
});

CE_delete.addEventListener('click', () => {

    if (numbers.length > 0 && typeof last_operator != "undefined") {
        inputBox.innerText = 0
        var temp = numbers[0]
        numbers = []
        numbers.push(temp)
        firstNum = true;
    }
})

function pressBtn(btn) {
    last_button = btn;

    // if button is not an operator or = sign
    if (!operators.includes(btn) && btn != equal) {

        // if it is the first button clicked
        if (firstNum) {
            // and it's a dot, show 0.
            if (btn == dot) {
                inputBox.innerText = "0" + dot
            }
            // else clear box and show the number
            else {
                inputBox.innerText = btn;
            }
            firstNum = false;
        }
        else {
            // return if the box value is 0
            if (inputBox.innerText.length == 1 && inputBox.innerText == 0) {
                if (btn == dot) {
                    inputBox.innerText += btn;
                }
                return;
            }
            // return if the box already has a dot and clicked button is a dot
            if (inputBox.innerText.includes(dot) && btn == dot) {
                return;
            }
            // maximum allowed numbers inputted are 14
            if (inputBox.innerText.length == 14) {
                return;
            }

            // if pressed dot and box already has a - sign, show -0.
            if (btn == dot && inputBox.innerText == "-") {
                inputBox.innerText = "-0" + dot;
            }
            // else append number
            else {
                inputBox.innerText += btn;
            }
        }
    }
    // if it's an operator or = sign
    else {
        if (operator_value != null && btn == operator_value) {
            return
        }
        // show minus sign if it's the first value selected and finally return
        if (btn == "-" && inputBox.innerText == 0) {
            inputBox.innerText = btn;
            firstNum = false;
            operator_value = btn

            return;
        }
        // return if minus operator pressed and it's already printed on screen 
        else if (operators.includes(btn) && inputBox.innerText == "-") {
            return
        }
        // return if minus operator pressed and history already has equal sign
        else if (btn == "-" && operator_value == "-" && last_operation_history.innerText.includes("=")) {
            return
        }

        // set value of operator if it's one
        if (operators.includes(btn)) {
            if (typeof last_operator != "undefined" && last_operator != null) {
                calc_operator = last_operator
            }
            else {
                calc_operator = btn
            }
            if (btn == "*") {
                last_operator = "×"
            }
            else if (btn == "/") {
                last_operator = "÷"
            }
            else {
                last_operator = btn
            }
            operator_value = btn
            firstNum = true
        }
        // add first number to numbers array and show it on history
        if (numbers.length == 0) {
            numbers.push(inputBox.innerText)
            if (typeof last_operator != "undefined" && last_operator != null) {
                last_operation_history.innerText = inputBox.innerText + " " + last_operator
            }
        }
        // rest of calculations
        else {
            if (numbers.length == 1) {
                numbers[1] = inputBox.innerText
            }
            var temp_num = inputBox.innerText

            // calculate total
            if (btn == equal && calc_operator != null) {
                var total = calculate(numbers[0], numbers[1], calc_operator)
                inputBox.innerText = total;

                // append second number to history
                if (!last_operation_history.innerText.includes("=")) {
                    last_operation_history.innerText += " " + numbers[1] + " "
                }

                temp_num = numbers[0]

                numbers[0] = total
                operator_value = null

                // replace first number of history with the value of total
                var history_arr = last_operation_history.innerText.split(" ")
                history_arr[0] = temp_num
                last_operation_history.innerText = history_arr.join(" ")
            }
            // update history with the value on screen and the pressed operator
            else if (calc_operator != null) {
                last_operation_history.innerText = temp_num + " " + last_operator
                calc_operator = btn
                numbers = []
                numbers.push(inputBox.innerText)
            }
        }
    }
}

function calculate(num1, num2, operator) {
    if (operator === "+") {
        total = (parseFloat)(num1) + (parseFloat)(num2)
    }
    else if (operator === "-") {
        total = (parseFloat)(num1) - (parseFloat)(num2)
    }
    else if (operator === "*") {
        total = (parseFloat)(num1) * (parseFloat)(num2)
    }
    else if (operator === "/") {
        total = (parseFloat)(num1) / (parseFloat)(num2)
    }
    else {
        if (total == inputBox.innerText) {
            return total
        }
        else {
            return inputBox.innerText
        }
    }
    // if total is not integer, show maximum 12 decimal places
    if (!Number.isInteger(total)) {
        total = total.toPrecision(12);
    }
    return parseFloat(total);
}