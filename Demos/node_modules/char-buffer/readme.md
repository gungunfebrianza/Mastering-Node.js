# char-buffer [![Dependencies Status Image](https://gemnasium.com/schnittstabil/char-buffer.svg)](https://gemnasium.com/schnittstabil/char-buffer) [![Build Status Image](https://travis-ci.org/schnittstabil/char-buffer.svg)](https://travis-ci.org/schnittstabil/char-buffer) [![Coverage Status](https://coveralls.io/repos/github/schnittstabil/char-buffer/badge.svg?branch=master)](https://coveralls.io/github/schnittstabil/char-buffer?branch=master) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](http://gruntjs.com/) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> Collect CharCodes and convert them to a string.

## Install

```bash
$ npm install --save char-buffer
# or
$ jspm install char-buffer=github:schnittstabil/char-buffer
```

## Usage

```javascript
const CharBuffer = require('char-buffer');

// Create a CharBuffer
var buffer = new CharBuffer();

// Append a CharCode:
buffer.append(102);

// Append two more CharCodes:
buffer.append(111).append(111);

// Output 'foo':
console.log(buffer.toString());
```


## Documentation

* See [API](http://schnittstabil.github.io/char-buffer/api/#!/api) for thorough documentation.

## Related

* [caesar-salad](https://github.com/schnittstabil/caesar-salad) uses `char-buffer` for Caesar, Vigenere and ROT encryption.

## License

MIT © [Michael Mayer](http://schnittstabil.de)

