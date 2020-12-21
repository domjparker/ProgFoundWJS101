/*
Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.
*/
// TODO Problem
/*
Explicit Requirements:
- INPUT = string
- OUTPUT = object with 3 properties = lowercase, uppercase, neither lowercase nor uppercase (non-alphabetic characters)
- RULES =

Implicit Requirements:
- property values in the object are numbers representing count of each in the string. 
Questions:

*/
// TODO Examples
/*
letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }
*/
// TODO Data Structures
/*
string > array > object
*/
// TODO Algorithm
/*
function takes in string
let finalObject = { lowercase: 0, uppercase: 0, neither: 0 }
length of array of characters matching lowercase - add to lowercase:
length of array of characters matching uppercase - add to uppercase:
length of array of characters matching neither - add to neither:
return object
*/
// TODO Code

function letterCaseCount(string) {
  let finalObject = { lowercase: 0, uppercase: 0, neither: 0 };
  let lowerCaseArray = string.match(/[a-z]/g)
  if (lowerCaseArray !== null) finalObject.lowercase += lowerCaseArray.length;
  let upperCaseArray = string.match(/[A-Z]/g)
  if (upperCaseArray !== null) finalObject.uppercase += upperCaseArray.length;
  let neutralArray = string.match(/[^a-zA-Z]/g);
  if (neutralArray !== null) finalObject.neither += neutralArray.length;
  return finalObject;
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }



// a slightly different variation:

function letterCaseCount(string) {
  let lowercaseChars = string.match(/[a-z]/g) || [];
  let uppercaseChars = string.match(/[A-Z]/g) || [];
  let neitherChars = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowercaseChars.length,
    uppercase: uppercaseChars.length,
    neither: neitherChars.length
  };
}


// this one is abit different: 

function letterCaseCount(string) {
  let counts = { lowercase: 0, uppercase: 0, neither: 0 }

  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];
    if ((char >= 'a') && (char <= 'z')) {
      counts.lowercase += 1;
    } else if ((char >= 'A') && (char <= 'Z')) {
      counts.uppercase += 1;
    } else {
      counts.neither += 1;
    }
  }

  return counts;
}