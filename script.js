var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var randomBtn = document.querySelector(".random");

css.textContent = "linear-gradient" + "(to right, rgb(255, 0, 0), rgb(255, 204, 0))";

function random(){
	var randomArr = [];
	for (var i =0; i<6; i++){
		var randomValue = Math.floor(Math.random()*256);
		randomArr.push(randomValue);
	}
	randomColor = "linear-gradient(to right, rgb(" + randomArr[0] + ", " + randomArr[1] + ", " + randomArr[2] + "), rgb(" + randomArr[3] + "," + randomArr[4] + ", " + randomArr[5] + "))";
	body.style.background = randomColor;
	css.textContent = randomColor;
}

function setGradient(){
	body.style.background = "linear-gradient" + "(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background+";";
}

color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);

randomBtn.addEventListener("click",random)