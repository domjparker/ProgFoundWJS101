/*
Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.
*/
// TODO Problem
/*
Explicit Requirements:
- INPUT = positive integer
- OUTPUT = a positive integer representing the sum of input integer's individual digits
- RULES = only use iterative methods for iterative operations.

Implicit Requirements:

Questions:

*/
// TODO Examples
/*
sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45
*/
// TODO Data Structures
/*
number > string > split to array > reduce > number
*/
// TODO Algorithm
/*
-function takes in number
-convert number to array of digits, via string
-reduce array elements to sum
-return sum converted to number
*/
// TODO Code

function sum(num) {
  let numArray = Array.from(String(num), Number);
  return numArray.reduce((acc, curr) => acc + curr, 0);
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45


// or...

function sum(num) {
  let numArray = Array.from(String(num), Number);
  let sumTotal = 0;
  numArray.forEach(element => sumTotal += element)
  return sumTotal;
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45

// or ...

function sum(int) {
  let result = 0;
  int.toString().split("").forEach(num => {
    return result += Number(num);
  });
  return result;
}

// or ..

function sum(int) {
  return int.toString().split("").reduce((a, c) => a + Number(c), 0);
}