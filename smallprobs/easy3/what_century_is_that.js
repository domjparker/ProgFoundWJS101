/*
Write a function that takes a year as input and returns the century. The return
value should be a string that begins with the century number, and ends with 
'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 
comprise the 20th century.
*/
// TODO Problem
/*
INPUT = integer
OUTPUT = string, beginning with the century number and followed by the 
appropriate number suffix.
*/
// TODO Examples
/*
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
*/
// TODO Data Structures
// numbers, and resulting string.
// TODO Algorithm
/*
numbers above 99 to be divided by 100 and rounded up using Math.ceil();
correlate with object containing key value pairs that represent suffixes.

suffixes = 
1 = st
2 = nd
3 = rd
4 - 19, (num % 10 === 0) = th

function takes in a number.
number turned into a string.
if the last digit of the number string is a 1, concat st.
if the last digit of the number string is a 2, concat nd.
if the last digit of the number string is a 3, concat rd.
if the last digit of the number string is > 3 but less than 20, or
has remainder of 0 when divided by 10, concat th.

function takes in a number.
divide number by 100 and round up to nearest integer
call suffixes function on the number.


*/
// TODO Code

function centuryWithSuffix(number) {
  let numberString = String(number);
  let lastDigit = numberString[numberString.length - 1];
  let last2Digits = numberString[numberString.length - 2] + lastDigit;
  if ((lastDigit > 3) && (lastDigit < 10)) {
    return numberString + "th"; 
  } else if ((last2Digits > 10) && (last2Digits < 20)) {
    return numberString + "th";
  } else if (number % 10 === 0) {
    return numberString + "th";
  } else if (numberString[numberString.length - 1] === "1") {
    return numberString + "st";
  } else if (numberString[numberString.length - 1] === "2") {
    return numberString + "nd";
  } else if (numberString[numberString.length - 1] === "3") {
    return numberString + "rd";
  }
}

function century(number) {
  let centuryNum = Math.ceil(number / 100); 
  return centuryWithSuffix(centuryNum);
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"