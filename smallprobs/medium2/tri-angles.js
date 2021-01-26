/*
A triangle is classified as follows:

Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.
To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.
*/
// TODO Problem
/*
Explicit Requirements:
- INPUT = 3 integers
- OUTPUT = string representing if triangle is valid, and if so, what type of triangle
- RULES = sum of angles must equal 180.
  each angle must be greater than 0
  a right angle can only have ONE 90 degree angle
  an acute angle must have ALL angles below 90 degrees
  an obtuse angle has ONE angle above 90 degrees

Implicit Requirements:

Questions:

*/
// TODO Examples
/*
triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"
*/
// TODO Data Structures
/*
numbers > array
*/
// TODO Algorithm
/*
function takes in 3 integers
  put integers into array
  if sum of elements < 180 or any element < 1 return "invalid"
  else if any element === 90, return "right"
  else if any element > 90, return "obtuse"
  else return "acute"

*/
// TODO Code

function triangle(num1, num2, num3) {
  let arr = [num1, num2, num3];
  if ((arr.reduce((acc, curr) => acc + curr) !== 180) || 
  (arr.some(element => element < 1))) {
    return "invalid"
  } else if (arr.includes(90)) return "right";
  else if (arr.some(element => element > 90)) return "obtuse";
  else return "acute";
}

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"


// another way...

function triangle(angle1, angle2, angle3) {
  const angles = [angle1, angle2, angle3];
  if (isValid(angles)) {
    return getTriangleType(angles);
  } else {
    return "invalid";
  }
}

function isValid(angles) {
  const totalAngle = angles.reduce((total, angle) => total + angle);

  const allNonZero = angles.every(angle => angle > 0);

  return totalAngle === 180 && allNonZero;
}

function getTriangleType(angles) {
  if (angles.some(testRightTriangle)) {
    return "right";
  } else if (angles.every(testAcuteTriangle)) {
    return "acute";
  } else {
    return "obtuse";
  }
}

function testRightTriangle(angle) {
  return angle === 90;
}

function testAcuteTriangle(angle) {
  return angle < 90;
}

