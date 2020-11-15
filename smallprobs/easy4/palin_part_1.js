/*
Write a function that returns true if the string passed as an argument is a 
palindrome, or false otherwise. A palindrome reads the same forwards and 
backwards. For this problem, the case matters and all characters matter.
*/
// TODO Problem
/*
INPUT = string
OUTPUT = boolean representing whether input string is a palindrome or not.
*/
// TODO Examples
/*
isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true
*/
// TODO Data Structures
// string > split into array, reversed, and then joined to string
// TODO Algorithm
/*
function takes in string
string variable = string
stringReversed variable = string split into array, reversed, then joined again
are both variables equal
return result
*/
// TODO Code

let isPalindrome = string => {
  let stringReversed = string.split('').reverse().join('');
  return string === stringReversed;
}

// or
// let isPalindrome = string => string === string.split('').reverse().join(''); 

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true