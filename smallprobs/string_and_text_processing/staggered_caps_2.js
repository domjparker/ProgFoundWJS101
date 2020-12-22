/*
Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case.
*/
// TODO Problem
/*
Explicit Requirements:
- INPUT =
- OUTPUT =
- RULES =

Implicit Requirements:

Questions:

*/
// TODO Examples
/*
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
*/
// TODO Data Structures
/*
function takes in string
string converted to array
set letterCounter = 0
for each character in array 
  if letterCounter is even and character is letter, capitalize. add 1 to counter
  if letterCounter is odd and character is letter, lowercase. add 1 to counter
  else return character unchanged.
return result
*/
// TODO Code

function staggeredCase(string) {
  let arrayOfChars = string.split("");
  let letterCounter = 0;
  return arrayOfChars
  .map((char) => {
    if (letterCounter % 2 === 0 && char.match(/[a-z]/gi)) {
      letterCounter += 1;
      return char.toUpperCase();
    }
    else if (letterCounter % 2 !== 0 && char.match(/[a-z]/gi)) {
      letterCounter += 1;
      return char.toLowerCase();
    }
    else return char;
  })
  .join("");
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);