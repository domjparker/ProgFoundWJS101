/*
Madlibs is a simple game where you create a story template with "blanks" for 
words. You, or another player, then construct a list of words and place them 
into the story, creating an often silly or funny story as a result.

Create a simple madlib program that prompts for a noun, a verb, an adverb, and 
an adjective, and injects them into a story that you create.
*/
// TODO Problem
/*
INPUT =
OUTPUT = 
*/
// TODO Examples
/*
Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle.
*/
// TODO Data Structures
// 
// TODO Algorithm
/*
require readlinesync
noun1 = prompt for noun;
adj1 = prompt for adjective;
verb1 = prompt for present tense verb;
adj2 = prompt for adjective;

log result
A man looked down at his {noun1} when he got out of bed one day.
He thought to himself, "I must do something about that {noun1} because its 
become so {"adj1}."
"Oh well", he thought, "not today, I guess. Instead I think I'll {verb1}."
"Nothing like some good {verb1}ing to seize the {adj2} day."
*/
// TODO Code

let readLine = require("readline-sync");
let noun1 = readLine.question("Enter a noun: ");
let adj1 = readLine.question("Enter an adjective: ");
let verb1 = readLine.question("Enter a present tense verb: ");
let adj2 = readLine.question("Enter another adjective: ");

console.log(`A man looked over at his ${noun1} when he got out of bed one day.\n` +
`He thought to himself, "I must do something about that ${noun1} because its ` +
`become so ${adj1}."\n` +
`"Oh well", he thought, "not today, I guess. Instead I think I'll ${verb1}."\n` +
`He loved to ${verb1} on these kinds of ${adj2} days."`);