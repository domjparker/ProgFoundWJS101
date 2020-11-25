/*

*/
// TODO Problem
/*
Explicit Requirements:
 - INPUT = two arrays
 - OUTPUT = one array that has the union of the values from the two input arrays.
 - RULES = 
  - no duplication of values, even if either or both values have a duplication in themselves.

Implicit Requirements:
 - union means the values are not added, but simply the arrays.

Questions:  
 - what type of values can these arrays contain? Any?
 - what does union mean? addition of the values or the arrays?
 - what happens to the original arrays? should they both be unchanged/unmutated after the function is called?
 - can there be arrays or objects within either or both of the arrays?
 - does the resulting array need to have a specific order?
*/
// TODO Examples
/*
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
*/
// TODO Data Structures
// arrays of values.
// TODO Algorithm
/*
- create a function that takes in two arrays.
- add both arrays into one large array.
- remove any duplicates.
  - create empty result array.
  - for each element in the large array
    - set element as root element
    - for each element beyond root element until length of array, check if root element has an equal.
    - if root element has an equal, continue to next root element.
    - else push it into the result array.
- return result array.
*/
// TODO Code

function union(array1, array2) {
  let unfilteredArray = array1.concat(array2);
  let filteredArray = [];
  for (let i = 0; i < unfilteredArray.length; i += 1) {
    let rootElement = unfilteredArray[i];
    if (!filteredArray.includes(rootElement)) {
      filteredArray.push(rootElement);
    }
  }
  return filteredArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));     // [1, 3, 5, 6, 9]
let value1 = "value1";
console.log(union([1, 3, { key: value1 }, 5], [3, 6, [2, 4], 9]));

// or this way...

function copyNonDuplicates(finalArray, argumentArray) {
  for (let i = 0; i < argumentArray.length; i += 1) {
    if (!finalArray.includes(argumentArray[i])) {
      finalArray.push(argumentArray[i]);
    }
  }
}

function union() {
  let finalArray = [];
  for (let idx = 0; idx < arguments.length; idx += 1) {
    copyNonDuplicates(finalArray, arguments[idx]);
  }

  return finalArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));     // [1, 3, 5, 6, 9]
let value1 = "value1";
console.log(union([1, 3, { key: value1 }, 5], [3, 6, [2, 4], 9]));  