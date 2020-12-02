/*
Write a function that takes a positive integer as an argument, and returns that
number with its digits reversed.
*/
// TODO Problem
/*
Explicit Requirements:
 - INPUT = positive integer
 - OUTPUT = integer with individual digits of input integer reversed
 - RULES = leading zeros in result get dropped.

Implicit Requirements:

Questions:

*/
// TODO Examples
/*
reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get
dropped!
reverseNumber(1);        // 1
*/
// TODO Data Structures
/*
number > string > reverse > number
*/
// TODO Algorithm
/*
 - function takes in a number
 - convert number to array
 - reverse array
 - join array into string and convert to number
 - return result
*/
// TODO Code

let reverseNumber = num => {
  let numArray = Array.from(num.toString());
  let numArrayReversed = numArray.reverse();
  let numReversed = Number(numArrayReversed.join(''));
  return numReversed;
};

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1