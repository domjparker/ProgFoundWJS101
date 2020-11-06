/*
Write a function that will take a short line of text, and write it to the 
console log within a box.
*/
// TODO Problem
/*
INPUT = string of test
OUTPUT = console.log of the string, but in a box
*/
// TODO Examples
/*
logInBox('To boldly go where no one has gone before.');
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

logInBox('');
+--+
|  |
|  |
|  |
+--+
*/
// TODO Data Structures
// string only
// TODO Algorithm
/*
function takes in a string
console.log "+-" + ("-" * string.length) + "-+"
"| " + (" " * string.length) + " |" next line
"| " + string + " |" next line
"| " + (" " * string.length) + " |" next line
"+-" + ("-" * string.length) + "-+"

*/
// TODO Code

function logInBox(string) {
console.log(`+-` + string.replace(/[^]/gi, '-') + `-+\n` +
`| ` + string.replace(/[^]/gi, ' ') + ` |\n` +
`| ` + string + ` |\n` +
`| ` + string.replace(/[^]/gi, ' ') + ` |\n` +
`+-` + string.replace(/[^]/gi, '-') + `-+`);
}

/*
function logInBox(message) {
  let horizontalRule = `+${"-".repeat(message.length + 2)}+`;
  let emptyLine = `|${" ".repeat(message.length + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}
*/

logInBox('To boldly go where no one has gone before.');
logInBox('');