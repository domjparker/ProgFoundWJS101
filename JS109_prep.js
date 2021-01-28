let animal = "dog"

const speak = animal => {
  if (animal === undefined) {
    console.log("Bark")
  } else {
    console.log("Meow")
  }
}

speak();

/*
// built- in array methods
// forEach
  - iteration
  - returns undefined
  - arg: callback function
  - return value of callback is used how? forEach IGNORES it

// filter
  - selection
  - new array 
  - arg: callback function
  - return value of callback is used how? 
    - evalutes the truthiness of the callback's return value
    - if the return val is truthy, the original element of the calling array
    - will be placed in the new returned array


// map
  - transformation
  - new array  
  - arg: callback function
  - return value of callback is used how? 
    - takes the return value of the callback on each iteration, and places it into the new returned arr
  
*/