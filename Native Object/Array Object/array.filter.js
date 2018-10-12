/* Definition and Usage
The filter() method creates an array filled with 
all array elements that pass a test (provided as a function). 

Note: filter() does not execute the function for array elements without values.
Note: filter() does not change the original array.
*/

/* Syntax
array.filter(function(currentValue, index, arr), thisValue) */

/* Return Value: 	
An Array containing all the array elements that pass the test. If no elements pass the test it returns an empty array. */

/* Argument 	Description
currentValue 	Required. The value of the current element
index 	Optional. The array index of the current element
arr 	Optional. The array object the current element belongs to */

const numbers = [4, 9, 16, 25];
const over18 = numbers.filter((value, index, array) => {
  return value > 8;
});

console.log(over18);
