/*
Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at position 0 should come first, then all substrings that start at position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given position from shortest to longest.

*/
// TODO Problem
/*
Explicit Requirements:
- INPUT = string
- OUTPUT = list of all possible substring combinations
- RULES = substrings must be ordered alphabetically, according to the first letter in them, and according to substring length.

Implicit Requirements:

Questions:

*/
// TODO Examples
/*
substrings('abcde');

returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
*/
// TODO Data Structures
/*
string > array
*/
// TODO Algorithm
/*
-function takes in string
-let empty result array
-
*/
// TODO Code

function leadingSubstrings(string) {
  let result = [];
  for (let length = 1; length <= string.length; length += 1) {
    result.push(string.slice(0, length))
  }
  return result
}

function substrings(string) {
  let finalResult = [];
  for (let i = 0; i < string.length; i += 1) {
    finalResult.push(leadingSubstrings(string.slice(i)));
  }

  return finalResult.flat();
}

substrings('abcde');

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]

function substrings(str) {
  let arr = [];
  for (let i = 0; i < str.length; i += 1){
    for (let j = i + 1; j <= str.length; j += 1) {
      arr.push(str.slice(i, j));
    }
  }
  return arr;
}