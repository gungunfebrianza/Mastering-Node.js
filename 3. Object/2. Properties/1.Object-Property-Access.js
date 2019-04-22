var person = {
  firstname: 'Gun Gun',
  lastname: 'Febrianza',
  age: 28,
  eyecolor: 'Red Brown',
  'likes birds': true // multiword property name must be quoted
};

console.log(person.firstname + ' is ' + person.age + ' years old.');
console.log(person['firstname'] + ' is ' + person['age'] + ' years old.');
console.log(person['likes birds']);
