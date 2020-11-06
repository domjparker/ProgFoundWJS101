/*
Write a function that takes a string argument and returns a new string that 
contains the value of the original string with all consecutive duplicate 
characters collapsed into a single character.
*/
// TODO Problem
/*
INPUT = string
OUTPUT = string, where all consecutively duplicate characters are collapsed 
into a single character. E.g. "ddbbdd" becomes "dbd".
*/
// TODO Examples
/*
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
*/
// TODO Data Structures
// string, changed to array for better iteration, then later joined back into string.
// TODO Algorithm
/*
function takes in string.
string split into array of elements
declare newArray variable = empty
iterate over elements.
 if array index is equal to array (index + 1)
 push array at index to newArray
return newArray converted to string.

*/
// TODO Code

let crunch = (string) => {
  let newArray = [];
  let arrayString = string.split('');
  for (let i = 0; i < arrayString.length; i += 1) {
    if (arrayString[i] !== arrayString[i + 1]) {
      newArray.push(arrayString[i]);
    }
  }
  return newArray.join('');
}


// function crunch(text) {
//   let index = 0;
//   let crunchText = '';

//   while (index <= text.length - 1) {
//     if (text[index] !== text[index + 1]) {
//       crunchText += text[index];
//     }

//     index += 1;
//   }

//   return crunchText;
// }


console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""