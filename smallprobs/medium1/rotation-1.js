/*
Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.
*/
// TODO Problem
/*
Explicit Requirements:
- INPUT = an array of primitive values and/or objects, or some other input
- OUTPUT = copy of the array with first element moved to the end, or undefined
- RULES = don't modify original array. return undefined if input not an array

Implicit Requirements:

Questions:

*/
// TODO Examples
/*
rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]
*/
// TODO Data Structures
/*
array of objects > deep copy > then shift/push within copy.
*/
// TODO Algorithm
/*
function takes in input
  if input not array return undefined
  if array length less than 2, return array
  else set arrayDeepCopy to deep copy of array
    set rotatingValue using array.shift()
    push rotatingValue into arrayDeepCopy
    return arrayDeepCopy
*/
// TODO Code

function rotateArray(input) {
  if (!Array.isArray(input)) return undefined;
  else if (input.length < 2) return input;
  else {
    let arrayDeepCopy = JSON.parse(JSON.stringify(input));
    let rotatingValue = arrayDeepCopy.shift();
    return arrayDeepCopy.concat(rotatingValue)
  }
}

/* also
function rotateArray(input) {
  if (!Array.isArray(input)) {
    return undefined;
  }

  if (input.length === 0) {
    return [];
  }

  return input.slice(1).concat(input[0]);
}
*/

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]