/*
Write a function that takes an array of strings, and returns an array of the same values with all vowels (a, e, i, o, u) removed.
*/
// TODO Problem
/*
Explicit Requirements:
- INPUT = array of strings
- OUTPUT = array of input with vowels removed
- RULES = 

Implicit Requirements:

Questions:
- can it be the same array, or a should it be a new array?
*/
// TODO Examples
/*
removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]
*/
// TODO Data Structures
/*
arrays
*/
// TODO Algorithm
/*
function takes in array of strings
create new array
for each string element
  remove vowel characters
  push string to new array
return new array
*/
// TODO Code

function removeVowels(arrayOfStrings) {
  let finalArray = [];
  arrayOfStrings.forEach(stringElement => {
    finalArray.push(stringElement.replace(/[aeiou]/gi, ''))
  })
  return finalArray;
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]


// but this is better ...

function removeVowels(arrayOfStrings) {
  return arrayOfStrings.map(stringElement => {
    return stringElement.replace(/[aeiou]/gi, '')
  })
}

// or ....

function removeVowels(stringArray) {
  return stringArray.map(string => {
    let chars = string.split("");
    let removedVowels = deleteVowels(chars);
    return removedVowels.join("");
  });
}

function deleteVowels(array) {
  const VOWELS = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  return array.map(char => {
    if (VOWELS.indexOf(char) >= 0) {
      return "";
    } else {
      return char;
    }
  });
}