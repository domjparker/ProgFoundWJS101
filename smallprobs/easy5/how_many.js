/*
Write a function that counts the number of occurrences of each element in a 
given array. Once counted, log each element alongside the number of 
occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").
*/
// TODO Problem
/*
Explicit Requirements:
 - INPUT = array
 - OUTPUT = console log of each element with number of times it occurs in the input 
 array.
 - RULES = words are case sensitive.

Implicit Requirements:
  - appears to be array of strings (words).
Questions: 
*/
// TODO Examples
/*
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);
// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2
*/
// TODO Data Structures
// array of word strings > array of objects > log keys and values
// TODO Algorithm
/*
 - function takes in array of strings.
 - create empty object. 
 - for each string in array,
  - if object has that string as a key, add 1 to value.
  - else add string as key to object, and assign a value of 1.
 - for each key/value pair in the object, log the key and the value.
*/
// TODO Code

function countOccurrences(array) {
  let newObject = {};
  for (let i = 0; i < array.length; i += 1) {
    if (newObject[array[i]]) newObject[array[i]] += 1;
    else newObject[array[i]] = 1; 
  }
  for (let property in newObject) {
    console.log(`${property} => ${String(newObject[property])}`);
  }
}


let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 
'motorcycle', 'car', 'truck'];


countOccurrences(vehicles);

// or for case insensitive...

function countOccurrences(array) {
  let newObject = {};
  array = array.map(element => element.toLowerCase());
  for (let i = 0; i < array.length; i += 1) {
    if (newObject[array[i]]) newObject[array[i]] += 1;
    else newObject[array[i]] = 1; 
  }
  for (let property in newObject) {
    console.log(`${property} => ${String(newObject[property])}`);
  }
}


let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'suv', 'truck', 'motorcycle', 
'motorcycle', 'car', 'truck'];


countOccurrences(vehicles);