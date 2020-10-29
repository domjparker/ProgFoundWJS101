/*
Write a function that determines and returns the ASCII string value of a string
 passed in as an argument. The ASCII string value is the sum of the ASCII 
 values of every character in the string. (You may use 
  String.prototype.charCodeAt() to determine the ASCII value of a character.)
*/
// TODO Problem
/*
INPUT = string
OUTPUT = sum of ASCII values of every character in the string
*/
// TODO Examples
/*
asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0
*/
// TODO Data Structures

// TODO Algorithm
/*
function takes in a string.
declare variable sum
split characters of string into an iterable array
for each character in that array, determine ascii value, and add to sum
return sum
*/
// TODO Code

function asciiValue(string) {
  let sum = 0;
  let stringArray = string.split('');
  stringArray.forEach(element => {
    let elementAscii = element.charCodeAt(0);
    sum = sum + elementAscii;
  })
  return sum;
}

asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0