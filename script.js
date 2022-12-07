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
	return operator(a, b);
}

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

// ---- LISTENERS ----
//digits
one.addEventListener('click', function () {
	populateDisplay(1);
});
two.addEventListener('click', function () {
	populateDisplay(2);
});
three.addEventListener('click', function () {
	populateDisplay(3);
});
four.addEventListener('click', function () {
	populateDisplay(4);
});
five.addEventListener('click', function () {
	populateDisplay(5);
});
six.addEventListener('click', function () {
	populateDisplay(6);
});
seven.addEventListener('click', function () {
	populateDisplay(7);
});
eight.addEventListener('click', function () {
	populateDisplay(8);
});
nine.addEventListener('click', function () {
	populateDisplay(9);
});
zero.addEventListener('click', function () {
	populateDisplay(0);
});
//function buttons
clear.addEventListener('click', clearDisplay);
addButton.addEventListener('click', storeAdd);

// ---- FUNCTIONS ----
//store display value
let displayValue;
let firstNum;
let operator;

function populateDisplay(num) {
	displayText.textContent += num;
	displayValue = displayText.textContent;
	console.log(displayValue);
}

function clearDisplay() {
	displayText.textContent = '';
}

function storeAdd() {
firstNum = displayValue;
operator = '+';
console.log(firstNum, operator)
}

// function storeOperator() {

// };

// console.log(operate(add, 1, 2));
// console.log(operate(subtract, 1, 2));
// console.log(operate(multiply, 1, 2));
// console.log(operate(divide, 1, 2));
