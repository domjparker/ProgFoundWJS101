// Example 3.
[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
});

/*
Action: method call (map) |Performed on: outer array |Side Effect: none	|Return Value: New array [1, 3]	|Is Return Value Used?: no, but shown on last line.
Action:	callback execution |Performed on: each sub-array |Side Effect: return value	|Return Value: first value of sub-array	|Is Return Value Used?: used to populate array returned by .map
Action:	element reference ([0]) |Performed on: each sub-array |Side Effect: 	|Return Value: element at index 0 of sub-array	|Is Return Value Used?: used by console.log()
Action:	method call (console.log[0]) |Performed on: index[0] of sub-array |Side Effect: logs string of index[0] value	|Return Value: undefined	|Is Return Value Used?: no.
Action:	return element reference ([0]) |Performed on: each sub-array |Side Effect: none ()	|Return Value: index 0 of sub-array	|Is Return Value Used?: yes, to returns value from the callback to the new array made by .map
*/
// 1
// 3
// => [1, 3]

// ==================

// Example 4.
let myArr = [[18, 7], [3, 12]].forEach(arr => {
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
  });
});
/*
Action:	 myArr declared and assigned a value |Performed on: not available |Side Effect: none	|Return Value: undefined (variable declaration returns undefined)	|Is Return Value Used?: no. ------------
Action:	method call (forEach)|Performed on: array with 2 sub-arrays |Side Effect: none	|Return Value: undefined	|Is Return Value Used?: assigned to myArr. ---------------
Action:	outer callback execution |Performed on: each sub-array |Side Effect: none	|Return Value: [undefined, undefined]	|Is Return Value Used?: no.  ----------------
Action:	method call (map) |Performed on: each sub-array |Side Effect: none	|Return Value: [undefined, undefined]	|Is Return Value Used?: yes, returned to outer callback. -------------------
Action:	inner callback execution |Performed on: any sub-array elements > 5 |Side Effect: none	|Return Value: undefined	|Is Return Value Used?: used to transform array. ----------------
Action: comparison (num > 5)	|Performed on: each number in sub-array |Side Effect: none	|Return Value: boolean	|Is Return Value Used?: yes, evaluated by if. ---------------
Action:	method call (console.log) |Performed on: element in the sub-array of current iteration |Side Effect: outputs string representation of a Number	|Return Value: undefined	|Is Return Value Used?: yes, used to determine return value of inner callback. -----------------
*/
// 18
// 7
// 12
// => undefined

//======================

// Example 5.
[[1, 2], [3, 4]].map(arr => {
  return arr.map(num => num * 2);
});
/*
Action:	method call (map) |Performed on: [[1, 2], [3, 4]] |Side Effect: none	|Return Value: new transformed array	|Is Return Value Used?: no. ---------------
Action:	outer callback execution |Performed on: each sub-array |Side Effect: none	|Return Value: new transformed array	|Is Return Value Used?: used by first .map for transformation.
Action:	method call (map) |Performed on: current sub-array in iteration |Side Effect: none	|Return Value: new transformed sub-array	|Is Return Value Used?: yes, returned by outer callback.
Action:	inner callback execution |Performed on: each element in current sub-array |Side Effect: none	|Return Value: a number	|Is Return Value Used?: used by second .map for transformation.
Action:	multiplication (num * 2) |Performed on: current element in current sub-array of iteration |Side Effect: none	|Return Value: current element num doubled through multiplication	|Is Return Value Used?: yes, returned by second/inner callback. 
*/
//[ [ 2, 4 ], [ 6, 8 ] ]

//======================

// Example 6.
[{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).every(key => object[key][0] === key);
});

// => [ { c: 'cat', d: 'dog' } ]
/*
Action:	.filter method called  |Performed on: original array |Side Effect: none	|Return Value: filtered array	|Is Return Value Used?: filtered array is returned
Action:	 outer callback execution |Performed on: element/object in array |Side Effect: no	|Return Value: filtered array	|Is Return Value Used?: used by .filter for selection.
Action:	method call .keys |Performed on: current object in iteration |Side Effect: none	|Return Value: array of object's keys	|Is Return Value Used?: yes, used by next method call (.every) 
Action:	method call .every |Performed on: array of keys of object in current iteration |Side Effect: none	|Return Value: boolean	|Is Return Value Used?: used by .filter to select original array elements to include in filtered array.
Action:	.every's callback execution |Performed on: each element in array of keys |Side Effect: none	|Return Value: boolean|Is Return Value Used?: yes, returned to .every to determine elements to be returned to .filter.
Action:	comparison/equality operator |Performed on: current key in .every array |Side Effect: none	|Return Value: boolean	|Is Return Value Used?: used to tell .every whether the first letter of each object element's string is equal to the value of current key's value.
*/
// => [ { c: 'cat', d: 'dog' } ]

// instead of .every(), if using .some(), an array of both objects would be returned because at least Object[a][0] would be === to 'a'.

//======================

// Example 7.
[[8, 13, 27], ['apple', 'banana', 'cantaloupe']].map(arr => {
  return arr.filter(item => {
    if (typeof item === 'number') {    // if it's a number
      return item > 13;
    } else {
      return item.length < 6;
    }
  });
});
// => [ [ 27 ], [ 'apple' ] ]
/*
Action:	method call .map |Performed on: original array |Side Effect: none	|Return Value: transformed array	|Is Return Value Used?: no.
Action:	outer callback execution |Performed on: each sub-array |Side Effect: none	|Return Value: new transformed array	|Is Return Value Used?: used by .map
Action:	method call .filter |Performed on: each sub-array |Side Effect: none	|Return Value: filtered sub-array	|Is Return Value Used?: returned to outer callback .map
Action:	inner callback execution |Performed on: each element of current sub-array in iteration |Side Effect: none	|Return Value: filtered element 	|Is Return Value Used?: used to populate the filtered array with filtered elements.
Action:	equality comparison (===) |Performed on: Element of the sub-array in current iteration |Side Effect: none	|Return Value: boolean	|Is Return Value Used?: evaluated by if to initiate next comparison.
Action:	comparison (>) |Performed on: Element of the sub-array in current iteration that has type number |Side Effect: none	|Return Value: boolean	|Is Return Value Used?: used to determine whether item be added to filtered array.
Action:	comparison (<) |Performed on: Element of the sub-array in current iteration that doesn't have type number |Side Effect: none	|Return Value: boolean |Is Return Value Used?: used to determine whether item be added to filtered array.
*/

// ===================

// Example 8.
[[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map(element1 => {
  return element1.forEach(element2 => {
    return element2.filter(element3 => {
      return element3.length > 0;
    });
  });
});

// => [ undefined, undefined ]
/*
Action:	method call .map |Performed on: original array |Side Effect: none	|Return Value: new transformed array	|Is Return Value Used?: no
Action:	.map callback execution |Performed on: each sub-array |Side Effect: none.	|Return Value: new transformed array	|Is Return Value Used?: returned to .map
Action:	method call .forEach |Performed on: each sub-sub-array |Side Effect: none	|Return Value: undefined	|Is Return Value Used?: returned to .map
Action:	.forEach callback execution |Performed on: sub-sub-array in current iteration |Side Effect: none	|Return Value: undefined	|Is Return Value Used?: no 
Action:	method call .filter |Performed on: each element of sub-sub-array in current iteration |Side Effect: none	|Return Value: filtered (sub-sub-array)	|Is Return Value Used?: returned to .forEach
Action:	.filter callback execution |Performed on: current element in sub-sub-array iteration |Side Effect: none	|Return Value: filtered element	|Is Return Value Used?: used by .filter for selection.
Action:	comparison |Performed on: current element in sub-sub-array iteration |Side Effect: none |Return Value: boolean	|Is Return Value Used?: used to determine whether element be added to filtered array.
*/

// =====================

// Example 9.
[[[1, 2], [3, 4]], [5, 6]].map(arr => {
  return arr.map(elem => {
    if (typeof elem === 'number') { // it's a number
      return elem + 1;
    } else {                  // it's an array
      return elem.map(number => number + 1);
    }
  });
});

/*
Action:	method call .map (outer)|Performed on: original array |Side Effect: none	|Return Value: new transformed array	|Is Return Value Used?: no
Action:	.map callback execution |Performed on: each sub-array in the original array |Side Effect: none	|Return Value: new transformed array	|Is Return Value Used?: returned to outer map
Action:	method call .map (middle)|Performed on: each sub-array element of outer array|Side Effect: none	|Return Value: new transformed sub-array	|Is Return Value Used?: returned to outer .map
Action:	.map (middle) callback execution |Performed on: element in sub-array at current iteration|Side Effect: none	|Return Value: transformed element	|Is Return Value Used?: used to populate tranformed sub-array formed by middle .map
Action:	equality comparison (===)|Performed on: element in sub-array at current iteration|Side Effect: none	|Return Value: boolean	|Is Return Value Used?: evaluated by if.
Action:	addition sum|Performed on: element at current iteration that has type number|Side Effect: none	|Return Value: number	|Is Return Value Used?: returned to middle .map callback
Action:	method call .map (innermost)|Performed on: element at current iteration that doesn't have type number |Side Effect: none	|Return Value: new transformed array of sub-elements	|Is Return Value Used?: returned to middle .map callback
Action:	.map (innermost) callback execution|Performed on: each sub-sub array of second sub-array|Side Effect: none	|Return Value: new transformed sub-array of sub-sub-arrays	|Is Return Value Used?: returned to innermost .map.
Action:	addition sum|Performed on: |Side Effect: each element in sub-sub-array	|Return Value: number	|Is Return Value Used?: returned to innermost .map callback.
*/

//[[[2, 3], [4, 5]], [6, 7]]