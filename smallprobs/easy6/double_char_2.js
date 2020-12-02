/*
Write a function that takes a string, doubles every consonant character in the
string, and returns the result as a new string. The function should not double
vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.
*/
// TODO Problem
/*
Explicit Requirements:
 - INPUT = string of characters
 - OUTPUT = new string with each of input string's characters doubled.
 - RULES = don't double vowels, digits, punctuation, or whitespace.

Implicit Requirements:

Questions:

*/
// TODO Examples
/*
doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""
*/
// TODO Data Structures
/*
could split into an array, iterate over and later join. could just iterate
string.
*/
// TODO Algorithm
/*
 - function takes in string.
 - split into array
 - for each character in array
  - if character is not a vowel, digit, punctuation, or whitespace.
  - double it and add to empty string.
 - return array joined into string.
*/
// TODO Code

function doubleConsonants(string) {
  let result = '';
  let regexOfConsonants = /[bcdfghjklmnpqrstvwxyz]/i;
  for (let idx = 0; idx < string.length; idx += 1) {
    result += string[idx].replace(regexOfConsonants, (string[idx].repeat(2)));
  }
  return result;
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""