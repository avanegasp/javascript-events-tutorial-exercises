window.onload = function loadFn() {
	let containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
		// Your code here
		let text = event.currentTarget.tagName;
		document.getElementById("btn1").innerHTML = text;
		alert("id = btn1 objetivo")
		
	});
};
