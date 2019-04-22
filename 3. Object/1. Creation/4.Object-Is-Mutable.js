/* Definition
JavaScript Objects are Mutable
Objects are mutable: They are addressed by reference, not by value.
If person is an object, the following statement will not create a copy of person:
The object x is not a copy of person. It is person. Both x and person are the same object.
Any changes to x will also change person, because x and person are the same object.  */

var person = {
  firstName: 'Gun Gun',
  lastName: 'Febrianza',
  age: 27,
  eyeColor: 'red brown'
};

var x = person;
x.age = 28;
console.log(x);
console.log(person); //changed too!
