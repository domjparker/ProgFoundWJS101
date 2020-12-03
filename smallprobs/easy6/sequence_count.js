/*
Create a function that takes two integers as arguments. The first argument is a
count, and the second is the starting number of a sequence that your function
will create. The function should return an array containing the same number of
elements as the count argument. The value of each element should be a multiple
of the starting number.

You may assume that the count argument will always be an integer greater than
or equal to 0. The starting number can be any integer. If the count is 0, the
function should return an empty array.
*/
// TODO Problem
/*
Explicit Requirements:
 - INPUT = 2 integers
 - OUTPUT = array of integers
 - RULES = first integer is a count integer, second integers is start of a
 sequence. should result with an array of integers, the first of which is the
 2nd input argument integer, and each consecutive integer should be a result of
 multiplying that number by the sequence of integers leading up the count number

Implicit Requirements:

Questions:

*/
// TODO Examples
/*
sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []
*/
// TODO Data Structures
/*
array of integers
*/
// TODO Algorithm
/*
 - function takes in count integer and start integer.
 - declare array empty
 - iterative loop
  - each iteration, add index/counter multiplied by start to array.
 - return array.
*/
// TODO Code

function sequence(countNum, startNum) {
  let resultArray = [];
  let counter = 1;
  while (counter <= countNum) {
    resultArray.push(counter * startNum);
    counter += 1;
  }
  return resultArray;
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []

// or an interesting one
function sequence(count, startingNum) {
  return Array.from(Array(count).keys(), num => (num + 1) * startingNum); 
};