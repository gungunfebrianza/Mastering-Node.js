/* Definition :
This method is like _.findIndex except that it iterates over elements of collection from right to left.
Since

2.0.0
Arguments

    array (Array): The array to inspect.
    [predicate=_.identity] (Function): The function invoked per iteration.
    [fromIndex=array.length-1] (number): The index to search from.

Returns

(number): Returns the index of the found element, else -1. */
var _ = require('lodash');

var users = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'barney', active: true },
  { user: 'Gun', active: true }
];
const test = _.findLastIndex(users, function(o) {
  return o.user === 'barney';
});
console.log(test);
// => 2

const active = _.findLastIndex(users, function(o) {
  return o.active === true;
});
console.log(active);
// => 3
