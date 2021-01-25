/*
fibonacci function from an earlier exercise isn't very efficient. It starts slowing down with an nth argument value as low as 35. One way to improve the performance of our recursive fibonacci function (and other recursive functions) is to use memoization.

Memoization is an approach that involves saving a computed answer for future reuse, instead of computing it from scratch every time it is needed. In the case of our recursive fibonacci function, using memoization saves calls to fibonacci(nth - 2) because the necessary values have already been computed by the recursive calls to fibonacci(nth - 1).

Refactor the recursive fibonacci function to use memoization.
*/
// TODO Problem
/*
Explicit Requirements:
- INPUT = number
- OUTPUT = number
- RULES = use recursion to find the fibonacci number result
  use memoization to 

Implicit Requirements:

Questions:

*/
// TODO Examples
/*
fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765
*/
// TODO Data Structures
/*
lookup table object to store computed answers. 
*/
// TODO Algorithm
/*

function takes in number
set lookupTable object to empty
  declare recursiveOperation function to take in a num
  if num is in lookupTable, return it
  if num is less than or equal to 2, return 1
  set result to fibonacci(num - 1) + fibonacci(num - 2)
  set lookupTable[num] to result
  return result
return call of recursiveOperation with number passed to it
*/
// TODO Code

function fibonacci(number) {
  let lookupTable = {};

  function recursiveOperation(num) {
    if (lookupTable[num]) return lookupTable[num];

    if (num <= 2) return 1;

    let result = recursiveOperation(num - 1) + recursiveOperation(num - 2);
    lookupTable[num] = result;
    return result;
  }

  return recursiveOperation(number);
}

// or without helper function....
let lookupTable2 = {};

function fibonacci(number) {
  if (number <= 2) return 1;
  else if (lookupTable2[number]) {
    return lookupTable2[number];
  } else {
    lookupTable2[number] = fibonacci(number - 1) + fibonacci(number - 2);
    return lookupTable2[number];
  }
}

// and this one is abit more complex, but more efficient...

let lookupTable3 = { 1: 1, 2: 1 };
let invocations = 0; // to count how often we invoke our function

function fibonacci(nth) {
  invocations += 1; // Count your invocation
  let nth1 = lookupTable3[nth - 1]; // Step 1
  if (!nth1) nth1 = fibonacci(nth - 1); // Step 2

  return (lookupTable3[nth] = nth1 + lookupTable3[nth - 2]); // Step 3 & 4
}

console.log(fibonacci(7), invocations); // 13 in 5 invocations

fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765


