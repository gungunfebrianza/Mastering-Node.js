const BigNumber = require('bignumber.js')

console.log(123456789.12345678 + 0.1); // 0.30000000000000004
x = new BigNumber(123456789.12345678)
y = x.plus(0.1) // '0.3'
console.log(y.toNumber()); // '0.3'
