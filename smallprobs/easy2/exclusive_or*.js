/*
The || operator returns a truthy value if either or both of its operands are 
truthy, a falsey value if both operands are falsey. The && operator returns a 
truthy value if both of its operands are truthy, and a falsey value if either 
operand is falsey. This works great until you need only one of two conditions 
to be truthy, the so-called exclusive or.

In this exercise, you will write a function named xor that takes two arguments,
 and returns true if exactly one of its arguments is truthy, false otherwise. 
 Note that we are looking for a boolean result instead of a truthy/falsey value 
 as returned by || and &&.
*/
// TODO Problem
/*
INPUT = two values
OUTPUT = boolean: true if exactly one of its arguments is truthy, and falsey if
both are falsey or truthy 
*/
// TODO Examples
/*
console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);
*/
// TODO Data Structures
// primitive (spec numbers,strings,booleans)
// TODO Algorithm
/*
function takes in 2 arguments
helper function to determine whether each argument is truthy
if true && true, return false
if false && false, return false
otherwise, return true
*/
// TODO Code


// function truthyOrFalsy(val) {
//   if (val) {
//       return true
//   } else {
//       return false;
//   }
// }

// function xor(value1, value2) {
//   value1 = truthyOrFalsy(value1);
//   value2 = truthyOrFalsy(value2);
//   if ((value1 === true) && (value2 === true)) {
//     return 0;
//   } else if ((value1 === false) && (value2 === false)) {
//     return 0;
//   } else return true;
// }


function xor(value1, value2) {
  if ((value1 && !value2) || (value2 && !value1)) {
    return true;
  } 
  return false;
}


console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

// or...
function xor(arg1, arg2) {
  if ((arg1 && arg2) || (!arg1 && !arg2)) return false;
  return true;
}