/* Definition :
Creates a slice of array with n elements dropped from the beginning */
var _ = require('lodash');

console.log(_.drop([1, 2, 3]));
// => [2, 3]

console.log(_.drop([1, 2, 3], 2));
// => [3]

console.log(_.drop([1, 2, 3], 3));
// => []

console.log(_.drop([1, 2, 3], 15));
// => []

console.log(_.drop([1, 2, 3], 0));
// => [1, 2, 3]
