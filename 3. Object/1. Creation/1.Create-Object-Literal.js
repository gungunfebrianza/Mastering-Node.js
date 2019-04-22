/*Objects are variables too. But objects can contain many values.
  We can immediately put some properties into {...} as “key: value” pairs:
  */
var person = {
  firstName: 'John',
  age: 50
};

console.log('firstName : ' + person.firstName);
console.log('Age : ' + person.age);

// Example :
// [1]
var car = {
  type: 'mazda',
  color: 'red',
  speed: 900
};
console.log(car.type);

car.owner = 'gun gun febrianza';
console.log(car.owner);
