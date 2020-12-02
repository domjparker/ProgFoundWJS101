/*
Write a function that takes a non-empty string argument, and returns the middle
character(s) of the string. If the string has an odd length, you should return
exactly one character. If the string has an even length, you should return
exactly two characters.
*/
// TODO Problem
/*
Explicit Requirements:
 - INPUT = string of characters (non-empty)
 - OUTPUT = string of the middle character/s of the input string
 - RULES = 1 character if input string is odd, 2 characters otherwise

Implicit Requirements:

Questions:

*/
// TODO Examples
/*
centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
*/
// TODO Data Structures
/*
strings
*/
// TODO Algorithm
/*
 - function takes in a string
 - if string.length is even
  - return 2 middle letters using string.length halved and same plus 1
 - if string.length is odd
  - return middle letter by using rounding up from string.length halved.
*/
// TODO Code

function centerOf(string) {
  let lengthHalf = string.length / 2;
  if (string.length % 2 === 0) {
    return string.substring(lengthHalf - 1, lengthHalf + 1);
  } else return string[Math.floor(lengthHalf)];
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"