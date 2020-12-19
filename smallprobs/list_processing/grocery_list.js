/*
Write a function that takes a grocery list (a two-dimensional array) with each element containing a fruit and a quantity, and returns a one-dimensional array of fruits, in which each fruit appears a number of times equal to its quantity.
*/
// TODO Problem
/*
Explicit Requirements:
- INPUT = 2-dimensional array (e.g. element = ['fruit', quantity number of said fruit])
- OUTPUT = 1-dimensional array where the value of each 'fruit' appears the quantity number of times.
- RULES =

Implicit Requirements:

Questions:

*/
// TODO Examples
/*
buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
*/
// TODO Data Structures
/*
array and sub-arrays
*/
// TODO Algorithm
/*
-function takes in array
-set finalArray to empty
-for each item in array
  -for amount of item[1] 
    -push item[0] into finalArray
-return finalArray
*/
// TODO Code

function buyFruit(array) {
  let finalArray = [];
  array.forEach(subArray => {
    for (let i = 0; i < subArray[1]; i += 1) {
      finalArray.push(subArray[0]);
    }
  })
  return finalArray;
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);


// or..

function buyFruit(fruitsList) {
  return fruitsList
    .map(fruit => repeat(fruit))
    .reduce((groceryList, fruit) => groceryList.concat(fruit));
}

function repeat(fruitAndQuantity) {
  let result = [];
  let fruit = fruitAndQuantity[0];
  let quantity = fruitAndQuantity[1];

  for (let num = 0; num < quantity; num += 1) {
    result.push(fruit);
  }

  return result;
}