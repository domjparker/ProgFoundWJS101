/*
In the previous exercise, we developed a recursive solution for computing the nth Fibonacci number. In a language that is not optimized for recursion, some (but not all) recursive functions can be extremely slow and may require massive quantities of memory and/or stack space. If you tested for bigger nth numbers, you might have noticed that getting the 50th fibonacci number already takes a significant amount of time.

Fortunately, every recursive function can be rewritten as a non-recursive (or procedural) function.

Rewrite your recursive fibonacci function so that it computes its results without using recursion.
*/
// TODO Problem
/*
Explicit Requirements:
- INPUT = number
- OUTPUT = number
- RULES = compute fibonacci number that corresponds to the integer input
  don't use recursion

Implicit Requirements:

Questions:

*/
// TODO Examples
/*
fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050
*/
// TODO Data Structures
/*
numbers
*/
// TODO Algorithm
/*
function takes in integer
  if integer less than or equal to 2, return 1
  else 
    set num1 = 1
    set num2 = 1
    set accumulator = 0
    for an iterative loop, ending at (integer - 2)
      accumulator = num1 + num2
      num1 = num2
      num2 = accumulator
    return accumulator
*/
// TODO Code

function fibonacci(num) {
  if (num <= 2) return 1;
  else {
    let num1 = 1;
    let num2 = 1;
    let accumulator = 0;
    for (let i = 0; i < num - 2; i += 1) {
      accumulator = num1 + num2;
      num1 = num2;
      num2 = accumulator;
    }
    return accumulator;
  }
}

// or can also use array to hold the values

function fibonacci(num) {
  let numArray = [1, 1];

  for (let i = 0; i < num - 2; i += 1) {
    numArray = [numArray[1], numArray[0] + numArray[1]];
  }

  return numArray[1];
}

fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050