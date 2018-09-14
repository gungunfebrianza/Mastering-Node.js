const math = require('mathjs')

math.config({
  number: 'BigNumber', // Default type of number:
  // 'number' (default), 'BigNumber', or 'Fraction'
  precision: 19 // 10 000 000 000.99999999
})

// round-off errors with numbers
console.log(math.add(0.1, 0.2));                                     // Number, 0.30000000000000004

// no round-off errors with BigNumbers :)
console.log(math.add(math.bignumber(0.1), math.bignumber(0.2)));      // BigNumber, 0.3
