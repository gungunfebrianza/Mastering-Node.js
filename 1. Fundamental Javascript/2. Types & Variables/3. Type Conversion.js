//convert to string
let value = true;
console.log(typeof value); // boolean

value = String(value); // now value is a string "true"
console.log(typeof value); // string

//Convert to Number
let str = '123';
let num = Number(str); // becomes a number 123
console.log(typeof num); // string

let age = Number('an arbitrary string instead of a number');
let nan = Number(age);
console.log(age); // NaN
console.log(typeof age);
