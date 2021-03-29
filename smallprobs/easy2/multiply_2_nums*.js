/*
Create a function that takes two arguments, multiplies them together, and returns the result.
*/
// TODO Problem
/*
INPUT = two arguments, presumably numbers.
What if one or both are not numbers? validate?
OUTPUT = returns multiplied result of numbers.
*/
// TODO Examples
/*
console.log(multiply(5, 3) === 15); // logs true
console.log(multiply(0, 3) === 0); // logs true
console.log(multiply(5, "j"); // logs NaN
*/
// TODO Data Structures
// numbers
// TODO Algorithm
/*
function take in two arguments.
result equals arg1 * arg2
return result
*/
// TODO Code

let multiply = (argument1, argument2) => argument1 * argument2;

console.log(multiply(5, 3) === 15); // logs true
console.log(multiply(0, 3) === 0); // logs true
console.log(multiply(5, "j")); // logs NaN