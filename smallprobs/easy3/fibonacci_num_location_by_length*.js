/*
Write a function that calculates and returns the index of the first Fibonacci 
number that has the number of digits specified by the argument. (The first 
Fibonacci number has an index of 1.)
*/
// TODO Problem
/*
INPUT = integer
OUTPUT = the index of the first Fibonacci number has the integer amount of digits.
argument always is an integer great than at least 1. 
*/
// TODO Examples
/*
findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74
*/
// TODO Data Structures
// numbers
// TODO Algorithm
/*
function takes in an integer
fibonacci array = [0, 1]
set index to 1, and iterate until integer amount.
  fibonacci Array [i] is equal to fibonacciArray[i] + fibonacciArray[i-1]
  if fibonacci Array[i].toString.length === integer, return i.
*/
// TODO Code

function findFibonacciIndexByLength(integer) {
  let fibonacciArray = [0, 1];
  let i = 1;
  while (String(fibonacciArray[i]).length < integer) {
    fibonacciArray.push(fibonacciArray[i] + fibonacciArray[i - 1]);
    i += 1;
  }
  console.log(i);
}


findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74