/*
Given an unordered array and the information that exactly one value in the 
array occurs twice (every other value occurs exactly once), determine which 
value occurs twice. Write a function that will find and return the duplicate 
value that is in the array.
*/
// TODO Problem
/*
Explicit Requirements:
 - INPUT = unordered array of values.
 - OUTPUT = the duplicate value, returned.
 - RULES = one value in the array occurs twice/ is a duplicate.

Implicit Requirements:
  array may include any type of value, primitive and not.
Questions:  
*/
// TODO Examples
/*
findDup([1, 5, 3, 1]);                                // 1
findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73
*/
// TODO Data Structures
// array is given
// TODO Algorithm
/*
 - function takes an array of values.
 - for each value in the array, 
  - if value is not equal to any of the other values in the array, continue.
  - but if the value is equal to any of the other values, return value.

*/
// TODO Code

function findDup(array) {
  let rootComparisonElement;
  for (let i = 0; i < array.length; i += 1) {
    rootComparisonElement = array[i];
    if (array.slice(i + 1).includes(rootComparisonElement)) break;
  }
  return rootComparisonElement;
}

findDup([1, 5, 3, 1]);                                // 1
findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73

// another solution: 
function findDup(array) {
  let seen = {};

  for (let idx = 0; idx < array.length; idx += 1) {
    if (seen[array[idx]]) {
      return array[idx];
    } else {
      seen[array[idx]] = true;
    }
  }

  return undefined;
}

// and other solution: 

function count(array, element) {
  let count = 0;
  for (let idx = 0; idx < array.length; idx++) {
    if (array[idx] === element) {
      count += 1;
    }
  }
  return count;
}

function findDup(array) {
  return array.find(element => count(array, element) === 2);
}

// this one loops through and with each iteration, the element at the current 
// index is checked to see if it equals the current element passed to the 
// count function. The duplicate will be the one that causes the count to return
// as 2.