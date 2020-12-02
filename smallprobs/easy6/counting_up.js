/*
Write a function that takes an integer argument, and returns an array containing
all integers between 1 and the argument (inclusive), in ascending order.
*/
// TODO Problem
/*
Explicit Requirements:
 - INPUT = integer
 - OUTPUT = array containing all integers from 1 to the argument
 - RULES = integer will always be positive.

Implicit Requirements:

Questions:

*/
// TODO Examples
/*
sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]
*/
// TODO Data Structures
/*
number to array
*/
// TODO Algorithm
/*
 - function takes in number
 - create empty result array
 - iterative loop up to number
  - add counter to array
 - return array
*/
// TODO Code

function sequence(num) {
  let resultArray = [];
  let counter = 1;
  do {
    resultArray.push(counter);
    counter += 1;
  } while (counter <= num);
  return resultArray;
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]