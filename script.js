    // Clear 'active' operator colour
    function clearOperatorColour () {
        operatorButtons.forEach((button) => {
        button.style.backgroundColor = 'lightgray';
    })
}

// Initialise variables
let firstNumber = 0;
let secondNumber = 0;
let operator = '';
let nextOperator = '';

const display = document.querySelector('.display');
let displayValue = '';

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

// Perform correct calculation
function operate(operator, firstNumber, secondNumber) {
    if (operator === 'add') {
        displayValue = +firstNumber + +secondNumber;
    }
        if (operator === 'subtract') {
        displayValue = firstNumber - secondNumber;
    }
        if (operator === 'multiply') {
        displayValue = firstNumber * secondNumber;
    }
        if (operator === 'divide') {
        displayValue =  firstNumber / secondNumber;
    }
    console.log(displayValue);
    return displayValue;
}

// Show clicked numbers on display & record second number
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        displayValue = displayValue + button.textContent;
        display.textContent = displayValue;
        if (operator !='' && firstNumber !='' && displayValue !='') {
            secondNumber = displayValue;
            console.log("second number is " + secondNumber);
            clearOperatorColour();
        }
    })
})

// Recieve operator and store first number & operator inputs
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
    // If second operator pressed before first two numbers calculated, do calculation & store second operator
    if (operator != '' && firstNumber != '' && displayValue != '') {
        nextOperator = button.id;
        console.log("next operator is " + nextOperator);
        displayValue = operate(operator, firstNumber, secondNumber);
        display.textContent = displayValue;
        firstNumber = displayValue;
        console.log("first number is " + firstNumber);
        operator = nextOperator;
        console.log("operator is " + operator);
        displayValue = '';
    } else if (operator != '') {
        operator = button.id;
    } else {
        firstNumber = displayValue;
        console.log("first number is " + firstNumber);
        operator = button.id;
        console.log("operator is " + operator);
        displayValue = '';
    }
    clearOperatorColour();
    button.style.backgroundColor = 'gray';
    })
})

// When 'equals' is clicked, get second number & perform correct calculation
const equalsButton = document.querySelector('.equals');

equalsButton.addEventListener('click', () => {
    if (operator != '' && firstNumber != '' && displayValue != '') {
        secondNumber = displayValue;
        console.log("second number is " + secondNumber);
        displayValue = '';
        display.textContent = '';
        displayValue = operate(operator, firstNumber, secondNumber);
        display.textContent = displayValue;
        firstNumber = 0;
    }
    clearOperatorColour();
 })

// Clear everything when 'clear' is clicked
const clearButton = document.querySelector('.clear');

clearButton.addEventListener('click', () => {
    displayValue = '';
    display.textContent = displayValue;
    operator = '';
    firstNumber = 0;
    secondNumber = 0;
    clearOperatorColour();
})