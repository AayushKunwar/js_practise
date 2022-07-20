const list = document.querySelector("ul");

console.log(list);

document.querySelector(".add-list").addEventListener("click", function () {
	const text = document.querySelector("#text");
	const li = document.createElement("li");
	if (text.value === "") {
		return;
	}
	li.appendChild(document.createTextNode(text.value));
	list.appendChild(li);
	text.value = "";
});
