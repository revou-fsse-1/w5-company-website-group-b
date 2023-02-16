function myFunction() {
	var dark = document.getElementsByClassName("col-dark");
	var light = document.getElementsByClassName("col-light");
	var bg_dark = document.getElementsByClassName("bg-dark");
	var bg_light = document.getElementsByClassName("bg-light");
	var checkbox_color = document.getElementsByClassName("checkbox-value");
	var strengthicon = document.getElementsByClassName("strength-icon");
	var svg_light_col = document.getElementsByClassName("svg-light-col");

	if (document.getElementById("toggle").checked) {
		for (let i = 0; i < dark.length; i++) {
			dark[i].style.color = "#e4e5f1";
		}
		for (let i = 0; i < bg_dark.length; i++) {
			bg_dark[i].style.backgroundColor = "#e4e5f1";
		}
		for (let i = 0; i < light.length; i++) {
			light[i].style.color = "#00031a";
		}
		for (let i = 0; i < bg_light.length; i++) {
			bg_light[i].style.backgroundColor = "#00031a";
		}
		for (let i = 0; i < checkbox_color.length; i++) {
			checkbox_color[i].style.outline = "1px solid #00031a";
		}
		for (let i = 0; i < strengthicon.length; i++) {
			strengthicon[i].style.fill = "#00031a";
		}
		for (let i = 0; i < svg_light_col.length; i++) {
			svg_light_col[i].style.fill = "#00031a";
		}
	}
	if (document.getElementById("toggle").checked == false) {
		strengthicon[0].style.fill = "#e4e5f1";
		for (let i = 0; i < dark.length; i++) {
			dark[i].style.color = "#00031a";
		}
		for (let i = 0; i < bg_dark.length; i++) {
			bg_dark[i].style.backgroundColor = "#00031a";
		}
		for (let i = 0; i < light.length; i++) {
			light[i].style.color = "#e4e5f1";
		}
		for (let i = 0; i < bg_light.length; i++) {
			bg_light[i].style.backgroundColor = "#e4e5f1";
		}
		for (let i = 0; i < checkbox_color.length; i++) {
			checkbox_color[i].style.outline = "1px solid #e4e5f1";
		}
		for (let i = 0; i < strengthicon.length; i++) {
			strengthicon[i].style.fill = "#e4e5f1";
		}
		for (let i = 0; i < svg_light_col.length; i++) {
			svg_light_col[i].style.fill = "#e4e5f1";
		}
	}
}

function rangeValue() {
	const prog = document.getElementById("inputrange");
	const value = ((prog.value - 4) / 36) * 100;
	prog.style.background = `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${value}%, #fff ${value}%, white 100%)`;
}

function passwordLength() {
	const length = document.getElementById("inputrange").value;
	document.getElementById("length-val").innerHTML = length;

	return length;
}

function generatePassword() {
	const uppercase_array = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
	];
	const lowercase_array = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];
	const number_array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	const symbol_array = [
		"`",
		"~",
		"!",
		"@",
		"#",
		"$",
		"%",
		"^",
		"&",
		"*",
		"(",
		")",
		"-",
		"-",
		"+",
		"=",
		"[",
		"{",
		"}",
		"]",
		";",
		":",
		"'",
		'"',
		",",
		"<",
		".",
		">",
		"/",
		"?",
		"|",
	];
	list = [];
	const uppercase = document.getElementById("include-uppercase").checked;
	const lowercase = document.getElementById("include-lowercase").checked;
	const number = document.getElementById("include-number").checked;
	const symbol = document.getElementById("include-symbol").checked;
	password = "";
	if (uppercase == true) {
		list = list.concat(uppercase_array);
	}
	if (lowercase == true) {
		list = list.concat(lowercase_array);
	}
	if (number == true) {
		list = list.concat(number_array);
	}
	if (symbol == true) {
		list = list.concat(symbol_array);
	}
	for (let i = 0; i < passwordLength(); i++) {
		password += list[Math.floor(Math.random() * list.length)];
	}
	document.querySelector(".result").value = password;
}

function refreshFunction() {
	rangeValue();
	passwordLength();
	generatePassword();
	checkStrength();
}
function copyPassword() {
	const passwordText = document.getElementById("result-text");
	passwordText.select();
	passwordText.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(passwordText.value);
	alert("Password Copied!");
}

function checkStrength() {
	var password_value = document.getElementById("result-text").value;
	var strengthtext = document.getElementById("strengthText");
	var smile_face = document.getElementById("smile-face");
	var straight_face = document.getElementById("straight-face");
	var sad_face = document.getElementById("sad-face");
	var strength = 0;
	if (password_value.match(/[a-z]+/)) {
		strength += 1;
	}
	if (password_value.match(/[A-Z]+/)) {
		strength += 1;
	}
	if (password_value.match(/[0-9]+/)) {
		strength += 1;
	}
	if (password_value.match(/[$@#&!]+/)) {
		strength += 1;
	}

	switch (strength) {
		case 0:
			strengthbar = 0;
			break;
		case 1:
			strengthbar = 25;
			break;

		case 2:
			strengthbar = 50;
			break;

		case 3:
			strengthbar = 75;
			break;

		case 4:
			strengthbar = 100;
			break;
	}
	if (passwordLength() < 7 && strengthbar < 50) {
		strengthtext.innerHTML = "Weak Password";
		sad_face.style.display = "block";
		straight_face.style.display = "none";
		smile_face.style.display = "none";
	}
	if (passwordLength() >= 7 && passwordLength() <= 8 && strengthbar < 75) {
		strengthtext.innerHTML = "Fairly Strong Password";
		sad_face.style.display = "none";
		straight_face.style.display = "block";
		smile_face.style.display = "none";
	}
	if (passwordLength() >= 9) {
		strengthtext.innerHTML = "Strong Password";
		sad_face.style.display = "none";
		straight_face.style.display = "none";
		smile_face.style.display = "block";
	}
}

(window.onload = myFunction()), refreshFunction();
