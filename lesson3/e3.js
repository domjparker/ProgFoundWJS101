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



// Question 3
// What will the following code output?

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

// Question 4
// What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

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

