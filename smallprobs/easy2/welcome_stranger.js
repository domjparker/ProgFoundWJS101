/*
Create a function that takes 2 arguments, an array and an object. The array 
will contain 2 or more elements that, when combined with adjoining spaces, 
will produce a person's name. The object will contain two keys, "title" and 
"occupation", and the appropriate values. Your function should return a 
greeting that uses the person's full name, and mentions the person's title.
*/
// TODO Problem
/*
INPUT = 1 array containing 2 or more elements (names, initials), 1 object 
with two keys, title: & occupation:, with values.
OUTPUT = a string greeting that incorporates person's name and mentions 
their title and occupation.
*/
// TODO Examples
/*
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.
*/
// TODO Data Structures
// includes array and object, with array maybe needing to be iterated over.
// TODO Algorithm
/*
declare function takes in 2 parameters.
set variable to be concatenation of name array into string, spaces included.
set variable to be concatenation of object values, space included.
return greeting string with variables in appropriate places.
*/
// TODO Code

let greetings = (array, object) => {
  let nameString = array.join(' ');
  let titleString = object["title"] + ' ' + object["occupation"];
  return `Hello, ${nameString}! Nice to have a ${titleString} around.`
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.