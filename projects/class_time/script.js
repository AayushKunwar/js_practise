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
	let result;
	let date = new Date();
	let hh = date.getHours();
	let mm = date.getMinutes();

	clearTask();
	// 1st class start
	if (hh < 11) {
		result = `Time until classes: ${timeUntil(11, 00)}`;
		addList(result);
	}
	// during 1st class
	if (hh < 12 || (hh == 12 && mm <= 30)) {
		result = `1st class ends in ${timeUntil(12, 30)}`;
		addList(result);
	}
	// during class break, this is an exception sometimes
	else if (hh == 12 && mm < 35) {
		result = `Time until 2nd class: ${timeUntil(12, 35)}`;
		addList(result);
	}
	// during 2nd class
	if (hh < 14 || (hh == 14 && mm < 5)) {
		result = `2nd class ends in ${timeUntil(14, 05)}`;
		addList(result);
	}
	// lunch break
	if (hh < 13 || (hh == 13 && mm < 35)) {
		result = `Break ends in ${timeUntil(14, 35)} `;
		addList(result);
	}
	// during 3rd class
	if (hh < 16 || (hh == 16 && mm < 05)) {
		result = `3rd class ends in ${timeUntil(16, 05)}`;
		addList(result);
	} else {
		result = `End of day`;
		addList(result);
	}
}

const list = document.querySelector("ul");

function timeUntil(hr, min, sec = 60) {
	let date = new Date();
	let hh = date.getHours();
	let mm = date.getMinutes();
	// let ss = date.getSeconds();
	// if (sec - ss < -1) {
	// 	min--;
	//sec += 60;
	// }
	if (min - mm < 0) {
		hr--;
		min += 60;
	}
	return hr - hh + ":" + Math.abs(min - mm); // + ":" + Math.abs(sec - ss);
}

function addList(text) {
	const li = document.createElement("li");
	li.appendChild(document.createTextNode(text));
	list.appendChild(li);
}

function clearTask() {
	list.innerHTML = "";
}

setInterval(showTime, 1000);
