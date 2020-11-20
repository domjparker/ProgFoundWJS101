/*
Write a function that takes an array of numbers, and returns an array with the 
same number of elements, with each element's value being the running total 
from the original array.
*/
// TODO Problem
/*
INPUT = array of numbers
OUTPUT = array with same number of elements, but each element must be the sum
total of the elements before it.
*/
// TODO Examples
/*
runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []
*/
// TODO Data Structures
// arrays
// TODO Algorithm
/*
function takes in array of numbers.
set a running total to equal 0.
set an empty 2nd array.
map over original array. For each element, new element will become sum of original element plus running total.
running total will also become running total plus original element.
return 2nd array.
*/
// TODO Code

function runningTotal(array) {
  let runningTotal = 0;
  let resultArray = [];
  for (let i = 0; i < array.length; i += 1) {
    resultArray[i] = runningTotal += array[i];
  }
  return resultArray;
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []