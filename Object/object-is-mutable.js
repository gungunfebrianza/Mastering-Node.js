/* Definition
JavaScript Objects are Mutable
Objects are mutable: They are addressed by reference, not by value.
If person is an object, the following statement will not create a copy of person:
The object x is not a copy of person. It is person. Both x and person are the same object.
Any changes to x will also change person, because x and person are the same object.  */

var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

var x = person;
x.age = 10;
console.log(x);
