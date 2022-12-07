function add(a, b) {
	// reset numbers
	// firstNum = undefined;
	// secondNum = undefined;
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
	let result = operator(a, b);
	populateDisplay(result);
    clearAfterFirst = true;
	console.log(`the result ${result}`);
	return result;
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
//function buttons
const clear = document.querySelector('#clear');
const addButton = document.querySelector('#addButton');
const equalButton = document.querySelector('#equalButton');
const subtractButton = document.querySelector('#subtractButton');

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
clear.addEventListener('click', clearDisplay);
addButton.addEventListener('click', storeAdd);
subtractButton.addEventListener('click', storeSubtract);
equalButton.addEventListener('click', getEquality);

// ---- FUNCTIONS ----
//store display value
let displayValue;
let firstNum;
let secondNum;
let operator;
let clearAfterFirst;

function populateDisplay(num) {
	displayText.textContent += num;
	displayValue = displayText.textContent;
	console.log(`Display value: ${displayValue}`);
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

function storeAdd() {
	firstNum = +displayValue;
	operator = 'add';
	clearAfterFirst = true;
}

function storeSubtract() {
	firstNum = +displayValue;
	operator = 'subtract';
	clearAfterFirst = true;
}

function getEquality() {
	secondNum = +displayValue;
	clearDisplay();
	if (operator === 'add') {
        console.log(`operator: ${operator}, first number: ${firstNum}, second ${secondNum} `)
		operate(add, firstNum, secondNum);
	} else if (operator === 'subtract') {
        console.log(`operator: ${operator}, first number: ${firstNum}, second ${secondNum} `)
		operate(subtract, firstNum, secondNum);
	}
}

// console.log(operate(add, 1, 2));
// console.log(operate(subtract, 1, 2));
// console.log(operate(multiply, 1, 2));
// console.log(operate(divide, 1, 2));
