var numeral = require('numeral');

/*Create an instance of a numeral. Numeral takes numbers or strings that it
trys to convert into a number. */

var myNumeral = numeral(238).format('00:00:00');
console.log(myNumeral); 
