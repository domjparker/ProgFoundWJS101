// Q1
// Will the code below raise an error?
let numbers = [1, 2, 3];
numbers[6] = 5;
console.log(numbers);
// > [ 1, 2, 3, <3 empty items>, 5 ]
numbers[4] // returns undefined
/*
numbers[5] = undefined; // => [ 1, 2, 3, <2 empty items>, undefined, 5 ]
numbers.map(() => 10);  // => [ 10, 10, 10, <2 empty items>, 10, 10 ]
*/

// Q2
// How can you determine whether a given string ends with an exclamation mark (!)?
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

// function exMarkTest(string) {
//   return string[string.length - 1].includes("!");
// }
// exMarkTest(str1);
// exMarkTest(str2);

str1.endsWith("!");
str2.endsWith("!");

// Q3
// Determine whether the following object of people and their age contains an 
// entry for 'Spot':
let ages =  { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
ages.hasOwnProperty("Spot");

// Q4
// Using the following string, create a new string that contains all lowercase 
// letters except for the first character, which should be capitalized. 
let munstersDescription = "the Munsters are CREEPY and Spooky.";
munstersDescription.substring(0,1).toUpperCase() + 
  munstersDescription.substring(1).toLowerCase();
// or
/*
munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();
*/
// Q5
// What will the following code output?
console.log(false == '0'); // true
console.log(false === '0'); // false
// Q6
// We have most of the Munster family in our ages object:
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// Add entries for Marilyn and Spot to the object:
let additionalAges = { Marilyn: 22, Spot: 237 };

ages = Object.assign(ages, additionalAges)

// Q7
/*
Determine whether the name Dino appears in the strings below -- check each string separately):
*/
let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

str1.includes("Dino"); // false
str2.includes("Dino"); // true

str1.match('Dino') !== null; // false
str2.match('Dino') !== null; // true

str1.indexOf('Dino') > -1; // false
str2.indexOf('Dino') > -1; // true

// Q8
// How can we add the family pet, "Dino", to the following array?
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flintstones.push("Dino");
flintstones = flintstones.concat("Dino");
flintstones[flintstones.length] = "Dino";

// Q9
// In the previous problem, our first answer added 'Dino' to the array like this:
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");
// How can we add multiple items to our array? ('Dino' and 'Hoppy')

flintstones.push("Dino", "Hoppy");

// Q10
// Return a new version of this sentence that ends just before the word house. 
// Don't worry about spaces or punctuation: remove everything starting from the 
// beginning of house to the end of the sentence.
let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '
newString = advice.slice(0, advice.indexOf('house'));