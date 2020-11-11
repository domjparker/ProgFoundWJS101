/*
Write a function that determines the mean (average) of the three scores passed 
to it, and returns the letter associated with that grade.

Numerical score letter grade list:

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'
Tested values are all between 0 and 100. There is no need to check for negative
 values or values greater than 100.
*/
// TODO Problem
/*
INPUT = three number arguments between 0 and 100.
OUTPUT = the letter grade corresponding to the mean (average) of the three numbers
*/
// TODO Examples
/*
getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
*/
// TODO Data Structures
// use an object to hold grade letter key value pairs. Otherwise, numbers
// TODO Algorithm
/*
create object letter grades.

function takes in 3 numbers.
divide sum of 3 numbers to get mean
dividedMean = mean divided 10, rounded up to nearest integer
if dividedMean is 6 or less, return "F".
else return value of pair in letter grades object corresponding to divided mean.
*/
// TODO Code

const LETTER_GRADES = {
  10: "A",
  9: "B",
  8: "C",
  7: "D",
}

function getGrade(num1, num2, num3) {
  let meanAverage = (num1 + num2 + num3) / 3;
  let simplifiedMean = Math.ceil(meanAverage / 10);
  if (simplifiedMean <= 6) {
    return "F"
  };
  return LETTER_GRADES[String(simplifiedMean)];
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"

// function getGrade(grade1, grade2, grade3) {
//   let average = (grade1 + grade2 + grade3) / 3;

//   if (average >= 90 && average <= 100) {
//     return 'A';
//   } else if (average >= 80 && average < 90) {
//     return 'B';
//   } else if (average >= 70 && average < 80) {
//     return 'C';
//   } else if (average >= 60 && average < 70) {
//     return 'D';
//   } else {
//     return 'F';
//   }
// }