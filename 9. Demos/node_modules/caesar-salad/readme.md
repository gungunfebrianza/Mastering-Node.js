# caesar-salad [![Dependency Status](https://gemnasium.com/schnittstabil/caesar-salad.svg)](https://gemnasium.com/schnittstabil/caesar-salad) [![Build Status](https://travis-ci.org/schnittstabil/caesar-salad.svg?branch=master)](https://travis-ci.org/schnittstabil/caesar-salad) [![Coverage Status](https://coveralls.io/repos/github/schnittstabil/caesar-salad/badge.svg?branch=master)](https://coveralls.io/github/schnittstabil/caesar-salad?branch=master) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> Caesar, Vigenere and ROT Ciphers

## Install

```bash
$ npm install --save caesar-salad
# or
$ jspm install caesar-salad=github:schnittstabil/caesar-salad
```

## Usage

### Caesar Cipher

See [here](http://schnittstabil.github.io/caesar-salad/api/classes/Password.html) for supported password formats.

```JavaScript
const Caesar = require('caesar-salad').Caesar;

Caesar.Cipher('c').crypt('abc-0123456789@example.com');
//=> cde-0123456789@gzcorng.eqo

Caesar.Decipher('c').crypt('cde-0123456789@gzcorng.eqo');
//=> abc-0123456789@example.com
```

### Vigenere Cipher

See [here](http://schnittstabil.github.io/caesar-salad/api/classes/Password.html) for supported password formats.

```JavaScript
const Vigenere = require('caesar-salad').Vigenere;

Vigenere.Cipher('password').crypt('abc-0123456789@example.com');
//=> pbu-0123456789@wtodsae.ugi

Vigenere.Decipher('password').crypt('pbu-0123456789@wtodsae.ugi');
//=> abc-0123456789@example.com
```

### ROT Cipher

```JavaScript
const caesarSalad = require('caesar-salad');
const ROT13 = caesarSalad.ROT13;
const  ROT5 = caesarSalad.ROT5;
const ROT18 = caesarSalad.ROT18;
const ROT47 = caesarSalad.ROT47;

ROT13.Cipher().crypt('abc-0123456789@example.com');    //=> nop-0123456789@rknzcyr.pbz
 ROT5.Cipher().crypt('abc-0123456789@example.com');    //=> abc-5678901234@example.com
ROT18.Cipher().crypt('abc-0123456789@example.com');    //=> nop-5678901234@rknzcyr.pbz
ROT47.Cipher().crypt('abc-0123456789@example.com');    //=> 234\\_`abcdefgho6I2>A=6]4@>


ROT13.Decipher().crypt('nop-0123456789@rknzcyr.pbz');  //=> abc-0123456789@example.com
 ROT5.Decipher().crypt('abc-5678901234@example.com');  //=> abc-0123456789@example.com
ROT18.Decipher().crypt('nop-5678901234@rknzcyr.pbz');  //=> abc-0123456789@example.com
ROT47.Decipher().crypt('234\\_`abcdefgho6I2>A=6]4@>'); //=> abc-0123456789@example.com
```

## Documentation

* See [API](http://schnittstabil.github.io/caesar-salad/api/) for thorough documentation

## Related

* [caesar-salad-cli](https://github.com/schnittstabil/caesar-salad-cli) CLI for this module

## License

MIT © [Michael Mayer](http://schnittstabil.de)
