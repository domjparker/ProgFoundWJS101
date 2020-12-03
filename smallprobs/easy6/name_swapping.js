/*
Write a function that takes a string argument consisting of a first name, a
space, and a last name, and returns a new string consisting of the last name,
a comma, a space, and the first name.
*/
// TODO Problem
/*
Explicit Requirements:
 - INPUT = string with first and last name separated by a space
 - OUTPUT = string, with last name then comma, space, and first name.
 - RULES =

Implicit Requirements:

Questions:

*/
// TODO Examples
/*
swapName('Joe Roberts');    // "Roberts, Joe"
*/
// TODO Data Structures
/*

*/
// TODO Algorithm
/*
 - function takes in a string
 - split into array, by space
 - return string literal in proper order.
*/
// TODO Code

function swapName(nameString) {
  let nameArray = nameString.split(' ');
  return nameArray[1] + ', ' + nameArray[0];
}

swapName('Joe Roberts');    // "Roberts, Joe"

// or...

function swapName(nameString) {
  return nameString.split(' ').reverse().join(', ');
}

// or for multiple names...

function swapName(nameString) {
  let nameArray = nameString.split(' ');
  nameArray.unshift(nameArray.pop() + ',');
  return nameArray.join(' ');
}

swapName('Karl Oskar Henriksson Ragvals');    // "Ragvals, Karl Oskar Henriksson"