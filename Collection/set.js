var Set = require("collections/set");


//A collection of unique values.
var object = {x: "hello"};
var set = new Set(["a", object]);

console.log(set.add("b"));
console.log(typeof set.add("b"));
var arr = [];
arr = set.toArray();
console.log('what is ? ' + arr);
console.log(typeof arr);

set.add(object);
// false
set.toArray();
// ["a",{"x":"hello"},"b"]
