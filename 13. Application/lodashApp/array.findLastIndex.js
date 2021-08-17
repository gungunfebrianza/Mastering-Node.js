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
  { user: 'Maudy', active: false },
  { user: 'Gun', active: false },
  { user: 'Maudy', active: true },
  { user: 'Febrianza', active: true }
];
const test = _.findLastIndex(users, function(o) {
  return o.user === 'Maudy';
});
console.log(test);
// => 2

const active = _.findLastIndex(users, function(o) {
  return o.active === true;
});
console.log(active);
// => 3
