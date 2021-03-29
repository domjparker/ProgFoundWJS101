/*
Using the multiply() function from the "Multiplying Two Numbers" problem, write
a function that computes the square of its argument (the square is the result
of multiplying a number by itself).
*/
// TODO Problem
/*
INPUT = one argument, presumably a number.
OUTPUT = result of multiplying number by itself
*/
// TODO Examples
/*
console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true
*/
// TODO Data Structures
// numbers
// TODO Algorithm
/*
function takes in an argument
argument is entered as both arguments into existing multiply function
result is returned 
*/
// TODO Code


let multiply = (argument1, argument2) => argument1 * argument2;

let square = (argumentToBeSquared) => multiply(argumentToBeSquared, 
  argumentToBeSquared);

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true
console.log(square("j")); // NaN

/*
What if we wanted generalize this function to a "power to the n" type function:
cubed, to the 4th power, to the 5th, etc. How would we go about doing so while
still using the multiply() function?
*/

// create a incremented total and for loop over the 'to the power' number, each
// time multiplying the original number by the incremented total.

let toThePowerOf = (argument, toThePowerOfAmount) => {
  let incrementedTotal = 1;
  for (let i = 0; i < toThePowerOfAmount; i += 1) {
    incrementedTotal = multiply(argument, incrementedTotal);
  }
  return incrementedTotal;
}

console.log(toThePowerOf(2, 4)); // 16
console.log(toThePowerOf(3, 5)); // 243