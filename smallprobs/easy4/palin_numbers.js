/*
Write a function that returns true if its integer argument is palindromic, or 
false otherwise. A palindromic number reads the same forwards and backwards.
*/
// TODO Problem
/*
INPUT = an integer
OUTPUT = boolean indicating true or false, depending on whether the number
is a palindromic number
*/
// TODO Examples
/*
isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true
*/
// TODO Data Structures
// number to string, to array, then new array reversed, and both to string. 
// TODO Algorithm
/*
function takes in a number.
turn number into string
string to an array
create new array that is reversed
revert both arrays back to strings and compare
*/
// TODO Code

let isPalindromicNumber = number => {
  let stringNum = number.toString();
  let arrayNum = stringNum.split('');
  let reversedArrayNum = arrayNum.reverse();
  return stringNum === reversedArrayNum.join('');
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true
