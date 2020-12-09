// Selection from an array of objects
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let selectFruit = itemsList => {
  let fruitItems = {}; // create empty object
  let objectKeys = Object.keys(itemsList); // create an array of listObject's keys
  for (let i = 0; i < objectKeys.length; i += 1) { // loop the length of objectKeys
    if (itemsList[objectKeys[i]] === 'Fruit') { // if value at listObject at key index is fruit
      fruitItems[objectKeys[i]] = itemsList[objectKeys[i]]; // write value as an object into fruitItems
    }
  }
  return fruitItems;
};

selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

// =============================
// Mutating/transforming an array with primitive elements

function doubleNumbers(numbers) {
  let counter = 0;

  while (counter < numbers.length) {
    // let currentNum = numbers[counter];
    // currentNum *= 2;    ====== (this doesn't work because by creating a new variable,
    // you're not mutating the actual value in numbers.)
    numbers[counter] *= 2; // this works on each actual numbers value

    counter += 1;
  }

  return numbers;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
doubleNumbers(myNumbers); // => [2, 8, 6, 14, 4, 12]
myNumbers;                // => [2, 8, 6, 14, 4, 12]

// or...

function doubleNumbers(numbers) {
  let counter = 0;

  while (counter < numbers.length) {
    let currentNum = numbers[counter];
    numbers.splice(counter, 1, currentNum *= 2);
    console.log(numbers)
s
    counter += 1;
  }

  return numbers;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
doubleNumbers(myNumbers); // => [2, 8, 6, 14, 4, 12]
myNumbers;                // => [2, 8, 6, 14, 4, 12]

// ====================== 
// transforming the numbers based on their position in the array

function doubleEverySecondNumber(numbers) {
  for (let counter = 0; counter < numbers.length; counter += 1) {
    if (counter % 2 === 1) {
      numbers[counter] *= 2;
    }
  }

  return numbers;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
doubleEverySecondNumber(myNumbers);  // => [1, 4, 3, 7, 2, 6]

// not mutated
myNumbers;                    // => [1, 8, 3, 14, 2, 12]

// =======================
// function to take an additional argument in order to determine the transformation criterion

function multiply(numbersArray, multiplier) {
  let counter = 0;

  while (counter < numbersArray.length) {
    numbersArray[counter] *= multiplier;

    counter += 1;
  }

  return numbersArray;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
multiply(myNumbers, 3); // => [3, 12, 9, 21, 6, 18]