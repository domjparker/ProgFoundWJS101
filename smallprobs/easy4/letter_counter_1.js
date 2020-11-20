/*
Write a function that takes a string consisting of zero or more space separated
words, and returns an object that shows the number of words of different sizes.
Words consist of any sequence of non-space characters.
*/
// TODO Problem
/*
INPUT = string that may have no words or multiple words, separated by spaces.
OUTPUT = object that shows the number of words with different lengths.
*/
// TODO Examples
/*
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}
*/
// TODO Data Structures
// 
// TODO Algorithm
/*
function takes in a string.
split string into an array of words separated by spaces.
create empty object = wordSizeObject
loop over array.
let the length of the current word be what we use to search the array.
if the length of hte current word is zero, continue.
if the length of the current word is not in the wordSizeObject, that word length becomes a key
increase word length key value amount by +1.
return wordSizeObject.
*/
// TODO Code

function wordSizes(string) {
  let stringArray = string.split(' ');
  let wordSizeObject = {};
  for (let i = 0; i < stringArray.length; i += 1) {
    let currentWordLength = stringArray[i].length;
    if (currentWordLength === 0) continue;
    if (!wordSizeObject[currentWordLength]) {
      wordSizeObject[currentWordLength] = 0;
    }
    wordSizeObject[currentWordLength] += 1;
  }
  return wordSizeObject;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}

