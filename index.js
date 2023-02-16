function myFunction() {
	var dark = document.getElementsByClassName("col-dark");
	var light = document.getElementsByClassName("col-light");
	var bg_dark = document.getElementsByClassName("bg-dark");
	var bg_light = document.getElementsByClassName("bg-light");
	var checkbox_color = document.getElementsByClassName("checkbox-value");

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
	}
}

window.onload = myFunction();
