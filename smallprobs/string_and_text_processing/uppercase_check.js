/*
Write a function that takes a string argument, and returns true if all of the alphabetic characters inside the string are uppercase; false otherwise. Ignore characters that are not alphabetic.
*/
// TODO Problem
/*
Explicit Requirements:
- INPUT = string of characters
- OUTPUT = boolean, based on whether all alphabetic characters in the string are upper case.
- RULES = non-alphabetic characters can be ignored.

Implicit Requirements:

Questions:

*/
// TODO Examples
/*
isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true
*/
// TODO Data Structures
/*
string > array > check each > boolean
*/
// TODO Algorithm
/*
function takes in string
check string for lower case characters, using match and regex
if array isn't empty, true. othewise false.

*/
// TODO Code

let isUppercase = string => {
  return (string.match(/[a-z]/g) === null);
}


isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true