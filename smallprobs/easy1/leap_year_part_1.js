/*
In the modern era under the Gregorian Calendar, leap years occur in every year
that is evenly divisible by 4, unless the year is also divisible by 100. If 
the year is evenly divisible by 100, then it is not a leap year, unless the 
year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function 
that takes any year greater than 0 as input, and returns true if the year is 
a leap year, or false if it is not a leap year.
*/
// TODO Problem
/*
INPUT = a number
OUTPUT = boolean (true if number is leap year, false if not)
function takes in a number.
if the number is divisible by 4 or 400 then returns true, unless it is divisible
by 100 upon which it returns false.
*/
// TODO Examples
/*
isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true
*/
// TODO Data Structures
//  numbers and boolean values, only primitive.
// TODO Algorithm
/*
function takes in number.
if number % 400 with remainder of 0, return true.
If number % 100 with remainder of 0, return false.
If number % 4 with remainder of 0, return true.
Otherwise, return false.
*/
// TODO Code

// function isLeapYear(number) {
//   if (number % 400 === 0) {
//     return true;
//   } else if (number % 100 === 0) {
//     return false;
//   } else if (number % 4 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isLeapYear(number) {
  if (!(number % 100 === 0) && (number % 4 === 0) || (number % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true