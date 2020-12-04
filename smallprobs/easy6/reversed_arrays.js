/*
Write a function that takes an Array as an argument, and reverses its elements
in place; that is, mutate the Array passed into this method. The return value
should be the same Array object.
*/
// TODO Problem
/*
Explicit Requirements:
 - INPUT = array
 - OUTPUT = same array object
 - RULES = mutate the array passed in so that it is reversed.

Implicit Requirements:
 - this must not produce a new array, but mutate the same array.
Questions:

*/
// TODO Examples
/*
let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true
*/
// TODO Data Structures
/*
array x1
*/
// TODO Algorithm
/*
 - function takes in an array
 - need an iterative loop with an index
 - each time loop iterates, remove last element and insert it into index position 
 - return array.
*/
// TODO Code

function reverse(array) {
  for (let i = 0; i < array.length - 1; i += 1) {
    array.splice(i, 0, array.pop());
  }
  return array;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true