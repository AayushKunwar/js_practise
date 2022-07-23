"use strict";

const btns = document.querySelectorAll(".btn");
const score = document.querySelector(".score");
const time = document.querySelector(".time");

for (let i of btns) {
	i.addEventListener("click", function () {
		start();
		click(i);
	});
}
// this function gets executed once per game
// closure for startIt func
let start = (function () {
	let executed = false;
	return function () {
		if (executed) {
			return;
		}
		executed = true;
		startIt();
	};
})();

function startIt() {
	time.textContent = 5;
	let timer = setInterval(function () {
		time.textContent--;
		if (time.textContent <= 0) {
			clearInterval(timer);
			endGame();
		}
	}, 1000);
}
function click(i) {
	if (i.classList.contains("select")) {
		updateScore();
		nextStep(i);
	}
}

function updateScore() {
	score.textContent++;
}

function nextStep(i) {
	i.classList.remove("select");
	let rnd = Math.trunc(Math.random() * 9);
	console.log(rnd);
	btns[rnd].classList.add("select");
}
function endGame() {
	// cound make something fancy but alert does job
	alert(`Your score is ${score.textContent}`);
	location.reload();
}
