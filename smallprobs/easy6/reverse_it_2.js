/*
Write a function that takes a string argument containing one or more words, and
returns a new string containing the words from the string argument. All
five-or-more letter words should have their letters in reverse order. The string
argument will consist of only letters and spaces. Words will be separated by a
single space.
*/
// TODO Problem
/*
Explicit Requirements:
 - INPUT = string with one or more words.
 - OUTPUT = new string containing all words from input string.
 - RULES = any words with more than 4 letters should be reversed.

Implicit Requirements:

Questions:

*/
// TODO Examples
/*
reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"
*/
// TODO Data Structures
/*
string > array > loop > if condition > reverse, otherwise continue > string.
*/
// TODO Algorithm
/*
 - function takes in string.
 - split string into array by space.
 - iterate over array
  - if word.length is greater than 4
    - split word into array, reverse, and join to string again.
  -otherwise, just return word.
 - join result into string separated by 1 space each.
 - return result.
*/
// TODO Code

function reverseWords(string) {
  let stringArray = string.split(' ');
  let resultArray = [];
  for (let i = 0; i < stringArray.length; i += 1) {
    if (stringArray[i].length > 4) {
      resultArray.push(stringArray[i].split('').reverse().join(''));
    } else {
      resultArray.push(stringArray[i]);
    }
  }
  return resultArray.join(' ');
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"


// using .map()

function reverseWords(string) {
  let stringArray = string.split(' ');
  let resultArray = stringArray.map(word => {
    if (word.length > 4) {
      return word.split('').reverse().join('');
    } else {
      return word;
    }
  })
  return resultArray.join(' ');
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"

// or using ternary operator...

function reverseWords(string) {
  let stringArray = string.split(' ');
  let resultArray = stringArray.map(word => {
    return word.length > 4 ? word.split('').reverse().join('') : word;
  })
  return resultArray.join(' ');
}