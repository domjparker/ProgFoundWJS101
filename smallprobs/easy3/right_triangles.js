/*
Write a function that takes a positive integer, n, as an argument, and logs a 
right triangle whose sides each have n stars. The hypotenuse of the triangle 
(the diagonal side in the images below) should have one end at the lower-left 
of the triangle, and the other end at the upper-right.
*/
// TODO Problem
/*
INPUT = positive integer
OUTPUT = console.log right triangle, with each side having positive integer's 
amount of stars. The right angle of the triangle should be on the right side.
*/
// TODO Examples
/*
triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********

triangle(3);

  *
 **
***

*/
// TODO Data Structures
// empty array, adding stars with each loop iteration. 
// TODO Algorithm
/*
function takes in positive integer (num).
create array with (num) spaces filled with one-space strings
loop with index 0, iterate until index < num
with each iteration, string[(num - 1) - i] is changed to *
console.log(string)

*/
// TODO Code

function triangle(num) {
  let array = Array(num - 1).fill(" ");
  for (let i = 0; i < num; i += 1) {
    array[(num - 1) - i] = '*';
    console.log(array.join(''));
  }
}

/*
or....

function triangle(height) {
  let spaces = height - 1;
  let stars = 1;
  while (height > 0) {
    console.log(`${" ".repeat(spaces)}${"*".repeat(stars)}`);
    spaces -= 1;
    stars += 1;
    height -= 1;
  }
}
*/

triangle(5);
triangle(9);
triangle(3);