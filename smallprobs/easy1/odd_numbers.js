/*
Log all odd numbers from 1 to 99, inclusive, to the console. Log all numbers on separate lines.
*/
// TODO Problem
// Console.log all odd numbers between 1 and 99, including these, on separate lines. Should end 
// up with 99 lines with an individual number on each.
// Input = none
// Output = as below
// TODO Examples
// 1, 3, 5,... 95, 97, 99
 // TODO Data Structures
//  no complex DS needed 
 // TODO Algorithm
//  When not given any inputs, 
// starting at the number 1, loop over each number until you reach 99
// when incrementing, increment by 2 so that i always equals an odd number.
// During the first and each following iteration, log the number to the console.
 // TODO Code

function logTo99() {
  for (let i = 1; i <= 99; i += 2) {
    console.log(i);
  }
}

logTo99();