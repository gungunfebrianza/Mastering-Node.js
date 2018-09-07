var numeral = require('numeral');

/*Create an instance of a numeral. Numeral takes numbers or strings that it
trys to convert into a number. */

var number = numeral(1000);
var added = number.add(10);
var subtracted = number.subtract(100)
var divided = number.divide(100)
var multiplied = number.multiply(100)

console.log(added); // 1010
console.log(subtracted); //900
console.log(divided); //10
console.log(multiplied); //100000

//immutable

var number = numeral(1000);
var added = number.add(10);
var number = numeral(1000);
var subtracted = number.subtract(100)
var number = numeral(1000);
var divided = number.divide(100)
var number = numeral(1000);
var multiplied = number.multiply(100)

console.log(added); // 1010
console.log(subtracted); //900
console.log(divided); //10
console.log(multiplied); //100000
