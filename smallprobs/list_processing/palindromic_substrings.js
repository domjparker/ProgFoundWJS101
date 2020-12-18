/*
Write a function that returns a list of all palindromic substrings of a string. That is, each substring must consist of a sequence of characters that reads the same forward and backward. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.
*/
// TODO Problem
/*
Explicit Requirements:
- INPUT = string
- OUTPUT = list of all palindromic (read same when forwards or backwards) substrings in input string
- RULES = single characters are not palindromes. characters are case sensitive.

Implicit Requirements:

Questions:
- ignore empty spaces?
*/
// TODO Examples
/*
palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
*/
// TODO Data Structures
/*
string > array of all substrings > check palindromes > sort.
*/
// TODO Algorithm
/*
-function takes in string.
-get array of all possible substrings
-filter substrings array for palindromes
  -if substring length is greater than 1
    -return true if substring is equal to substring reversed
-return filtered array.
*/
// TODO Code


function leadingSubstrings(string) {
  let result = [];
  for (let length = 1; length <= string.length; length += 1) {
    result.push(string.slice(0, length))
  }
  return result
}

function substrings(string) {
  let finalResult = [];
  for (let i = 0; i < string.length; i += 1) {
    finalResult.push(leadingSubstrings(string.slice(i)));
  }

  return finalResult.flat();
}

function palindromes(string) {
  let allSubstrings = substrings(string);
  return allSubstrings.filter(substring => {
    if (substring.length > 1) {
      return (substring === substring.split('').reverse().join(''));
    }
  })
}

palindromes('abcd');
palindromes('madam');
palindromes('hello-madam-did-madam-goodbye');
palindromes('knitting cassettes');



// or...

function isPalindrome(word) {
  return word.length > 1 && word === word.split("").reverse().join("");
}
          
function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}