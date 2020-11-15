/*
Build a program that logs when the user will retire and how many more years 
the user has to work until retirement.
*/
// TODO Problem
/*
INPUT = program asks user for age (number) and desired age (number) of retirement
OUTPUT = logged string with projected year of retirement, with number of years
until that year.
*/
// TODO Examples
/*
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
*/
// TODO Data Structures
// 
// TODO Algorithm
/*
require readlinesync
declare variable = ask user for age
declare variable = ask user for age they'd like to retire
declare variable for current year
years left to work = desired age of retirement - current age
console.log year, (yLTW + current year), and yLTW.
*/
// TODO Code

let readline = require("readline-sync");

let currentAge = readline.question("What is your age? ");
let retirementAge = readline.question("At what age would you like to retire? ");
let currentYear = new Date().getFullYear();
let yearsLeftToWork = retirementAge - currentAge;

console.log(`It's ${currentYear}. You will retire in ${currentYear + yearsLeftToWork}.\n` +
`You have only ${yearsLeftToWork} years of work to go!`);