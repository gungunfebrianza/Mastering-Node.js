/* Definition
Sometimes we need a "blueprint" for creating many objects of the same "type".
The way to create an "object type", is to use an object constructor function.
In the example below, function Person() is an object constructor function.
Objects of the same type are created by calling the constructor function with the new keyword: 
*/
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.name = function() {
    return this.firstName + " " + this.lastName;
  };
}
var Gun = new Person("Gun", "Febrianza", 26, "blue");
var Nowo = new Person("Nowo", "Adisuryo", 22, "green");
console.log(Gun);
console.log(Gun.name());
console.log(Nowo);

/* The this Keyword
In JavaScript, the thing called this is the object that "owns" the code.
The value of this, when used in an object, is the object itself.
In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the new object when a new object is created. */
