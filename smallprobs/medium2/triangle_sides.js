/*
A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.
To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.
*/
// TODO Problem
/*
Explicit Requirements:
- INPUT = three numbers
- OUTPUT = string indicating type of triangle, or invalid
- RULES = identify which sides are longest, shortest, middle
  check these against requirements for the types of triangles


Implicit Requirements:

Questions:

*/
// TODO Examples
/*
triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"
*/
// TODO Data Structures
/*
numbers > string
*/
// TODO Algorithm
/*
function takes in num1, num2, num3
  get total length of 3 sides
  get biggest using math.max()
  get smallest using math.min()
  get middle by subtracting biggest and smallest from total
  if shortest not greater than zero and shortest plus middle is less than longest return invalid
  else if each side is equal to the others, return equilateral
  else if num1 is equal to num2 or num1 is equal to num3 or num1 equal to num3 return "isosceles"
  else return "scalene"
*/
// TODO Code

function triangle(num1, num2, num3) {
  let totalSidesLength = num1 + num2 + num3;
  let biggestSide = Math.max(num1, num2, num3);
  let smallestSide = Math.min(num1, num2, num3);
  let middleSide = totalSidesLength - biggestSide - smallestSide;

  if (smallestSide <= 0 || smallestSide + middleSide <= biggestSide) {
    return "invalid";
  } else if (biggestSide === smallestSide) {
    return "equilateral";
  } else if (biggestSide === middleSide || middleSide === smallestSide) {
    return "isosceles";
  } else return "scalene";
}

triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"