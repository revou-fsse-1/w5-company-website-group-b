function myFunction() {
	var dark = document.getElementsByClassName("col_dark");
	var light = document.getElementsByClassName("col_light");
	var bg_dark = document.getElementsByClassName("bg_dark");
	var bg_light = document.getElementsByClassName("bg_light");
	var checkbox_color = document.getElementsByClassName("checkbox_value");

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
	}
	if (document.getElementById("toggle").checked == false) {
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
	}
}

function rangeValue() {
	const prog = document.getElementById("inputrange");
	const value = ((prog.value - 4) / 36) * 100;
	prog.style.background = `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${value}%, #fff ${value}%, white 100%)`;
}

function passwordLength() {
	const length = document.getElementById("inputrange").value;
	document.getElementById("length_val").innerHTML = length;

	return length;
}

function rangeValAndPassLength() {
	rangeValue();
	passwordLength();
	generatePassword();
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
		"_",
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
	const uppercase = document.getElementById("include_uppercase").checked;
	const lowercase = document.getElementById("include_lowercase").checked;
	const number = document.getElementById("include_number").checked;
	const symbol = document.getElementById("include_symbol").checked;
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
	rangeValAndPassLength();
}
function copyPassword() {
	const passwordText = document.getElementById("result_text");
	passwordText.select();
	passwordText.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(passwordText.value);
	alert("Password Copied!");
}
(window.onload = myFunction()), rangeValAndPassLength();
