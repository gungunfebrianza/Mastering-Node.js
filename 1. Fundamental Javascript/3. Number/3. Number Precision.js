/* Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
Example */

var x = 999999999999999; // x will be 999999999999999
var y = 9999999999999999; // y will be 10000000000000000

console.log(x);
console.log(y);

/* The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate:
Example */
var x = 0.2 + 0.1; // x will be 0.30000000000000004
console.log(x);

/* To solve the problem above, it helps to multiply and divide:
Example */
var x = (0.2 * 10 + 0.1 * 10) / 10; // x will be 0.3
