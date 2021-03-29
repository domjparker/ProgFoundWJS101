/*
Write another function that returns true if the string passed as an argument 
is a palindrome, or false otherwise. This time, however, your function should 
be case-insensitive, and should ignore all non-alphanumeric characters. If you 
wish, you may simplify things by calling the isPalindrome function you wrote 
in the previous exercise.
*/
// TODO Problem
/*
INPUT = string of characters
OUTPUT = boolean showing whether the string is a palindrome, 
independent on spaces, non-alphanumeric characters, and case.
*/
// TODO Examples
/*
isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false
*/
// TODO Data Structures
// use regex to turn string into an array of alphanumeric characters, join to 
// string after that. 
// TODO Algorithm
/*
function takes in a string. 
make lower case.
convert to array and remove all non-alphanumeric characters.
if array turned to string is equal to the array reversed and turned to string, 
return true
otherwise return false
*/
// TODO Code

function isRealPalindrome(string) {
  let lowString = string.toLowerCase();
  let refinedArray = lowString.match(/[a-z0-9]/g);
  return refinedArray.join('') === refinedArray.reverse().join('');
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false


/*
Also, another way of doing it...

function isRealPalindrome(string) {
  string = removeNonLetterNumbers(string.toLowerCase());
  return isPalindrome(string);
}

function removeNonLetterNumbers(string) {
  let result = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    if (isLetter(string[idx]) || isNumber(string[idx])) {
      result += string[idx];
    }
  }

  return result;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isNumber(char) {
  return char >= '0' && char <= '9';
}
*/