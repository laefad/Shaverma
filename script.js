"use strict";

document.addEventListener("DOMContentLoaded", function() {
	
	initStarRating();
	
});

function initStarRating()
{
	let starDivs = document.querySelectorAll(".star_rating");
	
	starDivs.forEach( (elem) => {
		
		let labels = elem.querySelectorAll("label");
		labels = [...labels];
		
		labels.reduce( (prevLabels, label) => {
			
			let inputId = label.getAttribute("for");
			let input = elem.querySelector("#" + inputId);
			let anotherInputs = [...elem.querySelectorAll("input")].filter( (e) => e != input );
			
			label.addEventListener("mouseenter", () => {
				if ( label.classList.contains("active") 
					|| label.classList.contains("selected"))
				
					return;
					
				else { 
				
					label.classList.add("active");
					prevLabels.forEach( prevLabel => {
						prevLabel.classList.add("active");
					});
					
				}
			});
			
			label.addEventListener("mouseleave", () => {
				
				if (label.classList.contains("active")) {
					
					label.classList.remove("active");
					prevLabels.forEach( prevLabel => {
						prevLabel.classList.remove("active");
					});
					
				}
			});
			
			label.addEventListener("click", () => {
				
				if (label.classList.contains("selected"))
					input.checked = false;
				
				anotherInputs.forEach( i => {
						i.checked = false;
					});
					
				labels.forEach( el => {
					el.classList.remove("selected");
				});
				
				label.classList.add("selected");
				prevLabels.forEach( prevLabel => {
					prevLabel.classList.add("selected");
				});
			});
			
			return prevLabels.concat(label);
		}, []);
	});
}