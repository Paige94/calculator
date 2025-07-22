// Clear 'active' operator colour
 function clearOperatorColour () {
    operatorButtons.forEach((button) => {
    button.style.backgroundColor ='#ffb703';
    })
}

// Clear display and all values to start fresh
function clearAll () {
    displayValue = '';
    display.textContent = displayValue;
    operator = '';
    firstNumber = 0;
    secondNumber = 0;
    equalsState = false;
    clearOperatorColour();
}

// Initialise variables
let firstNumber = 0;
let secondNumber = 0;
let operator = '';
let nextOperator = '';
let equalsState = false;

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
    return Math.round(displayValue * 100) / 100;
}

// Show clicked numbers on display & record second number
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (equalsState === true) {
            clearAll();
            equalsState = false;
            console.log("equals state is " + equalsState);
        }
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
    // If equals button has been pressed, if operator is pressed then treat the equaled total as the first no.
    if (equalsState === true) {
        operator = button.id;
        firstNumber = displayValue;
        displayValue = '';
        secondNumber = 0;
        equalsState = false;
        console.log("equals state is " + equalsState);
    // If second operator button clicked before first two numbers have been calculated, do calculation & record next operator
    } else if (operator != '' && firstNumber != '' && displayValue != '') {
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
    button.style.backgroundColor = '#fb8500';
    })
})

// When 'equals' button is clicked perform correct calculation
const equalsButton = document.querySelector('.equals');

equalsButton.addEventListener('click', () => {
    if (operator != '' && firstNumber != '' && displayValue != '') {
        displayValue = '';
        display.textContent = '';
        displayValue = operate(operator, firstNumber, secondNumber);
        display.textContent = displayValue;
        firstNumber = 0;
    }
    clearOperatorColour();
    equalsState = true;
    console.log("equals state is " + equalsState);
 })

// Clear everything when 'clear' button is clicked
const clearButton = document.querySelector('.clear');

clearButton.addEventListener('click', () => {
    clearAll ();
})