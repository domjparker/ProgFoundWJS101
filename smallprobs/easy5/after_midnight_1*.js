/*
The time of day can be represented as the number of minutes before or after 
midnight. If the number of minutes is positive, the time is after midnight. If 
the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns 
the time of day in 24 hour format (hh:mm). Your method should work with any 
integer input.
*/
// TODO Problem
/*
Explicit Requirements:
 - INPUT = integer
 - OUTPUT = string of numbers representing hours and minutes, with colon between
 - RULES = result is the time of day in 24 hour format. Cannot use js 'Date'
 class methods. Daylight savings and other complications don't apply.

Implicit Requirements:
- result must be four digits, including preceding zeros. can take positive and
negative integers.
Questions: 
*/
// TODO Examples
/*
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
*/
// TODO Data Structures
// integers
// TODO Algorithm
/*
 -function takes an integer
 - 60 minutes in an hour
 - 24 hours in a day.
 - divide by 'minutes in an hour' to get amount of hours
 - remainder by 'minutes in an hour' to get amount of minutes.
 - if amount of hours is greater than 'dayHours'
    - remainder by dayHours to get 'hours'
 - if integer is positive:
 - if integer is negative: 
  - subtract hours from dayHours.
- return string literal of hours colon minutes.
*/
// TODO Code
const MINS_IN_HOUR = 60;
const HOURS_IN_DAY = 24;

function timeOfDay(number) {
  let hoursAmount = Math.floor(number / MINS_IN_HOUR);
  let minutesAmount = number % MINS_IN_HOUR;
  if (hoursAmount % HOURS_IN_DAY !== 0) {
    hoursAmount %= HOURS_IN_DAY;
  }
  if (Math.sign(number) === -1) {
    hoursAmount = HOURS_IN_DAY + hoursAmount;
    minutesAmount = MINS_IN_HOUR + minutesAmount;
  }
  let finalHours = hoursAmount.toString().padStart(2, "0");
  let finalMinutes = minutesAmount.toString().padStart(2, "0");
  return finalHours + ":" + finalMinutes;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
