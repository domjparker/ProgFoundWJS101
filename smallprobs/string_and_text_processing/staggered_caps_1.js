/*
Write a function that takes a string as an argument, and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.
*/
// TODO Problem
/*
Explicit Requirements:
- INPUT = string
- OUTPUT = input string, but with a staggered capitalization scheme.
- RULES = first character [0] should be capitalized, next should be lowercase, and so on. non-alphabetic characters should be unchanged, but still counted as characters.

Implicit Requirements:

Questions:

*/
// TODO Examples
/*
staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"
*/
// TODO Data Structures
/*
string > 
*/
// TODO Algorithm
/*
function takes in string
string converted to array
for each character in array 
  if index is even, capitalize
  if index is odd, lowercase
return result
*/
// TODO Code

function staggeredCase(string) {
  let arrayOfChars = string.split("");
  return arrayOfChars
  .map((char, idx) => {
    if (idx % 2 === 0) return char.toUpperCase();
    else return char.toLowerCase();
  })
  .join("");
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"