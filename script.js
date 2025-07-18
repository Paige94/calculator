// Initialise variables
let firstNumber = 0;
let secondNumber = 0;
let operator = '';

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

// Show clicked numbers on display
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        displayValue = displayValue + button.textContent;
        display.textContent = displayValue;
    })
})

// Recieve operator and store first number & operator inputs
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        firstNumber = displayValue;
        displayValue = '';
        display.textContent = '';
        operator = button.id;
        console.log(firstNumber);
        console.log(operator);
    })
})

// When 'equals' is clicked, get second number & perform correct calculation (needs checked)
const equalsButton = document.querySelector('.equals');

equalsButton.addEventListener('click', () => {
    if (operator != '' && firstNumber != '' && displayValue != 0) {
        secondNumber = displayValue;
        console.log(secondNumber);
        displayValue = '';
        display.textContent = '';
        displayValue = operate(operator, firstNumber, secondNumber);
        display.textContent = displayValue;
    }
})

// Restart when 'clear' is clicked
const clearButton = document.querySelector('.clear');

clearButton.addEventListener('click', () => {
    displayValue = '';
    display.textContent = displayValue;
    operator = '';
    firstNumber = 0;
    secondNumber = 0;
})