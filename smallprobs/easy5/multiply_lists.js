/*
Write a function that takes two array arguments, each containing a list of 
numbers, and returns a new array that contains the product of each pair of 
numbers from the arguments that have the same index. You may assume that the 
arguments contain the same number of elements.
*/
// TODO Problem
/*
Explicit Requirements:
 - INPUT = two arrays that contain list of numbers
 - OUTPUT = one new array of numbers
 - RULES = each number in the resulting array must be the multiple of the
 integers from the given index in both arrays.

Implicit Requirements:
 - resulting array will have the same amount of elements as both the input 
 arrays.
Questions: 
 - what about for zeros? 
*/
// TODO Examples
/*
multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]
*/
// TODO Data Structures
// arrays of integers
// TODO Algorithm
/*
function takes in 2 arrays.
for each element in array1, multiply by element at same index in array2.
 - return each resulting integer element into new array.
return new array.
*/
// TODO Code

function multiplyList(array1, array2) {
  return array1.reduce((acc, curr, index) => {
    return [...acc, curr * array2[index]]
  }, []);
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]