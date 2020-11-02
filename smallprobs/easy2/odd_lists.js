/*
Write a function that returns an Array that contains every other element of an 
Array that is passed in as an argument. The values in the returned list should 
be those values that are in the 1st, 3rd, 5th, and so on elements of the 
argument Array.
*/
// TODO Problem
/*
INPUT = array
OUTPUT = array that contains every other element, starting with the first.
*/
// TODO Examples
/*
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
*/
// TODO Data Structures
// iterating over an array to produce a second array
// TODO Algorithm
/*
function takes in an array
iterate over the array
add to a second array the first element of argument array, and every 2nd 
after that
*/
// TODO Code

// function oddities(array) {
//   let oddArray = []
//   for (let i = 0; i < array.length; i += 2) {
//     oddArray.push(array[i]);
//   }
//   return oddArray;
// }

function oddities(array) {
  return array.filter(element => array.indexOf(element) % 2 === 0);
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []