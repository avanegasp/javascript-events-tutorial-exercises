window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	// Some code here
	
};

// The listener function here
const button = document.getElementById("theGreen")

function action(){
	alert("woohoo!")
}

button.addEventListener("click", action)