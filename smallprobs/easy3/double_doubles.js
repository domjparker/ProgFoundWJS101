/*
Write a function that returns the number provided as an argument multiplied by 
two, unless the argument is a double number; return double numbers as-is.
*/
// TODO Problem
/*
INPUT = number
OUTPUT = number multiplied by 2, except double numbers should be return without
any modification.
*/
// TODO Examples
/*
twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676
*/
// TODO Data Structures
// number > string split into two substrings and check equality
// number > string > array > iterate over array to find matches.
// TODO Algorithm
/*
function takes in a number
turn number to string
if string length is odd, return number
else if string.substring(0, (string.length / 2 ) - 1) is not equal to string.substring(string.length / 2)
return number multiplied by 2.
else return number

function takes in a number
turn number to string and then to array
if array length is odd, return number (unchanged)
else do iterative loop: starting at index 0 and going to halfway, 
if array element at index is not equal to array at index ((array.length / 2) + i)
return number unchanged.
else return number multiplied by 2
*/
// TODO Code
function twice(number) {
  let string = String(number);
  if (string.substring(0, (string.length / 2)) === (string.substring(string.length / 2))) {
    return number;
  }
  return (number * 2);
}


// (this one below is less efficient)
// function twice(number) {
//   let array = Array.from(String(number));
//   if (array.length % 2 === 1) {
//     return (number * 2);
//   } else {
//     for (let i = 0; i < (array.length / 2); i += 1) {
//       if (array[i] !== array[(array.length / 2) + i]) {
//         return (number * 2);
//       } else {
//         return number;
//       }
//     }
//   }
// }

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676