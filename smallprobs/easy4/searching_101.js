/*
Write a program that solicits six numbers from the user, then logs a message 
that describes whether or not the sixth number appears amongst the first 
five numbers.
*/
// TODO Problem
/*
INPUT = ask for 6 numbers from user. whole numbers.
OUTPUT = message (string) that describes whether the sixth number appeared
 in the first five numbers.
*/
// TODO Examples
/*
Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.
*/
// TODO Data Structures
// numbers put into an array, array searched for number. Result determines
// 
// TODO Algorithm
/*
declare empty array.
ask separately for 5 numbers, assign to variables, push to array.
ask for 6th number, assign to variable.
if array includes 6th number, console.log that it appears in string form of array.
else console.log that it doesn't appear.

*/
// TODO Code

let readline = require("readline-sync");

let numbersList = [];

numbersList.push(readline.question("Enter the 1st number: "));
numbersList.push(readline.question("Enter the 2nd number: "));
numbersList.push(readline.question("Enter the 3rd number: "));
numbersList.push(readline.question("Enter the 4th number: "));
numbersList.push(readline.question("Enter the 5th number: "));

let lastNum = readline.question("Enter the last number: ");

if (numbersList.some(element => element === lastNum)) {
  console.log(`The number ${lastNum} appears in ${numbersList.join(",")}.`);
} else {
  console.log(`The number ${lastNum} does not appear in ${numbersList}.`);
}


// e.g. to check a comparison between lastNum and the other numbers
// if (numbersList.some(element => element > lastNum)) {
//   console.log(`At least 1 number in ${numbersList.join(",")} is larger than ${lastNum}.`);
// } else {
//   console.log(`No numbers in ${numbersList.join(",")} are larger than ${lastNum}.`);
// }

