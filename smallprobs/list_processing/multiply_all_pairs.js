/*
Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.
*/
// TODO Problem
/*
Explicit Requirements:
- INPUT = 2 arrays containing list of numbers
- OUTPUT = 1 new array containing the products of all combinations of number pairs existing between the two arrays. And this array should be sorted in ascending order.
- RULES = neither argument will be empty.

Implicit Requirements:

Questions:
What about 0s?
*/
// TODO Examples
/*
multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
*/
// TODO Data Structures
/*
arrays
*/
// TODO Algorithm
/*
-function takes in 2 arrays.
-set resultArray
-for every argument in array1, 
  -multiply element by each element in array2, pushing into result array on each inner iteration.
return sorted resultArray
*/
// TODO Code

function multiplyAllPairs(array1, array2) {
  let resultArray = [];
  array1.forEach(array1Element => {
    array2.forEach(array2Element => {
      resultArray.push(array1Element * array2Element);
    })
  })
  return resultArray.sort((a, b) => a - b);
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]