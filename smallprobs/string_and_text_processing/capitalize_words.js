/*
Write a function that takes a string as an argument, and returns that string with the first character of every word capitalized and all subsequent characters in lowercase. Assume that a word is any sequence of non-whitespace characters.
*/
// TODO Problem
/*
Explicit Requirements:
- INPUT = string
- OUTPUT = that string, with all first letters of words capitalized, and subsequent letters lowercase.
- RULES =

Implicit Requirements:
- uppercase letters in the middle of words should be transformed to lowercase
Questions:
- Is it that string that I am transforming, or a copy of that string? 
*/
// TODO Examples
/*
wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word' 
*/
// TODO Data Structures
/*
string
*/
// TODO Algorithm
/*
function takes in string
split string into words.
map over each word
make first index of string uppercase
add to substring of string, starting at index 1, lowercase.
return result
*/
// TODO Code

let string1 = 'four score and seven'

function wordCap(string) {
  let modifiedArray = string.split(" ").map(word => {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
  })
  return modifiedArray.join(" ");
}

wordCap(string1);       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word' 


//  .... 

function wordCap(string) {
  let modifiedArray = string.split(" ").map(word => {
    return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
  })
  return modifiedArray.join(" ");
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word' 