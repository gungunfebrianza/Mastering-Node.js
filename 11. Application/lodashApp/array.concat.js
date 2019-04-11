/* Definition :
Creates a new array concatenating array with any additional arrays and/or values. */
var _ = require('lodash');

var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]