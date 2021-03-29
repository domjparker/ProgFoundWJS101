/*
The Fibonacci series is a sequence of numbers in which each number is the sum of the previous two numbers. The first two Fibonacci numbers are 1 and 1. The third number is 1 + 1 = 2, the fourth is 1 + 2 = 3, the fifth is 2 + 3 = 5, and so on. In mathematical terms, this can be represented as:
F(1) = 1
F(2) = 1
F(n) = F(n - 1) + F(n - 2) where n > 2

This simple sequence can be computed using a recursive function. A recursive function is one in which the function calls itself. For example, the following function is a recursive function that computes the sum of all integers between 1 and n:
function sum(num) {
  console.log(num)
  if ( num === 1) {
    return 1;
  }
  return num + sum(num - 1);
}

A good recursive function has three primary qualities:
1. It calls itself at least once.
2. It has an ending condition — e.g., if (num === 1), in the sum function above.
3. The results of each recursion are used in each step — e.g., num + sum(num - 1) uses sum(num - 1).

Write a recursive function that computes the nth Fibonacci number, where nth is an argument passed to the function.
*/
// TODO Problem
/*
Explicit Requirements:
- INPUT = integer
- OUTPUT = integer
- RULES = must use recursion
  compute fibonacci number that corresponds to the integer input

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
numbers
*/
// TODO Algorithm
/*
function takes in number
  if number is less than or equal to 2, return 1
  return function(number - 1) + function(num - 2)
  
*/
// TODO Code

function fibonacci(num) {
  if (num <= 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765


/*
The function uses the return values of calling itself in order to calculate the
eventual total. This only works where there is the ending condition of a base number values (or in this case, two number values 2 = 1, and 1 = 1). Therefore,
fibonacci(4) = (fib(4-1) = 2) + (fib(4-2) = 1)
*/