// Q1
// Given a string, return a new string that replaces every occurrence of the 
// word "important" with "urgent":

let advice = "Few things in life are as important as house training your pet dinosaur.";
newAdvice = advice.replace('important', 'urgent');

// Q2
// The Array.prototype.reverse method reverses the order of elements in an array, 
// and Array.prototype.sort can rearrange the elements in a variety of ways, 
// including descending. Both of these methods mutate the original array as shown 
// below. Write two distinct ways of reversing the array without mutating the 
// original array. Use reverse for the first solution, and sort for the second.
let numbers = [1, 2, 3, 4, 5];
let numbersReversed = numbers.slice().reverse();

let numbers = [1, 2, 3, 4, 5];
let numbersSorted = numbers.slice().sort((a, b) => b - a);
let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
// console.log(sortedArray); // [5, 4, 3, 2, 1]

//  Can you do it using the Array.prototype.forEach() method?
let numbers = [1, 2, 3, 4, 5];
let reversedArray = [];
numbers.forEach(num => {
  reversedArray.unshift(num);
})


// Q3
// Given a number and an array, determine whether the number is included in 
// the array.
let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

numbers.includes(number1);
numbers.includes(number2);


// Q4
// Starting with the string:
let famousWords = "seven years ago...";
// show two different ways to put the expected "Four score and " in front of it.
let words2BAdded = "Four score and ";

words2BAdded.concat(famousWords);
words2BAdded + famousWords;

// Q5
// Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the 
// number at index 2, so that the array becomes [1, 2, 4, 5].
let array = [1, 2, 3, 4, 5];
array.splice(2, 1);

// Q6
// Suppose we build an array like this:
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// This code will create a nested array that looks like this:
["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// Create a new array that contains all of the above values, but in an un-nested format:
[ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]

flintstones.flat();

flintstones = [].concat(...flintstones)

flintstones = flintstones.reduce((accum, element) => {
  return accum.concat(element);
}, []);

let newFlintstones = [];
flintstones.forEach(element => {
  newFlintstones = newFlintstones.concat(element);
});
// Q7
// Consider the following object:
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// Create an array from this object that contains only two elements: Barney's 
// name and Barney's number:
[ 'Barney', 2 ]
Object.entries(flintstones).filter(pair => pair[0] === "Barney").flat();
Object.entries(flintstones).filter(pair => pair[1] === 2).flat();

// Q8
// How would you check whether the objects assigned to variables numbers and 
// table below are arrays?
let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

Array.isArray(numbers);
Array.isArray(table);

// Q9
// Back in the stone age (before CSS), we used spaces to align things on the 
// screen. If we have a 40-character wide table of Flintstone family members, 
// how can we center the following title above the table with spaces?
let title = "Flintstone Family Members";

title.padStart(Math.floor((40 - title.length) / 2) + title.length, ' ');

// Q10
// Write two one-line expressions to count the number of lower-case t 
// characters in each of the following strings:
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

statement1.match(/[t]/g) ? statement1.match(/[t]/g).length : 0;
statement2.match(/[t]/g) ? statement2.match(/[t]/g).length : 0;

//or
statement1.split('').filter(char => char === 't').length;
statement2.split('').filter(char => char === 't').length;