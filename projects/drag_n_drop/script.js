"use strict";
const draggable_list = document.querySelector("#draggable-list");
const check = document.querySelector("#check-btn");

const richestPeople = [
	"Elon Musk",
	"Bernard Arnault & family",
	"Jeff Bezons",
	"Larry Ellison",
	"Bill Gates",
	"Warren Buffet",
	"Mark Zuckerberg",
	"Steven Ballmer",
	"Larry Page",
	"Carlos Slim Helu & family",
];

const listItems = [];

let dragStartIndex;

createList();

function createList() {
	[...richestPeople]
		.map((a) => ({ value: a, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map((a) => a.value)
		.forEach((person, index) => {
			const listItem = document.createElement("li");

			listItem.setAttribute("data-index", index);

			listItem.innerHTML = `
            <span class="number">${index + 1}</span>
            <div class="draggable" draggable="true">
            <p class="person-name">${person}</p>
            <i> = </i>
            </div>
            `;

			listItems.push(listItem);

			draggable_list.appendChild(listItem);
		});
	addEventListener();
}

function dragStart() {
	// console.log("Event:", "dragstart");
	dragStartIndex = this.closest("li").getAttribute("data-index");
	console.log(dragStartIndex);
}

function dragOver(e) {
	e.preventDefault();
	// console.log("Event:", "dragOver");
}

function dragEnter() {
	// console.log("Event:", "dragEnter");
	this.classList.add("over");
}

function dragLeave() {
	// console.log("Event:", "dragLeave");
	this.classList.remove("over");
}

function dragDrop() {
	// console.log("Event:", "dragDrop");
	const dragEndIndex = this.getAttribute("data-index");

	swapItems(dragStartIndex, dragEndIndex);
	this.classList.remove("over");
}
function swapItems(fromIndex, toIndex) {
	const itemOne = listItems[fromIndex].querySelector(".draggable");
	const itemTwo = listItems[toIndex].querySelector(".draggable");

	listItems[fromIndex].appendChild(itemTwo);
	listItems[toIndex].appendChild(itemOne);
}

function checkOrder() {
	listItems.forEach((listItem, index) => {
		const personName = listItem
			.querySelector(".draggable")
			.innerText.trim()
			.slice(0, -3);

		if (personName !== richestPeople[index]) {
			listItem.classList.add("wrong");
		} else {
			listItem.classList.remove("wrong");
			listItem.classList.add("right");
		}
	});
}

function addEventListener() {
	const draggables = document.querySelectorAll(".draggable");
	const dragListItems = document.querySelectorAll(".draggable-list li");

	draggables.forEach((draggable) => {
		draggable.addEventListener("dragstart", dragStart);
	});

	dragListItems.forEach((item) => {
		item.addEventListener("dragover", dragOver);
		item.addEventListener("drop", dragDrop);
		item.addEventListener("dragenter", dragEnter);
		item.addEventListener("dragleave", dragLeave);
	});
}

check.addEventListener("click", checkOrder);
