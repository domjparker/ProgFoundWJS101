// Practice Problem 1
// How would you order the following array of number strings by descending numeric value (largest number value to smallest)?


let arr = ['10', '11', '9', '7', '8'];

arr.sort((a, b) => Number(b) - Number(a));

// Practice Problem 2
// How would you order the following array of objects based on the year of publication of each book, from the earliest to the latest?

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.sort((a, b) => Number(a.published) - Number(b.published));

// Practice Problem 3
// For each of these collection objects, demonstrate how you would access the letter g.

let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 } }

arr1[2][1][3];
arr2[1].third[0];
arr3[2].third[0][0];
obj1.b[1];
Object.keys(obj2["third"])[0];


// Practice Problem 4
// For each of these collection objects, demonstrate how you would change the value 3 to 4.

let arr1 = [1, [2, 3], 4];

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

let obj1 = { first: [1, 2, [3]] };

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };

arr1[1][1] = 4;
arr2[2] = 4;
obj1["first"][2][0] = 4;
obj2["a"]["a"][2] = 4;


// Practice Problem 5
// Consider the following nested object:
// Compute and display the total age of the male members of the family.

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female' }
};

let maleAgeTotal = 0

Object.values(munsters).forEach(munster => {
  if (munster.gender === 'male') {
    maleAgeTotal += munster.age;
  }

})

console.log(maleAgeTotal);

// Practice Problem 6
// One of the most frequently used real-world string operations is that of "string substitution," where we take a hard-coded string and modify it with various parameters from our program.

// Given this previously seen family object, print the name, age, and gender of each family member:


let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female' }
};
// Each output line should follow this pattern:
// (Name) is a (age)-year-old (male or female).

Object.entries(munsters).forEach(munster => {
  let name = munster[0][0].toUpperCase() + munster[0].slice(1);
  let age = munster[1].age;
  let gender = munster[1].gender;
  console.log(`${name} is a ${age}-year-old ${gender}.`)
})


// Practice Problem 7
// Given the following code, what will the final values of a and b be? Try to answer without running the code.

let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;

// a = 2
// b = [3, 8]    because 2 is a primitive value, it is passed by value to arr, but b is an array, and therefore is passed by reference (changeable)


// Practice Problem 8
// Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop.


let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let vowels = 'aeiou'

Object.values(obj).forEach(element => {
  element.forEach(word => {
    word.split('').forEach(letter => {
      if (vowels.includes(letter)) {
        console.log(letter);
      }
    });
  });
});

// Practice Problem 9
// Given the following data structure, return a new array with the same structure, but with the subarrays ordered -- alphabetically or numerically as appropriate -- in ascending order.


let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    return subArr.slice().sort();
  } else {
    return subArr.slice().sort((a, b) => a - b);
  }
});


// Practice Problem 10
// Perform the same transformation of sorting the subarrays we did in the previous exercise with one difference; sort the elements in descending order.

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    return subArr.slice().sort().reverse();
  } else {
    return subArr.slice().sort((a, b) => b - a);
  }
});

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    return subArr.slice().sort((a, b) => {
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else {
        return 0;
      }
    });
  } else {
    return subArr.slice().sort((a, b) => b - a);
  }
});


// Practice Problem 11
// Given the following data structure, use the map method to return a new array identical in structure to the original but, with each number incremented by 1. Do not modify the original data structure.

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

arr.map(obj => {
  return Object.fromEntries(Object.entries(obj).map(subArr => {
    return subArr = [subArr[0], subArr[1] += 1];
  }));
})


// Practice Problem 12
// Given the following data structure, use a combination of methods, including filter, to return a new array identical in structure to the original, but containing only the numbers that are multiples of 3.

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

arr.map(subArray => {
  return subArray.filter(element => {
    return element % 3 === 0;
  })
});


// Practice Problem 13
// Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
// Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:

[[1, 8, 3], [1, 6, 7], [1, 5, 3]]


let sumOdd = arr => {
  let result = 0;
  arr.forEach(num => {
    if (num % 2 !== 0) {
      result += num
    }
  })
  return result;
};

arr.sort((a, b) => sumOdd(a) - sumOdd(b));


// Practice Problem 14
// Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};
// The return value should look like this:
// [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

Object.values(obj).map(thing => {
  if (thing['type'] === 'fruit') {
    return thing["colors"].map(col => {
      return col[0].toUpperCase() + col.slice(1);
    })
  } else {
    return thing["size"].toUpperCase();
  }
});


// Practice Problem 15
// Given the following data structure, write some code to return an array which contains only the objects where all the numbers are even.

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

arr.filter(obj => {
  return Object.values(obj).flat().every((num) => num % 2 === 0);
})


// Practice Problem 16
// Given the following data structure, write some code that returns an object where the key is the first item in each subarray, and the value is the second.

let arr = [['a', 1], ['b', 'two'], ['sea', { 'c': 3 }], ['D', ['a', 'b', 'c']]];

let object = {};
arr.forEach(subArray => {
  return object[subArray[0]] = subArray[1];
});

object;
// expected return value of function call = { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }


// Practice Problem 17
// A UUID is a type of identifier often used to uniquely identify items, even when some of those items were created on a different server or by a different application. That is, without any synchronization, two or more computer systems can create new items and label them with a UUID with no significant risk of stepping on each other's toes. It accomplishes this feat through massive randomization. The number of possible UUID values is approximately 3.4 X 10E38, which is a huge number. The chance of a conflict is vanishingly small with such a large number of possible values.

// Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f) represented as a string. The value is typically broken into 5 sections in an 8-4-4-4-12 pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

// Write a function that takes no parameters and returns a UUID.

const POSSIBLE_CHARS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
const SUBSECTIONS = [8, 4, 4, 4, 12]

let randomCode = (length) => {
  let code = [];
  for (let i = 0; i < length; i += 1) {
    let numberUpToLength = Math.floor(Math.random() * POSSIBLE_CHARS.length);
    code.push(POSSIBLE_CHARS[numberUpToLength]);
  }
  return code.join('');
}

const CREATE_UUID = () => {
  let codeArray = SUBSECTIONS.map(section => {
    return randomCode(Number(section))
  })
  let codeString = codeArray.join('-')

  return `${codeString}`;
}

CREATE_UUID();