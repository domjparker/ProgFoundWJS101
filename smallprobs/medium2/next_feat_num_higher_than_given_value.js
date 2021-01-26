/*
A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument, and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.


*/
// TODO Problem
/*
Explicit Requirements:
- INPUT = integer
- OUTPUT = integer
- RULES = return next featured number after input integer
  use iteration starting index at next integer from input
  for each iteration, if 
    index is odd
    index can be divided by 7, with no remainder leftover
    each digit in index is unique
      return index

Implicit Requirements:

Questions:
- positive numbers only?
*/
// TODO Examples
/*
featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."
*/
// TODO Data Structures
/*
numbers > array or object used when checking digit uniqueness
*/
// TODO Algorithm
/*
function takes in number
  for loop with index as number + 1
    if index is true, continue
    if index % 7 > 0, continue
    create empty object
    split number into single digit element array
      for each element in array 
        if object with element key is empty, set in object
        else if object with element key is not empty break
      if amount of keys in object is not equal to array length
      continue
      otherwise return number;
    
*/
// TODO Code

const MAX_FEATURED_NUM = 9876543201;

function nextOddDivisBy7(number) {
  do {
    number += 1;
   } while (number % 2 === 0 || number % 7 !== 0)
  
  return number;
}

function uniqueDigits(counter) {
  let obj = {};
  let arr = counter.toString().split("");

  for (let digit of arr) {
    if (!obj[digit]) obj[digit] = digit;
  }

  if (Object.keys(obj).length === arr.length) return true;
  else return false;
}


function featured(num) {
  let counter = nextOddDivisBy7(num);
  while (counter <= MAX_FEATURED_NUM) {
    
      if (uniqueDigits(counter)) return counter;

    else counter += 7;
  }

  return "There is no possible number that fulfills those requirements."
}

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."