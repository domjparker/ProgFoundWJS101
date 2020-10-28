/*
Write a function that takes two strings as arguments, determines the longer of 
the two strings, and then returns the result of concatenating the shorter 
string, the longer string, and the shorter string once again. You may assume 
that the strings are of different lengths.
*/
// TODO Problem
/*
INPUT = string1, string2
OUTPUT = result of concatenating shortString + longString + shortString
Two strings are passed through the function. I compare them to each other to 
see which is the longest. Once known, take the short string, add the longer to 
it, and then add the shorter to it again. Return a concatenated string
*/
// TODO Examples
/*
shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
*/
// TODO Data Structures
// two strings / strings
// TODO Algorithm
/*
function takes two strings
if string1 is longer than string2
return result of string2 + string1 + string2.
Otherwise, return result of string1 + string2 + string1
*/
// TODO Code

function shortLongShort(string1, string2) {
  if (string1.length > string2.length) {
    return string2 + string1 + string2;
  } else {
    return string1 + string2 + string1;
  }
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
