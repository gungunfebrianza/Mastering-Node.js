var numeral = require('numeral');

/*Create an instance of a numeral. Numeral takes numbers or strings that it
trys to convert into a number. */

// load a locale
numeral.register('locale', 'id', {
    delimiters: {
        thousands: ',',
        decimal: '.'
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    currency: {
        symbol: 'Rp '
    }
});

// switch between locales
numeral.locale('id');

var myNumeral = numeral('1k').format('$0,0[.]00')
console.log(myNumeral);
