var numeral = require('numeral');

/*Create an instance of a numeral. Numeral takes numbers or strings that it
trys to convert into a number. */

var number = numeral(1000);
number.set(0.05);
var accuracy = number.add(0.01);
console.log(accuracy);
