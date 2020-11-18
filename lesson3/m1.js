// Question 1
// "ASCII Art"
// For this practice problem, write a program that creates the following output 
// 10 times, with each line indented 1 space to the right of the line above it:

// The Flintstones Rock!
//  The Flintstones Rock!
//   The Flintstones Rock!

let counter = 0;
let string = "The Flintstones Rock!";
while (counter < 10) {
  console.log(string.padStart((counter + string.length), " "));
  counter += 1;
}

/*
or...

for (let padding = 1; padding <= 10; padding++) {
  console.log(" ".repeat(padding) + "The Flinstones Rock!");
}
*/

// Question 2
// Starting with the string:
// let munstersDescription = "The Munsters are creepy and spooky.";
// Return a new string that swaps the case of all of the letters:
// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

let munstersDescription = "The Munsters are creepy and spooky.";
let result = '';
for (let i = 0; i < munstersDescription.length; i += 1) {
  if (munstersDescription[i] === munstersDescription[i].toLowerCase()) {
    result = result + munstersDescription[i].toUpperCase();
  } else if (munstersDescription[i] === munstersDescription[i].toUpperCase()) {
    result = result + munstersDescription[i].toLowerCase();
  }
}

/*
or ...

munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join("");
*/

// Question 3
// Alan wrote the following function, which was intended to return all of the 
// factors of number:

function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}
// Alyssa noticed that this code would fail when the input is 0 or a negative 
// number, and asked Alan to change the loop. How can he make this work without 
// using a do/while loop? Note that we're not looking to find the factors for 0 
// or negative numbers, but we want to handle it gracefully instead of raising an 
// exception or going into an infinite loop.

function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

// 'number % divisor === 0' determines whether the result of the division is 
// an integer -- if the number has no remainder, the result is an integer, so the 
// number divided by the divisor is a factor.


// Question 4
// Alyssa was asked to write an implementation of a rolling buffer. You can add 
// and remove elements from a rolling buffer. However, once the buffer becomes 
// full, any new elements will displace the oldest elements in the buffer.

// She wrote two implementations of the code for adding elements to the buffer. 
// In presenting the code to her team leader, she said "Take your pick. Do you 
// prefer push() or concat() for modifying the buffer?".

// Is there a difference between these implementations, other than the method she 
// used to add an element to the buffer?

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

// The difference is that .push() mutates the calling array, whereas .concat() 
// doesn't mutate the calling array but instead returns a new array. Therefore,
// the caller will see that the array is different when the rollingBuffer 
// function returns. The rollingBuffer2 implementation doesn't mutate the 
// argument specified by the value of buffer.


// Question 5
// What will the following two lines of code output?
console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);

// 0.9 and true, respectively, were wrong. JavaScript uses floating point numbers 
// for all numeric operations. Most floating point representations used on 
// computers lack a certain amount of precision, and that can yield unexpected 
// results like these.

// answer is 0.89999999999999
// false



// Question 6
// What do you think the following code will output?
let nanArray = [NaN];

console.log(nanArray[0] === NaN);

// The output is false. NaN -- not a number -- is a special numeric value that 
// indicates that an operation that was intended to return a number failed. 
// JavaScript doesn't let you use == and === to determine whether a value is NaN.

// To test whether the value is NaN, we use the Number.isNaN() function:
// console.log(Number.isNaN(nanArray[0])); // true


// Question 7
// What is the output of the following code?
let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);


// Question 8
// One day, Spot was playing with the Munster family's home computer, and he 
// wrote a small program to mess with their demographic data:
let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}
// After writing this function, he typed the following code:
messWithDemographics(munsters);
// Before Grandpa could stop him, Spot hit the Enter key with his tail. The
// family's data gets changed to: 
munster = {
  Herman: { age: 74, gender: 'other' },
  Lily: { age: 72, gender: 'other' },
  Grandpa: { age: 444, gender: 'other' },
  Eddie: { age: 52, gender: 'other' },
  Marilyn: { age: 65, gender: 'other' }
}
/*
In JavaScript, objects are passed by reference. Thus, Spot's demoObject starts 
off pointing to the munsters object. His program could replace that with some 
other object, and the family's data would be safe. However, in this case, the 
program doesn't reassign demoObject; it just uses it, as-is. Thus, the object 
that gets changed by the function is the munsters object.
*/


// Question 9
// Method calls can take expressions as arguments. Suppose we define a function 
// called rps as follows, which follows the classic rules of the 
// rock-paper-scissors game, but with a slight twist: in the event of a tie, it 
// awards the win to the first of the two fists.
function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}
console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
// What is the result?
// paper


// Question 10
// Consider these two simple functions:
function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}
// What will the following function invocation return?
bar(foo());
// returns "no" because the value returned from the foo function will always 
// be "yes" , and "yes" === "no" will be false.

// The syntax function bar(param = "no") provides a default value for the 
// parameter IF the argument is not specified. However, we're explicitly passing 
// in the argument (the return value of foo()), so the = "no" part of that 
// doesn't change anything.
// Therefore the parameter passed to bar() is "yes" and remains "yes" instead of 
// being reassigned. 