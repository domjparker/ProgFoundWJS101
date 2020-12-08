/*
Write a function that takes a string as argument, and returns true if
all parentheses in the string are properly balanced, false otherwise.
To be properly balanced, parentheses must occur in matching '(' and ')' pairs.
*/
// TODO Problem
/*
Explicit Requirements:
 - INPUT = string
 - OUTPUT = boolean
 - RULES = boolean result is true if there is the number of '(' matches the
  number of ')'

Implicit Requirements:
 - can't start on a ) or end on a (

Questions:

*/
// TODO Examples
/*
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
*/
// TODO Data Structures
/*
string (could do array)
*/
// TODO Algorithm
/*
 - function takes in string
 - set counter for left parenthesis symbol
 - set counter for right parenthesis symbol
 - check if first string or last string is wrong parenthesis
 - for each character in string
  - if left parenthesis, increment left parenthesis counter
  - if right parenthesis, increment right parenthesis counter
 if both counters are equal return true
 if both counters are not equal return false
*/
// TODO Code

function isBalanced(string) {
  let leftParenthesisCounter = 0;
  let rightParenthesisCounter = 0;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === "(") {
      leftParenthesisCounter += 1;
      if (leftParenthesisCounter < rightParenthesisCounter) return false;
    } else if (string[i] === ")") {
      rightParenthesisCounter += 1;
      if (rightParenthesisCounter > leftParenthesisCounter) return false;
    }
  }
  if (leftParenthesisCounter !== rightParenthesisCounter) return false;
  else return true;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

// more efficient way...

function isBalanced(string) {
  let parenthesisCounter = 0;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === "(") {
      parenthesisCounter += 1;
    } else if (string[i] === ")") {
      parenthesisCounter -= 1;
    }
    if (parenthesisCounter < 0) return false;
  }
  return parenthesisCounter === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

// or...
ß
function isBalanced(str) {
  let parensStr = str.match(/[()]/g).join('');
  while (parensStr.includes('()')) parensStr = parensStr.replace('()', '');
  return !parensStr;
}