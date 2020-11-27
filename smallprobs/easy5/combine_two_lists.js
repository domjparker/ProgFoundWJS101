/*
Write a function that combines two arrays passed as arguments, and returns a 
new array that contains all elements from both array arguments, with each 
element taken in alternation.

You may assume that both input arrays are non-empty, and that they have the 
same number of elements.

*/
// TODO Problem
/*
Explicit Requirements:
 - INPUT = two arrays
 - OUTPUT = one new array, containing all the elements from the input arrays, however
 it must take one element from argument array 1, then one element from argument array 2, 
 then repeat this until all elements from both arrays have been used.
 - RULES = alternation of elements. both arrays are the same length. 

Implicit Requirements:

Questions: 
- does it matter which array is first?
*/
// TODO Examples
/*
interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]
*/
// TODO Data Structures
// arrays
// TODO Algorithm
/*
 - function takes in two arrays as arguments.
 - create an empty result array to put the elements in.
 - for each element in both arrays, up to the length of one of the arrays, 
  - push an element from array 1 into result array.
  - push an element form array 2 into result array.
 - return result array. 

*/
// TODO Code

let interleave = (array1, array2) => {
  let result = [];
  for (let i = 0; i < array1.length; i += 1) {
    result.push(array1[i], array2[i]);
  }
  return result;
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]