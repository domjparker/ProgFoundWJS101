/*
Write a function that takes one argument, a positive integer, and returns a 
string of alternating '1's and '0's, always starting with a '1'. The length of 
the string should match the given integer.
*/
// TODO Problem
/*
INPUT = positive integer
OUTPUT = string of alternating '1's and '0's, starting with '1'.
what if no integer passed?
*/
// TODO Examples
/*
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
*/
// TODO Data Structures
// numbers with iterating loop
// TODO Algorithm
/*
function takes in an integer.
set empty string.
iterating or while loop uses incrementing index up until the integer amount.
if index is even, add "1" to the string;
else add "0" to the string.
return string.
*/
// TODO Code

function stringy(integer) {
  resultString = '';
  index = 0;
  while (index < integer) {
    let number = (index % 2 === 0) ? "1" : "0";
    resultString += number;
    index += 1;
  }
  return resultString;
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"