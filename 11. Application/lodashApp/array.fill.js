/* Definition :
Fills elements of array with value from start up to, but not including, end.

Note: This method mutates array.
Since

3.2.0
Arguments

    array (Array): The array to fill.
    value (*): The value to fill array with.
    [start=0] (number): The start position.
    [end=array.length] (number): The end position.

Returns

(Array): Returns array.*/

var _ = require('lodash');
var array = [1, 2, 3];

_.fill(array, 'a');
console.log(array);
// => ['a', 'a', 'a']

_.fill(Array(3), 2);
// => [2, 2, 2]

const newArray = _.fill([4, 6, 8, 10], '*', 1, 3);
// => [4, '*', '*', 10]

console.log(newArray);
