/*
The parseInt() method converts a string of numeric characters (including an 
  optional plus or minus sign) to an integer. The method takes 2 arguments 
  where the first argument is the string we want to convert and the second 
  argument should always be 10 for our purposes. parseInt() and the Number() 
  method behave similarly. In this exercise, you will create a function that 
  does the same thing.

Write a function that takes a String of digits, and returns the appropriate 
number as an integer. You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor should you worry about 
invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods available in JavaScript,
such as String() and Number(). Your function should do this the old-fashioned 
way and calculate the result by analyzing the characters in the string.
*/
// TODO Problem
/*
INPUT = string of digits
OUTPUT = integer of the appropriate number
cannot use Number() or parseInt() or String()
assumption that all characters are numeric
don't worry about + or - characters
don't worry about invalid characters
*/
// TODO Examples
/*
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
console.log(stringToInteger("0") === 0); // logs true
*/
// TODO Data Structures
// string converting to number, possible use of iteration via array
// TODO Algorithm
/*
function takes in a string of a number
create an object that has a key value pair for each digit (e.g. string = integer value)
split the string into an array of individual integer strings.
for each element in the array, set it to the corresponding integer value of the digits object
assign variable for incrementing integer total.
for each array element, convert the value to 10x the value and add the next element integer.
return the total


*/
// TODO Code
function stringToInteger(string) {
  const INTEGERS_OBJ = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
  }

  let array = string.split("");
  let integerArray = array.map(element => INTEGERS_OBJ[element]);
  let incrementingTotal = 0;
  integerArray.forEach(element => incrementingTotal = (incrementingTotal * 10) + element);
  return incrementingTotal;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
console.log(stringToInteger("0") === 0); // logs true
