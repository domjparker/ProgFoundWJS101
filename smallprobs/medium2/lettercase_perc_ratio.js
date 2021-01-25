/*
Write a function that takes a string, and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.
*/
// TODO Problem
/*
Explicit Requirements:
- INPUT = string
- OUTPUT = object
- RULES = need to calculate percentages
  total characters / lowercase characters
  total characters / uppercase characters
  total characters / non-letters (spaces and numbers)
  percentage values must be strings of floats, with fixed digit decimals of 2.

Implicit Requirements:

Questions:

*/
// TODO Examples
/*
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
*/
// TODO Data Structures
/*
string > object that includes numbers converted to strings. 
*/
// TODO Algorithm
/*
function takes in string
  declare empty object
  total = get string length
  check string for uppercase letters
  check string for lowercase letters
  get percentages for each and insert into object
  return object
*/
// TODO Code

function letterPercentages(string) {
  let percentObj = {};
  let lowercase = string.match(/[a-z]/g) || [];
  let uppercase = string.match(/[A-Z]/g) || [];
  let nonLetter = string.length - (uppercase.length + lowercase.length);
  percentObj["lowercase"] = ((lowercase.length / string.length) * 100 ).toFixed(2);
  percentObj["uppercase"] = ((uppercase.length / string.length) * 100).toFixed(2);
  percentObj["neither"] = ((nonLetter / string.length) * 100).toFixed(2);
  return percentObj;
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }