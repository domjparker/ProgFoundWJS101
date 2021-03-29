/*
Write a function that returns the next to last word in the String passed to it 
as an argument.
Words are any sequence of non-blank characters.
You may assume that the input String will always contain at least two words.
*/
// TODO Problem
/*
INPUT = string of a sequence of non-blank characters, containing at least 2 words.
what happens if you have an input that has gaps that are more than one space (e.g '  ')?
OUTPUT = return 2nd to last word from the string.
*/
// TODO Examples
/*
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
*/
// TODO Data Structures
// String, array.
// TODO Algorithm
/*
function takes in one string
string is split into array or words/character collections
return array[length -2]
*/
// TODO Code

// let penultimate = string => {
//   let arrayFromString = string.split(' ');
//   if (string.trim() === '') {
//     return "Your string has no words."
//   } else if (arrayFromString.length === 1) {
//     return `There is only 1 word in this string, so the result is ${string}.`
//   } else if (arrayFromString.length === 2) {
//     return `There are 2 words in this string, so there really isn't a middle word.`
//   } else if (arrayFromString.length % 2 === 0) {
//     return `There is an even number of words in this string, so you could ` +
//     `choose either ${arrayFromString[(arrayFromString.length / 2) - 1]} or` +
//     ` ${arrayFromString[(arrayFromString.length / 2) + 1]} as being ` +
//     `somewhat in the middle.`
//   } else return arrayFromString[Math.floor(arrayFromString.length / 2)];
// }

function penultimate(str) {
  let arr = str.split(" ");
  if (arr.length < 2) return arr[0];
  else return arr[arr.length - 2];
}

console.log(penultimate(""));
console.log(penultimate("Launch"));
console.log(penultimate("Launch School"));
console.log(penultimate("Launch School yeah"));
console.log(penultimate("Launch School is great!"));
console.log(penultimate("Launch School is great right?!"));