/* Definition and Usage
The map() method creates a new array with the results of calling a function for every array element.
The map() method calls the provided function once for each element in an array, in order.

Note: map() does not execute the function for array elements without values.
Note: map() does not change the original array.

Return an array with the square root of all the values in the original array: */

/* Syntax
array.map(function(currentValue, index, arr), thisValue) */

/* Parameter :
Argument 	Description
currentValue 	Required. The value of the current element
index 	Optional. The array index of the current element
arr 	Optional. The array object the current element belongs to */

/* Technical Details
Return Value: 	
An Array containing the results of calling the provided function for each element in the original array. */

const numbers = [4, 9, 16, 25];
console.log(numbers.map(Math.sqrt));

var numbersMultiply = [65, 44, 12, 4];

function multiplyArrayElement(num) {
  return num * 2;
}

console.log(numbersMultiply.map(multiplyArrayElement));
