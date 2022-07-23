const list = document.querySelector("ul");
const closeBtns = document.querySelectorAll(".close");

document.querySelector(".add-list").addEventListener("click", function () {
	const text = document.querySelector("#text");
	if (text.value === "") {
		return;
	}

	addListItem(text);
});

function addListItem(text) {
	const li = document.createElement("li");
	const liDiv = document.createElement("div");
	const closeBtn = document.createElement("span");

	closeBtn.classList.add("close");
	closeBtn.appendChild(document.createTextNode("\u00D7"));
	liDiv.classList.add("list-item");
	liDiv.appendChild(document.createTextNode(text.value));
	liDiv.appendChild(closeBtn);
	li.appendChild(liDiv);
	list.appendChild(li);
	text.value = "";

	closeBtn.onclick = function () {
		li.remove();
	};

	li.onclick = function () {
		li.classList.toggle("checked");
	};
}
