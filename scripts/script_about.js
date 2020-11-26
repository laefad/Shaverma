"use strict";

document.addEventListener("DOMContentLoaded", function() {
	
	initSlider();
	
});

function initSlider() {
	let slider = document.querySelector("#images_about");
	let slides = ["imgs/about/img_1.jpg", "imgs/about/img_2.jpg", "imgs/about/img_3.jpg", "imgs/about/img_4.jpg"];
	let inputs = slider.querySelector("#selectors")
		.querySelectorAll("input");
	
	inputs = [...inputs];
	
	let i = 0;
	
	const setBackground = img => {
		slider.style.background = `url(${img})`;
		slider.style.backgroundSize = "cover";
	}
	
	const changeChecked = j => {
		inputs[i].checked = false;
		i = j % slides.length;
		inputs[i].checked = true;
	}
	
	const styleF = () => {
		changeChecked(i + 1);
		setBackground(slides[i]);
	}
	
	changeChecked(0);
	
	let timer = setInterval( styleF, 3000);
	
	inputs.forEach( (input, j) => {
		input.addEventListener("click", () => {
			clearInterval(timer);
			
			changeChecked(j);
			setBackground(slides[i]);
			timer = setInterval( styleF, 3000);
		});
	});
}