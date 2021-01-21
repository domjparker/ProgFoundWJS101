/*
Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument, and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.
*/
// TODO Problem
/*
Explicit Requirements:
- INPUT = integer
- OUTPUT = maximum rotation of input number
- RULES = will loop through the number for the amount of digits minus 1.
  rotate left-most number on first iteration,
  then left-most number + 1 on next iteration, and so on...
  

Implicit Requirements:

Questions:

*/
// TODO Examples
/*
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845
*/
// TODO Data Structures
/*
iterate (num to string to num)
*/
// TODO Algorithm
/*
function takes in number
  convert to string and get length
  for length of string - 1 descending
  rotateRightmostDigits(number, index)
  return result
*/
// TODO Code

function rotateRightmostDigits(number, count) {
  let numberString = String(number);
  let firstPart = numberString.slice(0, numberString.length - count);
  let secondPart = numberString.slice(numberString.length - count);
  let resultString = firstPart + rotateString(secondPart);

  return Number(resultString);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}

function maxRotation(num) {
  let numLength = num.toString().length;
  for (let i = numLength; i > 1; i -= 1) {
    num = rotateRightmostDigits(num, i);
  }
  return num;
}


maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845