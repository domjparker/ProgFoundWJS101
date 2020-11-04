/*
Write a function that takes an integer, and converts it to a string 
representation.
*/
// TODO Problem
/*
INPUT = takes in an integer that may be a positive or negative number.
OUTPUT = string representation of input number.
If its a 0 then no + or - symbol.
*/
// TODO Examples
/*
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
*/
// TODO Data Structures

// TODO Algorithm
/*
declare object with numbers to string digits.
bring in integerToString function to convert number to string.

function takes in a number as argument.
if zero, call integerToString function with 0 as integer.
if positive number, "+" + integerToString with integer as argument.
else, "-" + integerToString with integer as argument.
return number string. 
*/
// TODO Code

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}

function signedIntegerToString(integer) {
  if (integer === 0) {
    return integerToString(0);
  } else if (Math.sign(integer) === 1) {
    return "+" + integerToString(integer);
  } else if (Math.sign(integer) === -1){
    return "-" + integerToString(-integer);
  }
}


console.log(signedIntegerToString(4321) === "+4321"); // true
console.log(signedIntegerToString(-123) === "-123"); // true
console.log(signedIntegerToString(0) === "0"); // true