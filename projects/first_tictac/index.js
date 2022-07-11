"use strict";

const btns = document.querySelectorAll("button");

let currPlayer = "X";
startGame();

function startGame() {
	//initialize (resetting)
	for (let x of btns) {
		x.textContent = "";
		x.classList.remove("classX", "classO");
	}
	// main loop
	for (let x of btns) {
		x.addEventListener("click", function () {
			if (x.textContent !== "") {
				console.log(x.textContent);
				alert(`${x.textContent} exists moron`);
				return;
			} else {
				x.textContent = currPlayer;
			}
			//console.log(x);
			updateBoard();
			checkForEnd();
			changePlayer();
		});
	}
}

function updateBoard() {
	for (let x of btns) {
		if (x.textContent === currPlayer) {
			x.classList.add(`class${currPlayer}`);
		}
	}
}
function changePlayer() {
	currPlayer === "X" ? (currPlayer = "O") : (currPlayer = "X");
	document.querySelector("p").innerHTML = `${currPlayer} turn`;
}
function checkForEnd() {
	//checking columns
	for (let x = 0; x < 3; x++) {
		if (
			btns[x].textContent === currPlayer &&
			btns[x + 3].textContent === currPlayer &&
			btns[x + 6].textContent === currPlayer
		) {
			alert(`${currPlayer} won`);
			location.reload();
		}
	}
	//checking rows
	for (let x = 0; x < 7; x += 3) {
		if (
			btns[x].textContent === currPlayer &&
			btns[x + 1].textContent === currPlayer &&
			btns[x + 2].textContent === currPlayer
		) {
			alert(`${currPlayer} won`);
			location.reload();
		}
	}
	// checking primary diagonal

	if (
		btns[0].textContent === currPlayer &&
		btns[4].textContent === currPlayer &&
		btns[8].textContent === currPlayer
	) {
		alert(`${currPlayer} won`);
		location.reload();
	}
	// checking other diagonal

	if (
		btns[2].textContent === currPlayer &&
		btns[4].textContent === currPlayer &&
		btns[6].textContent === currPlayer
	) {
		alert(`${currPlayer} won`);
		location.reload();
	}

	//check if everything if filled
	for (let x of btns) {
		if (x.textContent === "") {
			return;
		}
	}
	alert(`nobody won`);
	location.reload();
}
