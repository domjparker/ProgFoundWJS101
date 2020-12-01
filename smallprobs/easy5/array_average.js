/*
Write a function that takes one argument, an array of integers, and returns the
average of all the integers in the array, rounded down to the integer component
of the average. The array will never be empty, and the numbers will always be 
positive integers.
*/
// TODO Problem
/*
Explicit Requirements:
 - INPUT = array of integers
 - OUTPUT = the average of all the integers, rounded down to the integer component
 of the average.
 - RULES = must be rounded down after averaging.

Implicit Requirements:
 - average > numbers summed and divided by amount of elements in the array.
Questions: 
 - 
*/  
// TODO Examples
/*
average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40
*/
// TODO Data Structures
// array > number
// TODO Algorithm
/*
- function takes in array of integers
- add each element together to get single integer.
- divide single integer by the length of the array.
- round result down to nearest whole integer
- return result
*/
// TODO Code

function average(array) {
  let arraySummed = array.reduce((acc, curr) => {
    return acc + curr
  }, 0);
  let sumAveraged = arraySummed / array.length;
  let averageRoundedDown = Math.floor(sumAveraged);
  return averageRoundedDown;
}

// or

function average(array) {
  return Math.floor(array.reduce((acc, curr) => acc + curr, 0) / array.length);
}


average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40