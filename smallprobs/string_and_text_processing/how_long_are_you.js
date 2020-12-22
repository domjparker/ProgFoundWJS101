/*
Write a function that takes a string as an argument, and returns an array that contains every word from the string, with each word followed by a space and the word's length. If the argument is an empty string or if no argument is passed, the function should return an empty array.
Assume that every pair of words in the string will be separated by a single space.
*/
// TODO Problem
/*
Explicit Requirements:
- INPUT = string
- OUTPUT = array containing every word from the string trailed by a space and then a number (still part of string)
- RULES = if argument is empty string, or if there is not argument used, return empty array.

Implicit Requirements:

Questions:

*/
// TODO Examples
/*
wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []
*/
// TODO Data Structures
/*
string > array of strings
*/
// TODO Algorithm
/*
function takes in string
split string into array of strings
if stringArray not [], 
  for each string in array
    return string + _ + string.length
else return []
return result

*/
// TODO Code

function wordLengths(string = "") {
  if (string !== "") {
    let stringArray = string.split(" ");
    return stringArray.map(word => `${word} ${String(word.length)}`);
  } else return [];
}

// function wordLengths(string = "") {
//   let newArray = []
//   if (string !== "") {
//     let stringArray = string.split(" ");
//     for (let i = 0; i < stringArray.length; i += 1) {
//       newArray.push(`${stringArray[i]} ${stringArray[i].length}`);
//     } 
//   }
//   return newArray;
// }

wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []