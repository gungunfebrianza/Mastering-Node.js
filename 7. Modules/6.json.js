var obj = {
 name: 'Maudy Ayunda'
};
var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

var personString = '{"name": "Maudy Ayunda","age": 25}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);
console.log(person.name);
