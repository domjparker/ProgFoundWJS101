/*
Write a program that will ask for user's name. The program will then greet the 
user. If the user writes "name!" then the computer yells back to the user.
*/
// TODO Problem
/*
INPUT = string (user's name)
OUTPUT = string greeting that includes user's name. If '!' also included, 
validated string response included.

what if user inputs number or something other than a string?
*/
// TODO Examples
/*
What is your name? Bob
Hello Bob.

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?
*/
// TODO Data Structures
// string > string
// TODO Algorithm
/*
require readline-sync
ask user to enter name and assign this to name variable
if name string includes ! 
return greeting in allcaps with question about screaming.
if name includes a number, give a validation sentence
if name is an empty string, give a validation sentence.
if name includes more than 4 individual words, give validation sentence
otherwise, return string with greeting and name string included.
*/
// TODO Code

const readline = require("readline-sync");

function greeting(userName) {
  if (userName.includes('!')) {
    return `HELLO ${userName.toUpperCase()} WHY ARE WE SCREAMING?`
  } else if (/\d/.test(userName)) {
    return `What you entered had at least one number in it.`
  } else if (userName.trim() === '') {
    return `You didn't enter a name. I can't personalize the greeting for you.`
  } else if ((userName.split(' ').length) > 3) {
    let answer = readline.question(`That's a lot of individual names. ` +
      `Are they really your name when combined?`);
    if (answer.toLowerCase() === 'y') {
      return `Hello ${userName}.`
    } else {
      return `Well Hello, but I can't personalize your name.`
    }
  } else {
    return `Hello ${userName}.`
  }
}

let userInput = readline.question("What is your name? ");

console.log(greeting(userInput));