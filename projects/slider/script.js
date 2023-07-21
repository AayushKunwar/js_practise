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
};

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
