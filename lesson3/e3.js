// Question 1
// Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];

numbers = [];
numbers.filter(element => element !== element);
numbers.splice(0, numbers.length);
numbers.length = 0;
while (numbers.length) {
  numbers.pop();
}

// Question 2
// What will the following code output?

console.log([1, 2, 3] + [4, 5]);
// 1, 2, 34, 5   (because the + operator converts the arrays to strings and 
// then concatenates)


// Question 3
// What will the following code output?

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);
// hello there  (because strings are not mutable, and passed by value. When 
// str1 is used to create str2, it is just a copy).

// Question 4
// What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);
// the value of the first index becomes { first: 42 } because even a shallow
// copy like that made from splice() still means that both arrays point to the 
// same object and therefore change to one affects the other.

// Question 5
// The following function unnecessarily uses two return statements to return 
// boolean values. How can you eliminate the unnecessary duplication?

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

function isColorValid(color) {
  return (color === "blue" || color === "green") 
}
// or 
function isColorValid(color) {
  return (color === "blue" || color === "green") ? true : false;
}
// or 
let isColorValid = color => color === "blue" || color === "green";
// or 
const isColorValid = color => ["blue", "green"].includes(color);



// .slice() as it relates to variables as pointers, with regards to primitives and objects.

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);
//[ { first: 42 }, { second: 'value2' }, 3, 4, 5 ]

let arr1 = [1, 2, 3];
let arr2 = arr1.slice();
arr2[0] = 4;
console.log(arr1);
// [1, 2, 3]


let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2[0] = 4;
console.log(arr1);
// [ 4, 2, 3 ]

