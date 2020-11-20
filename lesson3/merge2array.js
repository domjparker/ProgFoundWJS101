let arrayOne = [1, 3, 36, 27, 84, 3, 5, 7];
let arrayTwo = [2, 4, 6, 8, -1];

function mergeArrays(arr1, arr2) {
  let finalArr = arr1.slice();
  arr2.forEach(arrayElement => finalArr.push(arrayElement))
  return finalArr.sort(function(a, b) {return a - b});
}

mergeArrays(arrayOne, arrayTwo);

console.log(arrayOne);
console.log(arrayTwo);