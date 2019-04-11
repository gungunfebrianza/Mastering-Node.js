/* Definition :
Recursively flatten array up to depth times. 
Arguments

    array (Array): The array to flatten.
    [depth=1] (number): The maximum recursion depth.

Returns

(Array): Returns the new flattened array.
*/

var _ = require('lodash');
var array = [1, [2, [3, [4]], 5]];

_.flattenDepth(array, 1);
// => [1, 2, [3, [4]], 5]

_.flattenDepth(array, 2);
// => [1, 2, 3, [4], 5]
