/*
Write a function that rotates the last count digits of a number. To perform
the rotation, move the first of the digits that you want to rotate to the end
and shift the remaining digits to the left.
*/
// TODO Problem
/*
Explicit Requirements:
- INPUT = number, and integer representing the amount of digits from the end
that locates the rotating number.
- OUTPUT = string, with rotating number moved all the way to the left the being
the last digit in the number.
- RULES =

Implicit Requirements:

Questions:

*/
// TODO Examples
/*
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917
*/
// TODO Data Structures
/*
number > string > array > number
*/
// TODO Algorithm
/*
function takes in two arguments
  convert number to string and then to array
  locate which digit in array and set to a variable
  remove digit from array, using splice
  add digit to array from variable.
  return array

*/
// TODO Code

function rotateRightmostDigits(mainNum, numFromEnd) {
  let arrayNum = mainNum.toString().split('');
  let rotatingDigit = arrayNum.splice(arrayNum.length - numFromEnd, 1).toString();
  arrayNum.push(rotatingDigit); 
  return Number(arrayNum.join(''));
}

/* or...
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
*/

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917