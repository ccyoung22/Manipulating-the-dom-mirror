/*
Learning Objectives:
  1. Understand and utilize DOM element selection.
  2. Implement event listeners on buttons.
  3. Manipulate image attributes dynamically based on user interactions.

Brief:
You're provided with two images of a lightbulb: one turned on and one turned off. Your task is to implement the functionality to control the bulb's illumination. Use the 'Turn On' and 'Turn Off' buttons to switch the src attribute of the image tag, effectively lighting up or dimming the bulb.

Expected Outcomes:
  1. When the "Turn On" button is clicked, the lightbulb image should change to its 'on' state.
  2. When the "Turn Off" button is clicked, the lightbulb image should change to its 'off' state.
  3. The bulb's state should only change when the respective button is clicked.
*/

// Place your plan and solution below!

// grab the on button from the html ✅
// grab the image from the html ✅
//when the on button is clicked ✅
// a function that takes that click and shows the light bulb on image ✅

const onButton = document.getElementById("turnBulbOn");
const img = document.getElementById("lightbulb");

function turnLightOn() {
  img.src = "light-bulb-on.png"
}

onButton.addEventListener("click" , turnLightOn);

//grab the off button from the html ✅
//when the off button is clicked ✅
// a function that takes the click and shows the lightbulb off image ✅

const offButton = document.getElementById("turnBulbOff");

function turnLightOff() {
  img.src = "light-bulb-off.png"
}

offButton.addEventListener("click" , turnLightOff);
