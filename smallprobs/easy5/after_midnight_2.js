/*
As seen in the previous exercise, the time of day can be represented as the
number of minutes before or after midnight. If the number of minutes is
positive, the time is after midnight. If the number of minutes is negative,
the time is before midnight.

Write two functions that each take a time of day in 24 hour format, and return
the number of minutes before and after midnight, respectively. Both functions
should return a value in the range 0..1439.

You may not use javascript's Date class methods.
*/
// TODO Problem
/*
Explicit Requirements:
 - INPUT = string representing time of day in 24 hour format
 - OUTPUT = depending on which function, number of minutes before or after
 midnight.
 - RULES = write 2 functions. Value should be between 0 - 1439.

Implicit Requirements:

Questions:
*/
// TODO Examples
/*
console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
*/
// TODO Data Structures
// string > number
// TODO Algorithm
/*
afterMidnight function takes in string.
convert string to numbers of hours and minutes (helper function)
  calculate total minutes
if total minutes is greater than total hours in day
  remainder total minutes by total hours in day
return total minutes.

beforeMidnight function takes in string.
convert string to numbers of hours and minutes (helper function)
  calculate initial total minutes
if total minutes is greater than total hours in day
  remainder initial total minutes by total hours in day
total minutes before midnight subtracted from total hours in day.
return total minutes.
*/
// TODO Code

const MINS_IN_HOUR = 60;
const MINS_IN_DAY = 1440;

function convertStringToTotalNumber(string) {
  let hours = Number(string.substring(0, 2));
  let minutes = Number(string.substring(3));
  let totalMinutes = (hours * MINS_IN_HOUR) + minutes;
  return totalMinutes;
}

function afterMidnight(string) {
  let resultMins = convertStringToTotalNumber(string);
  if (resultMins > MINS_IN_DAY || resultMins === MINS_IN_DAY) {
    resultMins %= MINS_IN_DAY;
  }
  return resultMins;
}

function beforeMidnight(string) {
  let resultMins = afterMidnight(string);
  if (resultMins !== 0) resultMins = MINS_IN_DAY - resultMins;
  return resultMins;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);