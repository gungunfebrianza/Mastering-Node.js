var List = require("collections/list");

/*An ordered list of values.
A List is backed by a doubly linked list with a head node.*/

var list = new List([1, 2, 3]);

//length properties
console.log(list.length);

//push - Adds values to the end of a collection.
list.push(4);
console.log(list.length);

//pop - Removes a value from the end of a collection, and returns that value.
list.pop();
console.log(list.length);

//shift - Removes a value from the beginning of a collection, and returns that value.
list.shift();
console.log(list.length)

//unshift - Adds values to the beginning of a collection.
list.unshift(9);
console.log(list.length);

//peek - Returns the value at the beginning of a collection, the value that would be returned by shift().
var x = list.peek();
console.log(x);

//Poke - Replaces the value at the beginning of a collection, the value that would be returned by shift().
list.poke(8);
console.log(list.peek());

//has - Whether an equivalent value exists in this collection.
console.log(list.has(8));
console.log(list.has(5));

var set = new List(["One", "TWO", "three"]);
set.has("two", function (a, b) {
    return console.log(a.toLowerCase() === b.toLowerCase());
});

//add - Adds a value to a collection.
console.log(list.add(31));
console.log(list.add(31));
console.log(list.add(31));
console.log(list.length);
console.log(list.toArray());

//delete - Deletes the first equivalent value. Returns whether the key was found and successfully deleted.
console.log(list.delete(2));
console.log(list.toArray());

//deleteAll - Deletes the first equivalent value. Returns whether the key was found and successfully deleted.
console.log(list.deleteAll(31));
console.log(list.toArray());

console.log(list.clear());
console.log(list.toArray());

console.log(list.add(31));
console.log(list.add(31));
console.log(list.add(33));

//one - Returns one, arbitrary value from this collection, or undefined if there are none.
console.log(list.one());

//reverse - Reverses the order of this collection in place.
console.log(list.reverse());
console.log(list.toArray());

//max - Returns the largest value in this collection.
console.log(list.max());

//min - Returns the smallest value in this collection.
console.log(list.min());

//average - Returns the arithmetic mean of the collection, by computing its sum and the count of values and returning the quotient.
console.log(list.average());

//sum - Returns the sum of all values in this collection.
console.log(list.sum());

//sort - Sorts a collection in place.
console.log(list.add(30));
console.log(list.sort());
console.log(list.toArray());

//enumerate - Returns an array of [index, value] entries for each value in this collection, counting all values from the given index.
console.log(list.enumerate());

//find -
list.find(30, function(a){
  console.log(a === 30);
})
