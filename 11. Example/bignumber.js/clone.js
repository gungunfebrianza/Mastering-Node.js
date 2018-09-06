const BigNumber = require('bignumber.js')

BigNumber.config({ DECIMAL_PLACES: 5 })
BN = BigNumber.clone({ DECIMAL_PLACES: 32 })

x = new BigNumber(1)
y = new BN(1)

console.log(x.div(3).toNumber());                        // 0.33333
console.log(y.div(3).toNumber());                        // 0.333333333
