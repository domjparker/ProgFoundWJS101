/*
This is a continuation of the previous exercise.

The British Empire adopted the Gregorian Calendar in 1752, which was a leap 
year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar, 
leap years occur in any year that is evenly divisible by 4.

Using this information, update the function from the previous exercise to 
determine leap years both before and after 1752.
*/
// TODO Problem
/*
INPUT = number (representing a year)
OUTPUT = boolean (true if leap year, false if not leap year)
function takes a number and returns true if the number is divisible by 4, but
only the number is less than 1752. If the number is greater than 1752, then the
the function returns true if the number is divisible by 4 or 400 with a remainder of 0,
unless the number is divisible by 100 with a remainder of 0 (in which case it returns 
 false).
Question: what if negative number?
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
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true
*/
// TODO Data Structures
// TODO Algorithm
/*
function takes number.
If number equal to or greater than 1752, run this:
 If number % 400 === 0, and not number % 100 === 0, and number % 4 === 0
 return true.
 Otherwise return false.
If number is less than 1752, run this: 
 If number % 4 === 0,
 return true
*/
// TODO Code

function isLeapYear(number) {
  if (number >= 1752) {
    return ((number % 400 === 0) || (number % 4 === 0) && !(number % 100 === 0));
  } else {
    return number % 4 === 0;
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
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true