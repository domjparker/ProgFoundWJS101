/*
Write a function that takes an array of integers between 0 and 19, and returns an array of those integers sorted based on the English word for each number:
*/
// TODO Problem
/*
Explicit Requirements:
- INPUT = array of integers between 0 - 19
- OUTPUT = array of integers, sorted alphabetically according to the first letter/s of each number's english word equivalent
i.e. zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen
- RULES =

Implicit Requirements:

Questions:

*/
// TODO Examples
/*
alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
*/
// TODO Data Structures
/*
need an object containing all 0-19 number keys and corresponding number word values.
create array of number words > sort > convert back to number values
*/
// TODO Algorithm
/*
-create number object

-function takes in array of nums
-iterate over array to create array of number word values, using object.
-sort alphabetically.
-iterate over array to revert to number values
-return reverted array
*/
// TODO Code

const NUMBER_WORDS = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
}

function alphabeticNumberSort (numArray) {
  let arrayOfWords = numArray.map(num => num = NUMBER_WORDS[num]);
  let arraySortedWords = arrayOfWords.sort();
  return arraySortedWords.map(numWord => {
    return Object.keys(NUMBER_WORDS).find(key => NUMBER_WORDS[key] === numWord);
  })
}


alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]


// this is better though...

const NUMBER_WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen",];

function alphabeticNumberSort(arrayOfNumbers) {
  return arrayOfNumbers.sort(function(num1, num2) {
    if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
      return 1;
    } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
      return -1;
    } else {
      return 0;
    }
  })
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]