/*
Build a program that randomly generates Teddy's age, and logs it to the 
console. Have the age be a random number between 20 and 120 (inclusive).
*/
// TODO Problem
/*
INPUT = no input
OUTPUT = random number between 20 - 120 (inclusive).
*/
// TODO Examples
/*
Teddy is 69 years old!
*/
// TODO Data Structures
// simple numbers and 
// TODO Algorithm
/*
function takes in no argument.
create random number between 0 and 100.
add 10 to random number
put resulting number in string.
log string.
*/
// TODO Code

function randomAge() {
  return Math.round(Math.random() * 100) + 20;
}

let teddyAge = randomAge();
console.log(`Teddy is ${TeddyAge} years old!`);

// or
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let age = randomBetween(20, 120);
console.log(`Teddy is ${age} years old!`);