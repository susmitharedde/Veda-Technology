// Get the display
const display = document.getElementById("display");

// Variables
let firstNumber = "";
let secondNumber = "";
let operator = "";
let waitingForSecondNumber = false;

// Append numbers
function appendNumber(number) {

    if (display.value === "0" || waitingForSecondNumber) {
        display.value = number;
        waitingForSecondNumber = false;
    } else {
        display.value += number;
    }

}

// Append decimal
function appendDecimal() {

    if (waitingForSecondNumber) {
        display.value = "0.";
        waitingForSecondNumber = false;
        return;
    }

    if (!display.value.includes(".")) {
        display.value += ".";
    }

}

// Choose operator
function chooseOperator(op) {

    firstNumber = parseFloat(display.value);
    operator = op;
    waitingForSecondNumber = true;

}

// Calculate result
function calculateResult() {

    secondNumber = parseFloat(display.value);

    let result;

    switch (operator) {

        case "+":
            result = firstNumber + secondNumber;
            break;

        case "-":
            result = firstNumber - secondNumber;
            break;

        case "*":
            result = firstNumber * secondNumber;
            break;

        case "/":

            if (secondNumber === 0) {
                display.value = "Cannot divide by zero";
                resetCalculator();
                return;
            }

            result = firstNumber / secondNumber;
            break;

        default:
            return;
    }

    display.value = result;

    firstNumber = result;
    operator = "";
    waitingForSecondNumber = true;

}

// Clear display
function clearDisplay() {

    display.value = "0";
    resetCalculator();

}

// Backspace
function deleteLast() {

    if (display.value === "Cannot divide by zero") {
        clearDisplay();
        return;
    }

    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "0";
    }

}

// Reset variables
function resetCalculator() {

    firstNumber = "";
    secondNumber = "";
    operator = "";
    waitingForSecondNumber = false;

}