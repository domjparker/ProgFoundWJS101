// Question 1
// Will the following functions return the same results?
function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

// first() returns the object, but second() does not because an implicit
// semicolon in inserted after the return on line 10,



// Question 2
// What does the last line in the following code output?
let object = { first: [1] };
let numArray = object["first"]; // [1]
numArray.push(2); // [1, 2]

console.log(numArray); //  => "[1, 2]"
console.log(object); // => "{ first: [1, 2] }"

// Given the following similar sets of code, what will each code snippet print?
/*
Since numArray is a reference to the original array, [1], numArray.push(2) 
modifies this array. Thus, the original object referenced by object is modified 
to include 2 in its array { first: [1, 2] }.

If, instead of modifying the original object, we want to modify numArray but 
not object, we have two options:

1) We can declare and initialize numArray with a reference to a copy of the 
original array:
*/
let object = { first: [1] };
let numArray = object["first"].slice();
numArray.push(2);
/*
2) We can use Array.prototype.concat(), which returns a new array instead of 
modifying the original array:
*/
let object = { first: [1] };
let numArray = object["first"].concat();
numArray.push(2);

// Question 3
// Given the following similar sets of code, what will each code snippet print?
// A)
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // one is: one
console.log(`two is: ${two}`); // two is: two
console.log(`three is: ${three}`); // three is: three
/* although the value assigned to each variable is an array with a single 
element, messWithVars changes each variable within the function, this 
doesn't have any effect on mutation outside of the
*/

// B)
function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // one is one
console.log(`two is: ${two}`); // two is two
console.log(`three is: ${three}`); // three is three

// C)
function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // one is two
console.log(`two is: ${two}`); // two is three
console.log(`three is: ${three}`); // three is one
// because splice has mutated each array
//The splice() method changes the contents of an array by removing or replacing
// existing elements and/or adding new elements in place.


/* Question 4
Ben was tasked to write a simple JavaScript function to determine whether an
input string is an IP address using 4 dot-separated numbers, 
e.g., 10.4.5.11. He is not familiar with regular expressions.
Alyssa supplied Ben with a function named isAnIpNumber. It determines 
whether a string is a numeric string between 0 and 255 as required 
for IP numbers and asked Ben to use it. Here's the code that Ben wrote:
*/

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      break;
    }
  }

  return true;
}
/* Alyssa reviewed Ben's code and said, "It's a good start, but you missed a 
few things. You're not returning a false condition, and you're not handling 
the case when the input string has more or less than 4 components, 
e.g., 4.5.5 or 1.2.3.4.5: both those values should be invalid."

Help Ben fix his code.
*/

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let result = true;
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return result = false;
  } else {
    while (dotSeparatedWords.length > 0) {
      let word = dotSeparatedWords.pop();
      if (!isAnIpNumber(word)) {
        return result = false;
      }
    }
  }
  return result;
}

// does the same as...
function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  }
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }
  return true;
}
// but the latter is better.