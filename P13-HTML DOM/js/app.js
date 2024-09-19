// Reference "text10" and assign it to the variable called "textField0"
const textField = document.getElementById("text0");

// Take TextField0 and change it to "Anastasia"
textField.innerHTML = "Anastasia";


// Reference "header5" and assign it to the variable called "headerText5"
const headerText5 = document.getElementById("header5");


// Take headerText5 and change it to "THIS IS MA WEBSITE"
headerText5.innerHTML = multiplyBySelf(5);


// Take headerText5, access its style, access its color & change it
headerText5.style.color = "pink";


function multiplyBySelf (numberToMultiply) {
  return numberToMultiply * numberToMultiply;
}

// Reference "text0" and assign it to the variable called "textField0"
const textField0 = document.getElementById("text0");
// TAKE textField0 and change it to "Ben"
textField0.innerHTML = getRandomInt(20);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
