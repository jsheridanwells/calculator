let buttons = document.getElementsByTagName('button');
let result = 0;
let resultFrame = document.getElementById('result');
let operation = '';
let equalsButton = document.getElementById('equals');


function getOperation() {
	operation = this.id;
	console.log(operation);
}

function add(num1, num2) {
	return num1 + num2;
}

function sub(num1, num2) {
	return num1 - num2;
}

function mult(num1, num2) {
	return num1 * num2;
}

function div(num1, num2) {
	return num1 / num2;
}


function calculate() {
	let num1 = parseInt(document.getElementById('num1').value);
	let num2 = parseInt(document.getElementById('num2').value);
	if (operation = 'add') {
		result = add(num1, num2);
	} else if (operation = 'sub') {
	result = sub(num1, num2);
	} else if (operation = 'mult') {
	result = mult(num1, num2);
	} else {
	result = div(num1, num2);
	}
	resultFrame.innerText = result;
}

for (let i = 0; i < buttons.length - 1; i++) {
	buttons[i].addEventListener('click', getOperation);
}
equalsButton.addEventListener('click', calculate);

// 1.  user enters a number

// 2.  user selects an operation

// 3.  user enters a second number

// 4.  user clicks equals

// 5.  calculation is made

// 6.  result is printed

// STATUS:  some functionality, add button works first time, 
// strange behavior with other buttons and when values are at 0


