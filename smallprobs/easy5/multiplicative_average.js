/*
Write a function that takes an array of integers as input, multiplies all of 
the integers together, divides the result by the number of entries in the 
array, and returns the result as a string with the value rounded to three 
decimal places.
*/
// TODO Problem
/*
Explicit Requirements:
 - INPUT = array of integers
 - OUTPUT = string with value rounded to three decimal places.
 - RULES = all input integers must be multiplied together. resulting number
 needs to then be divided by the amount of original entries, then converted 
 to a string with specified number of decimal places (3).

Implicit Requirements:
 - 
Questions: 
 - how should the 3rd decimal be rounded?
*/
// TODO Examples
/*
multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
*/
// TODO Data Structures
// integer > float > string.
// TODO Algorithm
/*
-function takes in an array of integers.
-iterate through array, multiplying each number/resulting number by the next
integer in the array.
-divide resulting number by length of input array.
-round result to fixed number of decimals (3).
-return result after converting to string.
*/
// TODO Code

function multiplicativeAverage(array) {
  let reducedArray = array.reduce((acc, curr) => {
    return acc * curr
  }, 1);
  let dividedResult = reducedArray / array.length;
  return dividedResult.toFixed(3);
}

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 4, 6]);                   // "16.000"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
