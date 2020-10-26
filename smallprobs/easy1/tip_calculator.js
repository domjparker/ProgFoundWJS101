/*
Create a simple tip calculator. The program should prompt for a bill amount 
and a tip rate. The program must compute the tip, and then log both the tip 
and the total amount of the bill to the console. You can ignore input validation
 and assume that the user will enter numbers.
*/
// TODO Problem
// create a program that calculates a tip amount. Should ask the user to input a bill amount
// and a tip rate percentage. The program computes the tip amount by multiplying the two amounts, and 
// console.logging the result. The program computes the total by adding the bill amount and the tip amount.
// questions: 
  // what happens if the user inputs a 0 or nil for either amount?
  // what happens if user inputs integer or float?
//INPUT = bill amount, tip rate (percentage)
//OUTPUT = string with tip rate, string with total (bill + tip)
// TODO Examples
/*
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00
*/
 // TODO Data Structures
//  working with numbers and strings. 
 // TODO Algorithm
// get bill amount by asking user for bill amount
// get tip percentage amount by asking user for tip amount
// convert tip amount from percentage integer to decimal number
// get tip result amount by multiplying bill amount and tip amount decimal number
// log tip result amount
// get total by adding tip result amount to bill amount
// log total

//  TODO Code

const READLINE = require("readline-sync");

let billAmount = parseFloat(READLINE.question("What is the bill? ")); // returns string, but converts to float
let tipPercentage = parseFloat(READLINE.question("What is the tip percentage? ")); // returns string, but converts to float
let tipDecimal = tipPercentage / 100; // converts percentage to decimal 
let tipResult = billAmount * tipDecimal; // calculates tip float
let total = tipResult + billAmount; // adds tip float to bill float

console.log(`The tip is $${tipResult.toFixed(2)}\n` +
`The total is $${total.toFixed(2)}.`)