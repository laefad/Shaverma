"use strict";

document.addEventListener("DOMContentLoaded", function() {
	
	initSlider();
	
});

function initSlider() {
	let slider = document.querySelector("#images_about");
	let slides = slider.querySelectorAll(".slide");
	let inputs = slider.querySelector("#selectors")
		.querySelectorAll("input");
	
	inputs = [...inputs];
	slides = [...slides];
	
	let i = 0;
	let prevSlide = slides[0];
	
	const styleF = () => {
		prevSlide.style.display = "none";
		inputs[i].checked = false;
		i = (i+1) % slides.length;
		prevSlide = slides[i];
		inputs[i].checked = true;
		prevSlide.style.display = "block";
	}
	
	let timer = setInterval( styleF, 3000);
	
	inputs.forEach( (input, j) => {
		input.addEventListener("click", () => {
			clearInterval(timer);
			prevSlide.style.display = "none";
			inputs[i].checked = false;
			
			i = j;
			prevSlide = slides[i];
			inputs[i].checked = true;
			prevSlide.style.display = "block";
			
			timer = setInterval( styleF, 3000);
		});
	});
}