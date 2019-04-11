/* Definition:
Gets the index at which the first occurrence of value is found in array using SameValueZero for equality comparisons. If fromIndex is negative, it's used as the offset from the end of array.
Since

0.1.0
Arguments

    array (Array): The array to inspect.
    value (*): The value to search for.
    [fromIndex=0] (number): The index to search from.

Returns

(number): Returns the index of the matched value, else -1. */
var _ = require('lodash');

_.indexOf([1, 2, 1, 2], 2);
// => 1

// Search from the `fromIndex`.
console.log(_.indexOf([1, 2, 1, 4, 2], 2, 2));
// => 4
