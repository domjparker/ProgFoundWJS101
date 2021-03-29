/*
Given a string of words separated by spaces, write a function that swaps the 
first and last letters of every word.

You may assume that every word contains at least one letter, and that the 
string will always contain at least one word. You may also assume that each 
string contains nothing but words and spaces, and that there are no leading, 
trailing, or repeated spaces.


*/
// TODO Problem
/*
INPUT = string of words separated by spaces
OUTPUT = same string content, but with the first and last letters of each word
swapped from back to front and vice versa.
*/
// TODO Examples
/*
swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"
*/
// TODO Data Structures
// string to array of words. for each word, remove first letter and add to end
// then remove 2nd to last letter and add to word[0];
// join array back into string.
// TODO Algorithm
/*
function takes in string.
split string into array of words
for each word
  first letter = word[0]
  last letter = word[word.length - 1]
  return the new word = last letter + middle letters substring + first letter
return joined array.
*/
// TODO Code

let swap = (string) => {
  let arrayOfWords = string.split(' ');
  let swappedArray = []
  arrayOfWords.forEach(word => {
    if (word.length === 1) {
      swappedArray.push(word);
    } else {
      firstLetter = word[0];
      lastLetter = word[word.length - 1];
      if (word.length === 2) {
        swappedArray.push(lastLetter + firstLetter);
      } else {
        swappedArray.push(lastLetter + word.substring(1, word.length - 1) + firstLetter);
      }
    }
  })
  return swappedArray.join(' ');
}



swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"


function swap(str) {
  let arr = str.split(" ");
  let newArr = arr.map(word => {
    if (word.length < 2) return word;
    else if (word.length === 2) return word[1] + word[0];
    else return word[word.length - 1] + word.slice(1, word.length - 1) + word[0];
  })
  return newArr.join(" ");
}