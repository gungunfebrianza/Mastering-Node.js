const isNumber = require('is-number');

isNumber(5e3);               // true
isNumber(0xff);              // true
isNumber(-1.1);              // true
isNumber(0);                 // true
isNumber(1);                 // true
isNumber(1.1);               // true
isNumber(10);                // true
isNumber(10.10);             // true
isNumber(100);               // true
isNumber('-1.1');            // true
isNumber('0');               // true
isNumber('012');             // true
isNumber('0xff');            // true
isNumber('1');               // true
isNumber('1.1');             // true
isNumber('10');              // true
isNumber('10.10');           // true
isNumber('100');             // true
isNumber('5e3');             // true
isNumber(parseInt('012'));   // true
console.log(isNumber(parseFloat('012'))); // true

isNumber('foo');             // false
isNumber([1]);               // false
isNumber([]);                // false
isNumber(function () {});    // false
isNumber(Infinity);          // false
isNumber(NaN);               // false
isNumber(new Buffer('abc')); // false
isNumber(null);              // false
isNumber(undefined);         // false
isNumber({abc: 'abc'});      // false
