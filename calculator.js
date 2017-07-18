let buttons = document.getElementsByTagName('button');
let result = 0;
let resultFrame = document.getElementById('result');
let operation = '';
let equalsButton = document.getElementById('equals');

function getOperation() {
	operation = this.id;
	console.log(operation);
}

function calculate() {
	let num1 = parseInt(document.getElementById('num1').value);
	let num2 = parseInt(document.getElementById('num2').value);
	if (operation === 'add') {
		result = num1 + num2;
	} else if (operation === 'sub') {
		result = num1 - num2;
	} else if (operation === 'mult') {
		result = num1 * num2;
	} else {
		result = num1 / num2;
	}
	resultFrame.innerText = result.toFixed(4);
}

for (let i = 0; i < buttons.length - 1; i++) {
	buttons[i].addEventListener('click', getOperation);
}
equalsButton.addEventListener('click', calculate);