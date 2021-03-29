/*
Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, 
and so on) to the string representation of that integer.

You may not use any of the standard conversion functions available in 
JavaScript, such as String(), Number.prototype.toString, or an expression such 
as '' + number. Your function should do this the old-fashioned way and 
construct the string by analyzing and manipulating the number.
*/
// TODO Problem
/*
INPUT = non-negative integer
OUTPUT = string representation of that integer.
*/
// TODO Examples
/*
integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"
integerToString(1234567890);      // "1234567890"
*/
// TODO Data Structures

// TODO Algorithm
/*
function takes in a number.
create empty array.
while there is a number, get remainder of dividing number by 10 and push it 
into array. number is then equal to number divided by 10, rounded down.
return result of reversing array and joining into a string.

*/
// TODO Code

function integerToString(num) {
  let digits = [];
  do {
    digits.unshift(num % 10);
    num = Math.floor(num / 10);
  } while (num);
  return digits.join(''); 
}


// alteratively, could be written like this...

// const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// function integerToString(number) {
//   let result = '';

//   do {
//     let remainder = number % 10;
//     console.log(remainder)
//     number = Math.floor(number / 10);
//     console.log(number)
//     result = DIGITS[remainder] + result;
//     console.log(result)
//   } while (number > 0);

//   return result;
// }


console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
console.log(integerToString(1234567890));      // "1234567890"