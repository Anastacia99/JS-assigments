
/*
const five = 5;
const eight = 8;
let total = 0;

console.log (total);
console.log (five + eight);

/*
let numberOfBottles = 10;  // Antal flaskor, börjar på 10
const line1 = "green bottles hanging on the wall" // Första raden av text
const line2 = "And if one green bottle, should accidentally fall, there will be"; // Andra raden av text

console.log (numberOfBottles +line1 + numberOfBottles + line1);
console.log (line2 + --numberOfBottles + line1);

let number = 10;
number = number - 3;
console.log(number);


const birthYear = 2000;
const currentYear = 2024;
let ageOfPerson = currentYear - birthYear;

//Save to a let variable named isChild, when the age is from 0 till 10.
let isChild = (ageOfPerson >= 0) && (ageOfPerson <= 10);

//Save to a let variable named isTeenager, when the age is from 11 to 17
let isTeenager = (ageOfPerson >= 11) && (ageOfPerson <= 17);

//Save to let a variable named isAdult, when the age is 18 or more.
let isAdult = ageOfPerson >= 18;

console.log(isChild);
console.log(isTeenager);
console.log(isAdult);
*/

const birthYear = 2010;
const currentYear = 2024;
const favoriteNumber = 785657;

let ageOfPerson = currentYear - birthYear;
console.log(ageOfPerson);

// Save to let variable named is Child, when the age is from 0 till 10
let isChild = (ageOfPerson >= 0) && (ageOfPerson <= 10);

// Save to let variable named isTeenager, when the age is from 11 to 17
let isTeenager = (ageOfPerson >= 11) && (ageOfPerson <= 17);

// Save to let variable named isAdult, when the age is 18 or more.
let isAdult = ageOfPerson <= 18;

if (isChild) {
  console.log("You are a child");
}
if (isTeenager) {
  console.log("You are a teenager");
}
if (isAdult) {
  console.log("You are an Adult");
}
console.log (favoriteNumber);

if (favoriteNumber > ageOfPerson) {
  console.log ("Favorite Number is Greater");
} else if (favoriteNumber === ageOfPerson) {
  console.log("They are the same!");
} else {
  console.log("Age is Greater");
}

if (favoriteNumber % 2 === 0) {
  console.log("Favorite Number is Even");
} else {
  console.log("Favorite Number is odd");
}
