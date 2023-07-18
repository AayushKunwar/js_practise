"use strict";

const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
	{
		question: "what is 9 + 10",
		choice1: "910",
		choice2: "10",
		choice3: "21",
		choice4: "19",
		answer: 3,
	},
	{
		question: "what is the meaning of the universe",
		choice1: "911",
		choice2: "69",
		choice3: "420",
		choice4: "42",
		answer: 4,
	},
	{
		question: "what type of language is javascript?",
		choice1: "Object oriented",
		choice2: "linear bounded automata",
		choice3: "Functional",
		choice4: "Object based",
		answer: 4,
	},
	{
		question: "Where was buddha born?",
		choice1: "Option 1",
		choice2: "Nepal",
		choice3: "India",
		choice4: "Option 4",
		answer: 2,
	},
];

const SCORE_POINTS = Math.floor(Math.random() * 10);
const MAX_QUESTIONS = 4;

const startGame = () => {
	questionCounter = 0;
	score = 0;
	availableQuestions = [...questions];
	getNewQuestion();
};

const getNewQuestion = () => {
	if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
		localStorage.setItem("mostRecentScore", score);
		return window.location.assign("./end.html");
	}
	questionCounter++;
	progressText.innerHTML = `Questions ${questionCounter} of ${MAX_QUESTIONS}`;
	progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

	const questionIndex = Math.floor(Math.random() * availableQuestions.length);

	currentQuestion = availableQuestions[questionIndex];

	question.innerText = currentQuestion.question;
	choices.forEach((choice) => {
		const number = choice.dataset["number"];
		choice.innerText = currentQuestion["choice" + number];
	});

	availableQuestions.splice(questionIndex, 1);

	acceptingAnswers = true;
};

choices.forEach((choice) => {
	choice.addEventListener("click", (e) => {
		if (!acceptingAnswers) return;
		acceptingAnswers = false;
		const selectedChoice = e.target;
		const selectedAnswer = selectedChoice.dataset["number"];

		let classToApply =
			selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
		if (classToApply === "correct") {
			incrementScore(SCORE_POINTS);
		}

		selectedChoice.parentElement.classList.add(classToApply);

		setTimeout(() => {
			selectedChoice.parentElement.classList.remove(classToApply);
			getNewQuestion();
		}, 1000);
	});
});

const incrementScore = (num) => {
	score += num;
	scoreText.innerText = score;
};

startGame();
