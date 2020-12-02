/*
Write a function that takes a string, doubles every character in the string,
and returns the result as a new string.
*/
// TODO Problem
/*
Explicit Requirements:
 - INPUT = string of characters/words
 - OUTPUT = string with each character of the input string doubled
 - RULES = returns result as new string.

Implicit Requirements:

Questions:
 - empty string? returns an empty string.
*/
// TODO Examples
/*
repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""
*/
// TODO Data Structures
/*
strings only
*/
// TODO Algorithm
/*
 - function takes in string.
 - create empty string.
 - for each character in string
  - double it and add to empty string.
 - return empty string, now not empty.
*/
// TODO Code

function repeater(string) {
  let result = '';
  for (let i = 0; i < string.length; i += 1) {
    result += (string[i] + string[i]);
  }
  return result;
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

// or...

function repeater(string) {
  return string.split("").map(char => char + char).join("");
}