/* Definition :
We also learned that you can not add a new property to an existing object constructor.

Prototype Inheritance
All JavaScript objects inherit properties and methods from a prototype.
Date objects inherit from Date.prototype. 
Array objects inherit from Array.prototype. 
Person objects inherit from Person.prototype.

The Object.prototype is on the top of the prototype inheritance chain:
Date objects, Array objects, and Person objects inherit from Object.prototype.

Adding Properties and Methods to Objects
Sometimes you want to add new properties (or methods) to all existing objects of a given type.
Sometimes you want to add new properties (or methods) to an object constructor. */

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";
var myFather = new Person("John", "Doe", 50, "blue");
console.log(myFather.nationality);
