/*
Write a function that takes a sentence string as an argument, and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.
*/
// TODO Problem
/*
Explicit Requirements:
- INPUT = string
- OUTPUT = string
- RULES = input and output strings are sentences.
  any and all number words should be returned in the output string as their corresponding digit character. 

Implicit Requirements:

Questions:

*/
// TODO Examples
/*
wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."
*/
// TODO Data Structures
/*
string > array > iterate and test each against object key/value > join
*/
// TODO Algorithm
/*
function takes in string and object
  make array of keys from object
  for each item in array
    replace all instances of item in string, with obj.item
return resulting string
  
*/
// TODO Code

const NUM_OBJ = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 6,
  seven: 7,
  eight: 8,
  nine: 9,
}

function wordToDigit(string) {
  Object.keys(NUM_OBJ).forEach(numWord => {
    let regexWord = new RegExp(` ${numWord} `, 'g');
    string = string.replaceAll(regexWord, NUM_OBJ[numWord]);
  });
  return string;
}

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

wordToDigit('The weight is done.');      // "The w8 is d1."