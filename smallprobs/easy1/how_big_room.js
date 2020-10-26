/*
Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.
*/
// TODO Problem
// is a program
// asks user to input length amount and width amount IN METERS
// console.logs the area (L * W) in square meters and square feet.
// What if one input is 0 or not a whole number?
// TODO Examples
/*
Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).
*/
// TODO Data Structures
// no complex data structures. just numbers
// TODO Algorithm
// require readLineSync
// ask user for length of room in meters
// set answer to length variable
// ask user for width of room in meters
// set answer to width variable
// multiply length by width to get area in square meters
// multiply square meters by foot conversion amount to get area in square feet.
// log both area in meters and area in feet to console
// TODO Code

const READLINE = require('readline-sync');
const SQUARE_FEET_IN_A_SQUARE_METER = 10.7639;

console.log("Enter the length of the room in meters:")
let lengthInMeters = READLINE.question();
console.log("Enter the width of the room in meters:")
let widthInMeters = READLINE.question();
let areaInSquareMeters = (lengthInMeters * widthInMeters).toFixed(2);
let areaInSquareFeet = (areaInSquareMeters * SQUARE_FEET_IN_A_SQUARE_METER).toFixed(2);

console.log(`The area of the room is ${areaInSquareMeters} square meters (${areaInSquareFeet} square feet).`)
