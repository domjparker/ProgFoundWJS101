/*
Write a function that takes an array of numbers, and returns the sum of the sums of each leading subsequence for that array. You may assume that the array always contains at least one number.
*/
// TODO Problem
/*
Explicit Requirements:
- INPUT = array of numbers
- OUTPUT = 
- RULES = the input array will not be empty

Implicit Requirements:

Questions:

*/
// TODO Examples
/*
sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35
*/
// TODO Data Structures
/*
array of nums > number
*/
// TODO Algorithm
/*
-function takes in array of nums
-set workingSum = 0.
-set workingArray = []
-for the length of the array
  -push workingSum + current number in iteration into workingArray
-reduce working array
-return result 
*/
// TODO Code

function sumOfSums(inputArray) {
  let workingSum = 0;
  let workingArray = [];
  for (let i = 0; i < inputArray.length; i += 1) {
    workingArray.push(workingSum + inputArray[i]);
    workingSum += inputArray[i];
  }
  return workingArray.reduce((acc, curr) => acc + curr);
}


sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

// or....

function sumOfSums(numbers) {
  let sumTotal = 0;
  for (let idx = 1; idx <= numbers.length; idx++) {
    sumTotal += numbers.slice(0, idx).reduce((accum, num) => accum + num);
  }
  return sumTotal;
}

// above solution is better, but this is just different:

function sumOfSums(numbers) {
  let sumTotal = 0;
  numbers = numbers.reverse();
  for (let idx = 0; idx < numbers.length; idx += 1) {
    sumTotal += numbers.slice(idx).reduce((accum, num) => accum + num);
  }
  return sumTotal;
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

// also:

function sumOfSums(numbers) {
  return numbers.map((_, index) => {
    return numbers.slice(0, index + 1).reduce((acc, curr) => acc + curr)  
  }).reduce((acc, curr) => acc + curr);
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35


// or ...

function sumOfSums(arr) {
  return arr.map((n, i) => {
    return n = arr.slice(0, i + 1).reduce((a, c) => a + c, 0)
  }).reduce((a, c) => a + c, 0);
}