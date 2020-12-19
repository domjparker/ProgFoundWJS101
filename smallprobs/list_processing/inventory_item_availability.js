/*
Building on the previous exercise, write a function that returns true or false based on whether or not an inventory item is available. As before, the function takes two arguments: an inventory item and a list of transactions. The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.

You may (and should) use the transactionsFor function from the previous exercise.
*/
// TODO Problem
/*
Explicit Requirements:
- INPUT = 2 arguments = inventory item number, and array of transactions objects
- OUTPUT = boolean representing whether an inventory item is available
- RULES = only return true if the quantity of items for that item number is positive, after factoring in 
the coming in and going out of items.

Implicit Requirements:

Questions:

*/
// TODO Examples
/*
let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true
*/
// TODO Data Structures
/*
array of objects > filtered array of objects > sum calculation of quantities > boolean
*/
// TODO Algorithm
/*
-function takes in itemId and transActArr
-filter transActArr to include only items objecs that have id of itemId
-set totalquantity variable to 0
-for each object in filteredArray
  -if movement value is "in" add value to total quantity
  -if movement value is "out" subtract value from total quantity
-return if totalquantity is greater than 0
*/
// TODO Code

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(itemNumber, transactionsArray) {
  return transactionsArray.filter(object => object["id"] === itemNumber);
}

function isItemAvailable(itemNum, transActArr) {
  let filteredArray = transactionsFor(itemNum, transActArr);
  let totalQuantity = 0;
  filteredArray.forEach(itemObject => {
    itemObject.movement === "in" ? totalQuantity += itemObject.quantity : totalQuantity -= itemObject.quantity;
  })
  return totalQuantity > 0;
}

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true