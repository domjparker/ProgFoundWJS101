/*
Write a function that takes a string argument, and returns a new string
containing the words from the string argument in reverse order.
*/
// TODO Problem
/*
Explicit Requirements:
 - INPUT = string
 - OUTPUT = new string
 - RULES = any words in the new string should be reversed

Implicit Requirements:
 - words would be collections of characters separated by spaces
Questions:

*/
// TODO Examples
/*
reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"
*/
// TODO Data Structures
/*
string > array > reverse > string
*/
// TODO Algorithm
/*
 - function takes in string.
 - split string into words separated by spaces.
 - reverse array.
 - join array into string.
 - return string.
*/
// TODO Code

function reverseSentence(string) {
  return string.split(' ').reverse().join(' ');
}

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"