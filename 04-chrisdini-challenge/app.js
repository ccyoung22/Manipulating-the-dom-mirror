/*
Learning Objectives:
  1. Understand and utilize DOM element selection.
  2. Implement mouse event listeners.
  3. Manipulate CSS properties through JavaScript.

Brief:
Chris is eager to perform a magic trick — to vanish before your eyes! By harnessing the power of CSS and JavaScript, make Chris disappear when the mouse hovers over his image. 

Expected Outcomes:
  1. When the user hovers over Chris's image, he should disappear.
  2. When the user moves the mouse away, Chris should reappear.

Hint: You can achieve this in multiple ways e.g. via the opacity or style property, etc. 
*/

// Place your plan and solution below!

//grab chris image from the html 

const chrisImage = document.getElementById("chrisImage");

function chrisVanish() {
  chrisImage.style.opacity = 0;
}

function chrisReappear() {
  chrisImage.style.opacity = 100;
}


chrisImage.addEventListener("mouseover", chrisVanish);
chrisImage.addEventListener("mouseleave" , chrisReappear);



//a function that says when user hovers their mouse over chris image, it dissapears 
//when the mouse is not on chris, the image shows 
//an event listener so that chris image can read that event 

