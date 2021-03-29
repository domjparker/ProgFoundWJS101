/* Write a function that takes one integer argument, which
may be positive, negative, or zero. This method returns true
if the number's absolute value is odd. You may assume that
 the argument is a valid integer value.
*/

// TODO Problem
//Input = 1 integer > can be positive, negative, or zero
// Output = boolean true if integer is odd
// TODO Examples
/*Examples:
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
*/
// TODO Data Structures
// Given an integer
// if the integer doesn't have a remainder of 0 when divided by 2
// and if the integer isn't zero 
// return boolean true
// otherwise, return boolean false
// TODO Algorithm
// only takes in an integer and returns boolean, so no need for complex data structure
// TODO Code

function isOdd(num) {
  return (Math.abs(num) % 2 === 1);
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true