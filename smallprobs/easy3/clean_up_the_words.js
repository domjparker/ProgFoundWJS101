/*
Given a string that consists of some words and an assortment of non-alphabetic 
characters, write a function that returns that string with all of the 
non-alphabetic characters replaced by spaces. If one or more non-alphabetic 
characters occur in a row, you should only have one space in the result (i.e., 
the result string should never have consecutive spaces).
*/
// TODO Problem
/*
INPUT = string, containing words and non-alphabetic characters.
OUTPUT = same string, having non-alphabetic characters replace by spaces, but 
any multiple spaces reduced to single spaces between words or alphabetic
characters.
no uppercase characters in the example. Will any inputs contain uppercase?
*/
// TODO Examples
/*
cleanUp("---what's my +*& line?");    // " what s my line "
cleanUp("---What's My +*& Line?");    // " What s My Line "
*/
// TODO Data Structures
// replace non-alphabet characters with spaces using regex
// move characters from string to second string.
// TODO Algorithm
/*
function takes in string.
replace each non-alphabetic character with space, using regex.
create empty string to add characters to.
loop over original string characters
if string character is equal to " " and is not followed by next character that is a " ",
add to created empty string.
return that string.
*/
// TODO Code

function cleanUp(string) {
  let spacedString = string.replace(/[^a-z]/gi, " ")
  let stringResult = '';
  for (let i = 0; i < string.length; i += 1) {
    if ((spacedString[i] === " ") && (spacedString[i + 1] === " ")) {
      continue
    } else {
      stringResult = stringResult + spacedString[i];
    }
  }
  return stringResult;
}

// SHORTER SOLUTION
// function cleanUp(text) {
//   return text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
// }

cleanUp("---what's my +*& line?");    // " what s my line "
cleanUp("---What's My +*& Line?");    // " What s My Line "
