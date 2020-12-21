/*
Write a function that takes a string as an argument, and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.
*/
// TODO Problem
/*
Explicit Requirements:
- INPUT = string
- OUTPUT = input string, with lowercase letters changed to uppercase, and vice versa
- RULES =

Implicit Requirements:

Questions:
-anything to consider with non-letters?
*/
// TODO Examples
/*
swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"
*/
// TODO Data Structures
/*
could keep as string, or convert to array and back to string
*/
// TODO Algorithm
/*
function takes in string
create bucket string
for each letter in the string
  if its lowercase, change to uppercase and add to bucketString
  if its uppercase, change to lowercase and add to bucketString
  if its not an alphabetic letter, continue.
return bucket string.


function takes in string
split string into characters
map characters array
  if character matches uppercase, change to lowercase
  if character matches lowercase, change to uppercase
  if character not alphabetic, ignore
join array into string of words
*/
// TODO Code

function swapCase(string) {
  let bucketString = "";
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === string[i].toUpperCase()) {
      bucketString += string[i].toLowerCase();
    } else if (string[i] === string[i].toLowerCase()) {
      bucketString += string[i].toUpperCase();
    } else {
      bucketString += string[i];
    }
  }
  return bucketString;
}


swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

// or.....

function swapCase(string) {
  let chars = string.split("");
  return chars.map(char => {
    if (char === char.toUpperCase()) return char.toLowerCase();
    else if (char === char.toLowerCase()) return char.toUpperCase();
  }).join("");
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"