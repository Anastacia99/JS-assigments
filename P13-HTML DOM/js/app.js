// Reference "text10" and assign it to the variable called "textField0"
const textField = document.getElementById("text0");

// Take TextField0 and change it to "Anastasia"
textField.innerHTML = "Anastasia";


// Reference "header5" and assign it to the variable called "headerText5"
const headerText5 = document.getElementById("header5");


// Take headerText5 and change it to "THIS IS MA WEBSITE"
headerText5.innerHTML = multiplyNumber(5);


// Take headerText5, access its style, access its color & change it
headerText5.style.color = "pink";


function multiplyNumber (numberToMultiply) {
  return numberToMultiply * numberToMultiply;
}
