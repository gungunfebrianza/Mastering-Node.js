var numeral = require('numeral');

/*Create an instance of a numeral. Numeral takes numbers or strings that it
trys to convert into a number. */

var x = numeral(1123456789).format('0,0e+0');
var y = numeral(12398734.202).format('0.00e+0');
var z = numeral(0.000123987).format('0.00e+0');

console.log(x); //1e+9
console.log(y); //1.24e+7
console.log(z); //1.240e-4
