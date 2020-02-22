  var person = {
    firstname: 'Gun Gun',
    lastname: 'Febrianza',
    age: 28,
    eyecolor: 'Red Brown',
    'super loyal': true // multiword property name must be quoted
  };

  console.log(person.firstname + ' is ' + person.age + ' years old.');
  // Gun Gun is 28 years old.
  console.log(person['firstname'] + ' is ' + person['age'] + ' years old.');
  // Gun Gun is 28 years old.
  console.log(person['super loyal']);
  // true
