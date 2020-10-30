/*
Write a program that prompts the user for two positive integers, and then
prints the results of the following operations on those two numbers: addition,
subtraction, product, quotient, remainder, and power. Do not worry about
validating the input.
*/
// TODO Problem
/*
INPUT = 
OUTPUT = 
*/
// TODO Examples
/*
==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 141050039560662968926103
*/
// TODO Data Structures
// numbers
// TODO Algorithm
/*
require readlinesync
function takes in two integers
log results of equations, with next line separators in between
prompt user for integer1
prompt user for integer2
call function with both integers as arguments
*/
// TODO Code

let readlinesync = require("readline-sync");

let integerOperations = (int1, int2) => {
  console.log(`${int1} + ${int2} = ${int1 + int2}\n` +
  `${int1} - ${int2} = ${int1 - int2}\n` +
  `${int1} * ${int2} = ${int1 * int2}\n` +
  `${int1} / ${int2} = ${int1 / int2}\n` +
  `${int1} % ${int2} = ${int1 % int2}\n` +
  `${int1} ** ${int2} = ${int1 ** int2}`);
}

let integer1 = Number(readlinesync.question("Enter the first number: \n"));
let integer2 = Number(readlinesync.question("Enter the second number: \n"));

integerOperations(integer1, integer2);