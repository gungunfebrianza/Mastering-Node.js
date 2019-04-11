/* Definition :
Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements. */

var _ = require('lodash');

console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
// => [['a', 'b'], ['c', 'd']]

console.log(_.chunk(['a', 'b', 'c', 'd'], 3));
// => [['a', 'b', 'c'], ['d']]
