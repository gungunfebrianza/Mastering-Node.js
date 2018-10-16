/* Definition :
Creates an array of unique values that are included in all given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

Since
0.1.0

Arguments

    [arrays] (...Array): The arrays to inspect.

Returns

(Array): Returns the new array of intersecting values. */
var _ = require('lodash');
const newArr = _.intersection([2, 3, 1], [2, 3, 4]);
console.log(newArr); // => [ 2, 3 ]
