let result;

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function operate(operator, a, b) {
	result = operator(a, b);
	populateDisplay(result);
	clearAfterFirst = true;
}

// console.log(operate(add, 4, 5))

// ----- DIGITS -----

const displayText = document.querySelector('#display-text');

// ---- HANDLES ----
//digits
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
//operator buttons
const clear = document.querySelector('#clear');
const addButton = document.querySelector('#addButton');
const subtractButton = document.querySelector('#subtractButton');
const multiplyButton = document.querySelector('#multiplyButton');
const divideButton = document.querySelector('#divideButton');
const equalButton = document.querySelector('#equalButton');

// ---- LISTENERS ----
//digits
one.addEventListener('click', function () {
	cleanAfterFirstNum();
	populateDisplay(1);
});
two.addEventListener('click', function () {
	cleanAfterFirstNum();
	populateDisplay(2);
});
three.addEventListener('click', function () {
	cleanAfterFirstNum();
	populateDisplay(3);
});
four.addEventListener('click', function () {
	cleanAfterFirstNum();
	populateDisplay(4);
});
five.addEventListener('click', function () {
	cleanAfterFirstNum();
	populateDisplay(5);
});
six.addEventListener('click', function () {
	cleanAfterFirstNum();
	populateDisplay(6);
});
seven.addEventListener('click', function () {
	cleanAfterFirstNum();
	populateDisplay(7);
});
eight.addEventListener('click', function () {
	cleanAfterFirstNum();
	populateDisplay(8);
});
nine.addEventListener('click', function () {
	cleanAfterFirstNum();
	populateDisplay(9);
});
zero.addEventListener('click', function () {
	cleanAfterFirstNum();
	populateDisplay(0);
});
//function buttons
clear.addEventListener('click', function () {
	clearDisplay();
	clearNumbers();
});
addButton.addEventListener('click', storeAdd);
subtractButton.addEventListener('click', storeSubtract);
multiplyButton.addEventListener('click', storeMultiply);
divideButton.addEventListener('click', storeDivide);
equalButton.addEventListener('click', getEquality);

// ---- FUNCTIONS ----
//store display value
let displayValue;
let firstNum;
let secondNum;
let operator;
let clearAfterFirst;

//display functions
function populateDisplay(num) {
	displayText.textContent += num;
	displayValue = displayText.textContent;
	// console.log(`Display value: ${displayValue}`);
}

function clearDisplay() {
	displayText.textContent = '';
}

function cleanAfterFirstNum() {
	if (clearAfterFirst === true) {
		clearDisplay();
		clearAfterFirst = false;
	}
}

function clearNumbers() {
	firstNum = undefined;
	secondNum = undefined;
}

//operators functions  + - * /
function storeAdd() {
	if (typeof firstNum == 'number' && typeof secondNum == 'number') {
		getEquality();
	} else if (firstNum === undefined) {
		firstNum = +displayValue;
		operator = 'add';
		clearAfterFirst = true;
	} else {
		secondNum = +displayValue;
		operator = 'add';
		clearAfterFirst = true;
		getEquality();
	}
}

function storeSubtract() {
	if (firstNum === undefined) {
		firstNum = +displayValue;
		operator = 'subtract';
		clearAfterFirst = true;
	} else {
		secondNum = +displayValue;
		operator = 'subtract';
		clearAfterFirst = true;
		clearDisplay();
		operate(subtract, firstNum, secondNum);
	}
}

function storeMultiply() {
	firstNum = +displayValue;
	operator = 'multiply';
	clearAfterFirst = true;
}

function storeDivide() {
	firstNum = +displayValue;
	operator = 'divide';
	clearAfterFirst = true;
}

function getEquality() {
	// secondNum = +displayValue;
	clearDisplay();
	if (operator === 'add') {
		operate(add, firstNum, secondNum);
	} else if (operator === 'subtract') {
		operate(subtract, firstNum, secondNum);
	} else if (operator === 'multiply') {
		operate(multiply, firstNum, secondNum);
	} else if (operator === 'divide') {
		operate(divide, firstNum, secondNum);
	}
	firstNum = undefined;
	secondNum = result;
}

// reset numbers
// firstNum = result;
// secondNum = undefined;
// console.log(`operator: ${operator}, first number: ${firstNum}, second ${secondNum} `)
// console.log(operate(add, 1, 2));
// console.log(operate(subtract, 1, 2));
// console.log(operate(multiply, 1, 2));
// console.log(operate(divide, 1, 2));
