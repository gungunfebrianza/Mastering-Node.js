var numeral = require('numeral');

/*Create an instance of a numeral. Numeral takes numbers or strings that it
trys to convert into a number. */

var myNumeral = numeral('$10,000.00');
console.log(myNumeral.value()); // 10000
console.log(typeof myNumeral.value()); //number
console.log(myNumeral.input()); //$10,000.00
console.log(typeof myNumeral.input()); //string
console.log(typeof myNumeral); //object numeral

var myNumeral = numeral('23rd');
console.log(myNumeral.value());
console.log(myNumeral.input());
