// Load the full build.
const _ = require('lodash');

console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
// => [['a', 'b'], ['c', 'd']]);

var filteredArray = _.uniq(['Gun', 1, 'Gun', 1, 2, 3, 4]);
console.log(filteredArray);
