function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

// Initialise variables
const firstNumber = 0;
const secondNumber = 0;
const operator = 0;

// Perform correct calculation
function operate(firstNumber, operator, secondNumber) {
    return operator(firstNumber, secondNumber);
}

// Show clicked numbers on display