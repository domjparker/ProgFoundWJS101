/*
Write a function that takes a string argument, and returns a list of all substrings that start from the beginning of the string, ordered from shortest to longest.
*/
// TODO Problem
/*
Explicit Requirements:
- INPUT = string argument
- OUTPUT = list of all substrings that start from the beginning of the string, from shortest to longest
- RULES = 

Implicit Requirements:
-list returned as array

Questions:
-what about spaces?

*/
// TODO Examples
/*
leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
*/
// TODO Data Structures
/*
string > array > map
*/
// TODO Algorithm
/*
-function takes in string.
-set arrayResult= [];
-set stringAccumulator = ""
-string split into array.
-for each element in array
  -stringAccumulator = stringAccumulator + element
  -push to arrayResult
-return arrayResult;

or: 
-function takes in string.
-set stringAccumulator = ""
-string split into array.
-map each element in array
  -stringAccumulator = stringAccumulator + element
  return stringAccumulator;
-return arrayResult;
*/
// TODO Code

function leadingSubstrings(string) {
  let arrayResult = [];
  let stringAccumulator = "";
  string.split("").forEach(element => {
    stringAccumulator += element;
    arrayResult.push(stringAccumulator);
  })
  return arrayResult;
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// or...

function leadingSubstrings(string) {
  let stringAccumulator = "";
  return string.split("").map(element => {
    return stringAccumulator += element;
  });
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// or...

function leadingSubstrings(string) {
  let result = [];
  for (let length = 1; length <= string.length; length += 1) {
    result.push(string.slice(0, length))
  }

  return result;
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]