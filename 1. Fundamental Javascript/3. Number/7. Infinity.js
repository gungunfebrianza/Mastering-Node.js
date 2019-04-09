/* Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number. */
var myNumber = 2;
while (myNumber != Infinity) {
  // Execute until Infinity
  console.log((myNumber = myNumber * myNumber));
}
/* Output :
4
16
256
65536
4294967296
18446744073709552000
3.402823669209385e+38
1.157920892373162e+77
1.3407807929942597e+154
Infinity */

// Division by 0 (zero) also generates Infinity:
var x = 2 / 0; // x will be Infinity
var y = -2 / 0; // y will be -Infinity

// Infinity is a number: typeof Infinity returns number.
typeof Infinity; // returns "number"
