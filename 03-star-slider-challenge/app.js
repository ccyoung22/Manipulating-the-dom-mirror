/*
Learning Objectives:
  1. Manipulate DOM elements based on user input.
  2. Dynamically create and delete elements based on slider values.
  3. Enhance understanding of event-driven programming.

Brief:
You're provided with a slider (ranging from 1 to 5) and an empty space to populate star icons. Your task is to create or remove stars dynamically based on the value of the slider.

Expected Outcomes:
  1. The number of star icons should match the slider's value.
  2. Adjusting the slider should immediately reflect the change in the number of star icons.
*/


// grab the star slider from the html ✅
//create a star element ✅
//grab star element div✅
//append star element to star element div ✅




let slider = document.getElementById("starSlider");


let starDiv = document.getElementById("stars");



 function createStars() {
  
  const starCount = slider.value;

for (let i = 1; i < starCount; i++){
  let starIcon = document.createElement("span");
  starIcon.textContent = "★";
  starIcon.style.color = "gold";
  starDiv.appendChild(starIcon);
}
  
}

slider.addEventListener("input", createStars);

//a variable that tracks the number of stars that starts on one
//an array that counts the number of stars 







// }

//create an event listener that listens to the slider and triggers the createStars function ✅



// create a variable for the number on the slider ✅
// create a variable for the one star put it in an array
// create a for loop that itterates over the number of stars
//an if statement that says, if stars.length , are less than or equal to the number on the slider, add one







// Place your plan and solution below!
