/* Definition and Usage
The toPrecision() method formats a number to a specified length.
A decimal point and nulls are added (if needed), to create the specified length. */

var num = 13.3714;
var a = num.toPrecision();
var b = num.toPrecision(2);
var c = num.toPrecision(3);
var d = num.toPrecision(10);

console.log(a);
console.log(b);
console.log(c);
console.log(d);

/* Result 
13.3714;
13;
13.4;
13.3714; */
