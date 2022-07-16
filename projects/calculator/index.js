"use strict";

const btn = document.querySelectorAll(".cell");
const display = document.querySelector(".display");
let userInput = "";

for (let x of btn) {
	x.addEventListener("click", function () {
		if (x.textContent === "C") {
			userInput = "";
			updateDisplay("0");
			console.log(userInput);
			return;
		}
		if (x.textContent === " = ") {
			console.log("= used");
			showAns();
			return;
		}
		userInput += x.textContent;
		console.log(userInput);
		updateDisplay();
	});
}

function showAns() {
	try {
		let result = Function("return " + userInput);
		console.log(result());
		updateDisplay(result());
		userInput = result();
	} catch {
		console.log("Error");
		updateDisplay("error");
		userInput = "";
	}
}

function updateDisplay(foo = userInput) {
	display.textContent = foo;
}
