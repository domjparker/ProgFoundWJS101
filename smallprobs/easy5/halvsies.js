/*
Write a function that takes an array as an argument, and returns an array that 
contains two elements, each of which is an array. Put the first half of the 
original array elements in the first element of the return value, and put the 
second half in the second element. If the original array contains an odd number
of elements, place the middle element in the first half array.
*/
// TODO Problem
/*
Explicit Requirements:
 - INPUT = an array
 - OUTPUT = an array with 2 sub-arrays = first half of the original array as array1, second half 
 as array2
 - RULES = if starting array contains odd number of elements, the middle 
 element goes in array1.

Implicit Requirements:
 - if 1 element in original array, final array still contains 2 array elements, but with 2nd empty
 - if original array is empty, final array contains 2 empty arrays. 
Questions: 
*/
// TODO Examples
/*
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]
*/
// TODO Data Structures
// arrays and pushing
// TODO Algorithm
/*
function takes in an array of elements.
create final array (empty) 
if original array has length of 0, set final array equal to two empty subArrays.
if original array has length of 1, push it to final array, and add empty subArray.
if original array is even, set middle index to array divided by 2
  take elements from array up to middle index and create subarray. 
  take elements from array middle index to end, and create 2nd subArray.
otherwise, set middle index to original array divided by 2 and rounded up 
  
  add/put 1st and 2nd subArrays into final array.
return final array.
*/
// TODO Code

// initial complicated way... 
function halvsies(array) {
  let finalArray = [];
  if (array.length < 1) finalArray = [[], []];
  else if (array.length === 1) {
    finalArray.push(array);
    finalArray[1] = [];
  } else {
    let arrayLengthHalved = Math.ceil(array.length / 2);
    let subArray1 = array.slice(0, arrayLengthHalved);
    let subArray2 = array.slice(arrayLengthHalved);
    finalArray.push(subArray1);
    finalArray.push(subArray2);
  }
  return finalArray;
}


let value = "hello"
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]
halvsies([1, 5, { key: value }, 4, 3]);    // [[1, 5, {key: "hello"}], [4, 3]]

// simpler way...

function halvsies(array) {
  let arrayLengthHalved = Math.ceil(array.length / 2);
  let subArray1 = array.slice(0, arrayLengthHalved);
  let subArray2 = array.slice(arrayLengthHalved);
  return [subArray1, subArray2];
}


let value = "hello"
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]
halvsies([1, 5, { key: value }, 4, 3]);    // [[1, 5, {key: "hello"}], [4, 3]]