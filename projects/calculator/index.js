"use strict";

const btn = document.querySelectorAll(".cell");
const display = document.querySelector(".display");
let userInput = "";

for (let x of btn) {
	x.addEventListener("click", function () {
		if (x.textContent === "C") {
			userInput = "";
			updateDisplay("0");
			return;
		}
		if (x.textContent === " = ") {
			showAns();
			return;
		}
		userInput += x.textContent;
		updateDisplay();
	});
}

function showAns() {
	try {
		let result = Function("return " + userInput);
		updateDisplay(result());
		userInput = result();
	} catch {
		updateDisplay("error");
		userInput = "";
	}
}

function updateDisplay(foo = userInput) {
	display.textContent = foo;
}
