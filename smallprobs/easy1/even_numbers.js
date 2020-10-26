/*
Log all even numbers from 1 to 99, inclusive, to the console. Log all numbers on separate lines.
*/
// TODO Problem
// console log EVEN numbers between 1 - 99, on separate lines.
// TODO Examples
// result should be 2, 4, 6, 8,... 94, 96, 98.
// TODO Data Structures
// no complex data structures needed. using only numbers
// TODO Algorithm
// starting at 1, loop over each following number, incrementing up to 99.
// for each iteration, if the number is odd, console.log it.
// TODO Code

function evenNumbersTo99() {
  for (let i = 1; i <= 99; i += 1) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

evenNumbersTo99();