function showTime() {
	const mainTime = document.querySelector(".time");
	let date = new Date();
	let hh = date.getHours();
	let mm = date.getMinutes();
	let ss = date.getSeconds();
	let session = "AM";

	if (hh == 0) {
		hh = 12;
	}
	if (hh > 12) {
		hh = hh - 12;
		session = "PM";
	}
	hh = hh < 10 ? "0" + hh : hh;
	mm = mm < 10 ? "0" + mm : mm;
	ss = ss < 10 ? "0" + ss : ss;

	let time = hh + ":" + mm + ":" + ss + " " + session;

	mainTime.textContent = time;
	showResult();
}
function showResult() {
	const result = document.querySelector(".result");
	let date = new Date();
	let hh = date.getHours();
	let mm = date.getMinutes();

	// 1st class start
	if (hh < 11) {
		result.textContent = `Time until classes: ${11 - hh}:${Math.abs(
			60 - mm
		)}`;
	}
	// during 1st class
	else if (hh < 12 || (hh == 12 && mm <= 30)) {
		result.textContent = `1st class ends in ${12 - hh}:${Math.abs(
			30 - mm
		)}`;
	}
	// during class break
	else if (hh == 12 && mm < 35) {
		result.textContent = `time until 2nd class: ${12 - hh}:${35 - mm}`;
	}
	// during 2nd class
	else if (hh < 13 && hh == 13 && mm < 5) {
		result.textContent = `2nd class ends in ${13 - hh}:${Math.abs(5 - mm)}`;
	} else if (hh == 13 && mm < 35) {
		result.textContent = `Break ends in ${35 - mm} minutes`;
	} else if (hh < 15 || (hh == 15 && mm < 05)) {
		result.textContent = `3rd class ends in ${15 - hh}:${Math.abs(5 - mm)}`;
	} else {
		result.textContent = `End of day`;
	}
}
setInterval(showTime, 1000);
