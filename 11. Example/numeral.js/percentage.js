var numeral = require('numeral');

/*Create an instance of a numeral. Numeral takes numbers or strings that it
trys to convert into a number. */

var myNumeral = numeral(343.44223).format('0.000%');
console.log(myNumeral); //34344.223%
