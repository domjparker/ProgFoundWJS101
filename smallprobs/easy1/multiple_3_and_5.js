/*
Write a function that computes the sum of all numbers between 1 and some other 
number, inclusive, that are multiples of 3 or 5. For instance, if the supplied 
number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.
*/
// TODO Problem
/*
INPUT = number
OUTPUT = number = result of sum of multiples of 3 and 5 between 1 - number.
*/
// TODO Examples
/*
multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168
*/
// TODO Data Structures
// numbers
// TODO Algorithm
/*
function takes in a number
declare a variable called total.
increment from 1 to the number and with each increment,
if the index is divisible by 3 or 5 with a remainder of 0, add index to total.
stop at number.
return total
*/
// TODO Code

function multisum(num) {
  let total = 0;
  for (let i = 3; i <= num; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      total = total + i;
    }
  }
  return total;
}


multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

// or..

function multisum(num) {
  let result = 0
  if (num > 2) {
    for (let i = 3; i <= num; i += 1) {
      if (i % 3 === 0 || i % 5 === 0) result += i;
    }
  } 
  return result;
}