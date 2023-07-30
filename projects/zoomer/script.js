"use strict";

const div = document.querySelector(".container");
const image = document.querySelector("img");
const imageRect = image.getBoundingClientRect();
const SCALE = 3;

function fixValueBetweenRange(value, a, b) {
	const minValue = Math.min(a, b);
	const maxValue = Math.max(a, b);

	return Math.max(minValue, Math.min(maxValue, value));
}

div.addEventListener("mousemove", (e) => {
	let x = e.clientX - imageRect.left;
	let y = e.clientY - imageRect.top;
	console.log(x, y);

	// console.log(x / imageRect.width, y / imageRect.height);
	let imgX = -x + imageRect.left / 2;
	let imgY = -y + imageRect.top / 1;
	// let imgX = x;
	// let imgY = y;

	let quaterX = imageRect.width / SCALE;
	let quaterY = imageRect.height / SCALE;

	imgX = fixValueBetweenRange(imgX, quaterX, -quaterX);
	imgY = fixValueBetweenRange(imgY, quaterY, -quaterY);

	image.style.transform = `translate(${imgX}px, ${imgY}px)`;
	image.style.scale = `${SCALE}`;
});

div.addEventListener("mouseleave", (e) => {
	image.style.transform = "translate(0)";
	image.style.scale = "1";
});
