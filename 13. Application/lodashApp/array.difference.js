/* Definition :
Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array. 

Arguments

    array (Array): The array to inspect.
    [values] (...Array): The values to exclude.

Returns

(Array): Returns the new array of filtered values.
*/

var _ = require('lodash');

console.log(_.difference([5, 4, 3, 2, 1], [2, 3]));
// => [ 5, 4, 1 ]

console.log(_.difference(['hello', 'sweety'], ['hello', 'honey']));
// => [ 'sweety' ]

console.log(_.difference([{name:'maudy', age:25}, {name:'ayunda', age:25}],[{name:'maudy', age:25}]));