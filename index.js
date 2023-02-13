function myFunction() {
	var dark = document.getElementsByClassName("col_dark");
	var light = document.getElementsByClassName("col_light");
	var bg_dark = document.getElementsByClassName("bg_dark");
	var bg_light = document.getElementsByClassName("bg_light");
	if (document.getElementById("toggle").checked) {
		for (let i = 0; i < dark.length; i++) {
			dark[i].style.color = "white";
		}
		for (let i = 0; i < bg_dark.length; i++) {
			bg_dark[i].style.backgroundColor = "white";
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
			light[i].style.color = "white";
		}
		for (let i = 0; i < bg_light.length; i++) {
			bg_light[i].style.backgroundColor = "white";
		}
	}
}

window.onload = myFunction();
