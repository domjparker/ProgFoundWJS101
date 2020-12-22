/*
Write a function that takes a word and a string of text as parameters, and returns an integer representing the number of times the word appears in the text.

You may assume that the word and text inputs will always be provided, and that all word breaks are spaces. Thus, some words will include punctuation such as periods and commas.
*/
// TODO Problem
/*
Explicit Requirements:
- INPUT = word string, and text string
- OUTPUT = number representing how many times word is located within the text
- RULES = punctuation-sensitive

Implicit Requirements:
-appears to be insensitive to case
Questions:
-what about words within words?
*/
// TODO Examples
/*
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?';

searchWord('sed', text);     // 4
searchWord('est', text);     // 0
searchWord('est,', text);    // 2
*/
// TODO Data Structures
/*
string > array
*/
// TODO Algorithm
/*
function takes in stringWord and stringText
set counter to 0
convert stringText to array of words
for each word, does it equal stringWord
  if so, counter += 1
return counter
*/
// TODO Code

const searchWord = (stringWord, stringText) => {
  let counter = 0;
  let stringArray = stringText.split(" ");
  stringArray.forEach(word => {
    if (word.toLowerCase() === stringWord.toLowerCase()) counter += 1;
  })
  return counter;
};

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?';

searchWord('sed', text);     // 4
searchWord('est', text);     // 0
searchWord('est,', text);    // 2
