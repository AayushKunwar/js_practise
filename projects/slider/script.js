const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slide-btn-left");
const btnRight = document.querySelector(".slide-btn-right");
const dotContainer = document.querySelector(".dots");

let curSlide = 0;
const maxSlide = slides.length;

slides.forEach((s, i) => {
	s.style.transform = `translateX(${i * 100}%)`;
});

const goToSlide = (slide) => {
	slides.forEach((s, i) => {
		s.style.transform = `translateX(${100 * (i - curSlide)}%)`;
	});
	updateDots();
};

const createDots = () => {
	slides.forEach((_, i) => {
		dotContainer.insertAdjacentHTML(
			"beforeend",
			`<button class="dot" data-slide="${i}"></button>`
		);
	});
};
createDots();

const updateDots = () => {
	dots = dotContainer.querySelectorAll(".dot");
	dots.forEach((x) => {
		x.style.backgroundColor = "grey";
	});
	dots[curSlide].style.backgroundColor = "white";
};
updateDots();

const nextSlide = function () {
	if (curSlide === maxSlide - 1) {
		curSlide = 0;
	} else {
		curSlide++;
	}
	goToSlide(curSlide);
};

const prevSlide = function () {
	if (curSlide === 0) {
		curSlide = maxSlide - 1;
	} else {
		curSlide--;
	}
	goToSlide(curSlide);
};

// Next slide
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
	if (e.key === "ArrowLeft") prevSlide();
	e.key === "ArrowRight" && nextSlide();
});

dotContainer.addEventListener("click", (e) => {
	if (!e.target.classList.contains("dot")) return;
	const { slide } = e.target.dataset;
	curSlide = +slide;
	goToSlide();
});

// after the html and js are loaded and executed
document.addEventListener("DOMContentLoaded", (e) => {
	console.log("HTML and JS loaded");
});

// after everything is fully loaded
window.addEventListener("load", (e) => {
	console.log("page fully loaded");
});

// alert ? before closing website
window.addEventListener("beforeunload", function (e) {
	e.preventDefault();
	alert("you are closing");
	e.returnValue = "message";
});
