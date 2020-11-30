/*
Write a function that takes one argument, a positive integer, and returns a 
list of the digits in the number.
*/
// TODO Problem
/*
Explicit Requirements:
 - INPUT = a positive integer
 - OUTPUT = a list of positive integers
 - RULES = the list of positive integers is made up of the digits in the input 
 integer.

Implicit Requirements:
 - result list should be an array.

Questions:  
 - what about 0? an empty array?
*/
// TODO Examples
/*
digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]
*/
// TODO Data Structures
// number > array
// TODO Algorithm
/*
 - function takes in number.
 - convert number to string.
 - for each character in the string, put into new array.
 - convert each string number in the array to an actual number.
 - return new array.
*/
// TODO Code

function digitList(number) {
  let numberString = number.toString();
  let arrayOfNumStrings = numberString.split('');
  return arrayOfNumStrings.map(element => {
    return Number(element);
  });
}


digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]