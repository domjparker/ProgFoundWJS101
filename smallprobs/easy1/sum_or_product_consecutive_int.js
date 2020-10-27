/*
Write a program that asks the user to enter an integer greater 
than 0, then asks whether the user wants to determine the sum 
or the product of all numbers between 1 and the entered 
integer, inclusive.
*/
// TODO Problem
// program asks for an integer greater than 0, then asks for whether user
// wants the numbers between 1 and their number choice to be added together
// or multiplied. Whether added or multiplied, the initial number will be
// combined with the next consecutive number until the program reaches the
// number chosen.
//INPUT  = integer number > 0, choice of sum(+) or product(*)
//OUTPUT = sum or product of numbers between 1 and the number chosen
// TODO Examples
/*
Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.

Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.
*/
// TODO Data Structures
// still working just with integers, so don't need a complex data
// structure. 
// TODO Algorithm
/*
ASK user for integer > 0
ASK user for + or *
ASSIGN a variable to represent in incrementing total (set to value of 1)
IF user chose +, set index to 1 and add incTotal + (index + 1) - until index reaches integer chosen
IF user chose *, set index to 1 and multiple incTotal * (index + 1) until index reaches integer
return incTotal 
*/
// TODO Code

let READLINE = require("readline-sync");
let integerChoice;
let sumOrProductChoice;
let incrementingTotal = 1;

function calculateSum(chosenInteger) {
  for (let i = 1; i < chosenInteger; i += 1) {
    incrementingTotal = incrementingTotal + (i + 1);
  }
  return incrementingTotal;
}

function calculateProduct(chosenInteger) {
  for (let i = 1; i < chosenInteger; i += 1) {
    incrementingTotal = incrementingTotal * (i + 1);
  }
  return incrementingTotal;
}

do {
  integerChoice = parseInt(READLINE.question("Pick an integer that is greater than 0: "), 10);
} while ((Number.isInteger(integerChoice) === false) || (integerChoice < 1))

do {
  sumOrProductChoice = READLINE.question(`Enter "s" to compute the SUM, or "p" to compute the ` +
  `product of the numbers between 1 and ${integerChoice}. `); 
} while (!((sumOrProductChoice === 's') || (sumOrProductChoice === 'p')));

if (sumOrProductChoice === 's') {
  let total = calculateSum(integerChoice);
  console.log(`The SUM of the integers between 1 and ${integerChoice} is ${total}.`);
} else {
  let total = calculateProduct(integerChoice);
  console.log(`The PRODUCT of the integers between 1 and ${integerChoice} is ${total}.`);
}

