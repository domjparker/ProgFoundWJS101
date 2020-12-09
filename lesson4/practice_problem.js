// Write a program that uses this array to create an object where the names
// are the keys and the values are the positions in the array:
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let flintstonesObject = {};

flintstones.forEach((element, index) => {
  return flintstonesObject[element] = index;
});

console.log(flintstonesObject)

// { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

// ======= Add up all of the ages from the Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

Object.values(ages).reduce((acc, curr) => {
  return acc + curr;
}, 0);

// ======= Pick out the minimum age from our current Munster family object:

Object.values(ages).reduce((acc, curr) => {
  if (curr < acc) {
    return curr
  }
  else return acc;
}); // => 10

// or ...

let agesArr = Object.values(ages);
Math.min(...agesArr); // => 10

// ======= Create an object that expresses the frequency with which each
// letter occurs in this string:

let statement = "The Flintstones Rock";

let letterFrequency = {};

statement.split('').forEach(character => {
  if (character !== ' ') {
    if (!letterFrequency[character]) {
      letterFrequency[character] = 1;
    } else letterFrequency[character] += 1;
  }
});

// or...

let letterFrequency = {};

statement.split('').forEach(character => {
  if (character !== ' ') {
    letterFrequency[character] = letterFrequency[character] || 0;
    letterFrequency[character] += 1;
  }
});