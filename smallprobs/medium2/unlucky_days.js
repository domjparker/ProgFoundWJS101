/*
Some people believe that Fridays that fall on the 13th day of the month are considered to be unlucky days. Write a function that takes a year as an argument, and returns the number of Friday the 13ths in that year. You may assume that the year is greater than 1752, which is when the United Kingdom adopted the modern Gregorian Calendar. You may also assume that the same calendar will remain in use for the foreseeable future.
*/
// TODO Problem
/*
Explicit Requirements:
- INPUT = 4-digit year
- OUTPUT = number representing how many Fridays fall on the 13th of each month for that year.
- RULES = year input will be greater than 1752, but can be past current year.
  will need to use input year to pass iteratively over each month in that year, checking if 13th
  day falls on 6th day of the week.
  will need to employ a counter to track matches
  iteration only needs to happen 12 times.


Implicit Requirements:

Questions:

*/
// TODO Examples
/*
fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2
*/
// TODO Data Structures
/*
numbers for dates
*/
// TODO Algorithm
/*
function takes in year
  set counter to 0
  for iterative loop from 0 to 11
    create new Date using year, index, and day (13)
    if date weekday is equal to 5
      counter increments by 1
  return counter

*/
// TODO Code

function fridayThe13ths(year) {
  let counter = 0;
  for (let i = 0; i < 12; i += 1) {
    let dateEachMonth = new Date(year, i, 13);
    if (dateEachMonth.getDay() === 5) counter += 1;
  }
  return counter;
}

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2
fridayThe13ths(2054);      // 3?



// could also do...

function fridayThe13ths(year) {
  let thirteenths = [];

  for (let month = 0; month < 12; month += 1) {
    thirteenths.push(new Date(year, month, 13));
  }

  return thirteenths.reduce((count, day) => {
    return day.getDay() === 5 ? (count + 1) : count;
  }, 0);
}
