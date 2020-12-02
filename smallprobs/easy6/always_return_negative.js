/*
Write a function that takes a number as an argument. If the argument is a
positive number, return the negative of that number. If the argument is a
negative number, return it as-is.
*/
// TODO Problem
/*
Explicit Requirements:
 - INPUT = number
 - OUTPUT = a negative version of the number, whether or not it starts as
 negative.
 - RULES = if the number is a zero, return -0

Implicit Requirements:

Questions:

*/
// TODO Examples
/*
negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0
*/
// TODO Data Structures
/*
numbers
*/
// TODO Algorithm
/*
 - function takes in number
 - if number is negative return number
 - if number is positive
  - return number converted to negative
*/
// TODO Code

function negative(num) {
  return -Math.abs(num);
}

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0