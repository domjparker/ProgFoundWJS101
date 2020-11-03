/*
Write a function that takes a string of digits, and returns the appropriate 
number as an integer. The string may have a leading + or - sign; if the first 
character is a +, your function should return a positive number; if it is a -, 
your function should return a negative number. If no sign is given, you should 
return a positive number.
You may assume the string will always contain a valid number.
You may not use any of the standard conversion methods available in JavaScript,
such as parseInt() and Number().
*/
// TODO Problem
/*
INPUT = string of digits, possibly having + or - sign
OUTPUT = integer of same digits reflecting + or -
*/
// TODO Examples
/*
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
*/
// TODO Data Structures
// string to array; Object; array to integer;
// TODO Algorithm
/*
function takes in a string of a number, with or without + or - sign.
create an object that has a key value pair for each digit (e.g. string = integer value).
split the string into an array of individual integer strings.
if string starts with "+" or "-", remove it from the array.
for each element in the array, set it to the corresponding integer value of the digits object
assign variable for incrementing integer total.
for each array element, make the total equal to the value to 10x the total plus the next element integer.
if string starts with "-" subtract 2x total from total
return the total
*/
// TODO Code


function stringToSignedInteger(string) {
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
  if (array[0] === "+" || array[0] === "-") {
    array.shift();
  }
  let integerArray = array.map(element => INTEGERS_OBJ[element]);
  let incrementingTotal = 0;
  integerArray.forEach(element => incrementingTotal = (incrementingTotal * 10) + element);
  if (string.startsWith("-")) {
    incrementingTotal = -incrementingTotal
  };
  return incrementingTotal;
}

/*
or can be written like...

function stringToSignedInteger(string) {
  switch (string[0]) {
    case "-":
      return -stringToInteger(string.slice(1, string.length));
    case "+":
      return stringToInteger(string.slice(1, string.length));
    default:
      return stringToInteger(string);
  }
}
*/


console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true