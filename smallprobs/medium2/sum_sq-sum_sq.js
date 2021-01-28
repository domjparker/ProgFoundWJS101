/*
Write a function that computes the difference between the square of the sum of the first count positive integers and the sum of the squares of the first count positive integers.
*/
// TODO Problem
/*
Explicit Requirements:
- INPUT = number
- OUTPUT = number
- RULES = get all numbers from 1 up to and including input number
  sum these numbers and square them
  also square these numbers and sum them
  subtract 2nd lot from 1st.

Implicit Requirements:
  'first count positive integers' are numbers leading up to and including originally given number.
Questions:

*/
// TODO Examples
/*
sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150
*/
// TODO Data Structures
/*
arrays. create two arrays to house numbers and squares of nums
*/
// TODO Algorithm
/*
function takes in positive integer
  create 2 empty arrays for first count numbers and squares of these
  for each index starting at 0 and up to and including input integer
    push index into first array
    push index squared into 2nd array
  sum both arrays
  subtract 2nd array from 1st
  return result
*/
// TODO Code

function sum(array) {
  return array.reduce((acc, curr) => acc + curr);
}

function sumSquareDifference(num) {
  let firstCountIntegers = [];
  let firstCountSquares = [];

  for (let i = 1; i <= num; i += 1) {
    firstCountIntegers.push(i);
    firstCountSquares.push(i**2);
  }

  return ((sum(firstCountIntegers)**2) - sum(firstCountSquares));
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150

// better to do like this...

function sumSquareDifference(num) {
  let firstCountIntegers = 0;
  let firstCountSquares = 0;

  for (let i = 1; i <= num; i += 1) {
    firstCountIntegers += i;
    firstCountSquares += i**2; // could do Math.pow(i, 2)
  }

  return ((firstCountIntegers**2) - firstCountSquares);
}