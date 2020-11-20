/*
Modify the wordSizes function from the previous exercise to exclude non-letters
when determining word size. For instance, the word size of "it's" is 3, not 4.
*/
// TODO Problem
/*
INPUT = string that may have no words or multiple words, separated by spaces.
OUTPUT = object that shows the number of words with different lengths, while excluding
non-letters when determining word size.
*/
// TODO Examples
/*
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}
*/
// TODO Data Structures
// 
// TODO Algorithm
/*
function takes in a string.
split string into an array of words separated by spaces.
for each element in array remove non-letters.
create empty object = wordSizeObject
loop over array.
let the length of the current word be what we use to search the array.
if the length of hte current word is zero, continue.
if the length of the current word is not in the wordSizeObject, that word length becomes a key
increase word length key value amount by +1.
return wordSizeObject.
*/
// TODO Code

function removeNonLetters(string) {
  return newString = string.replace(/[^a-z ]/gi, "")
}

function wordSizes(string) {
  let refinedString = removeNonLetters(string);
  let stringArray = refinedString.split(" ");
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

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}


// or like this...

/*
function wordSizes(words) {
  let wordsArray = words.split(' ');
  let count = {};

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    let cleanWordSize = removeNonLetters(wordsArray[idx].toLowerCase()).length;
    if (cleanWordSize === 0) {
      continue;
    }

    count[cleanWordSize] = count[cleanWordSize] || 0;
    count[cleanWordSize] += 1;
  }

  return count;
}

function removeNonLetters(string) {
  let result = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    if (isLetter(string[idx])) {
      result += string[idx];
    }
  }

  return result;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}
*/