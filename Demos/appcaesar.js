const Caesar = require('caesar-salad').Caesar;

var x = Caesar.Cipher('c').crypt('abc-0123456789@example.com');
console.log(x);
//=> cde-0123456789@gzcorng.eqo

Caesar.Decipher('c').crypt('cde-0123456789@gzcorng.eqo');
//=> abc-0123456789@example.com

const Vigenere = require('caesar-salad').Vigenere;

var y = Vigenere.Cipher('password').crypt('abc-0123456789@example.com');
console.log(y);
//=> pbu-0123456789@wtodsae.ugi

Vigenere.Decipher('password').crypt('pbu-0123456789@wtodsae.ugi');
//=> abc-0123456789@example.com

const caesarSalad = require('caesar-salad');
const ROT13 = caesarSalad.ROT13;
const ROT5 = caesarSalad.ROT5;
const ROT18 = caesarSalad.ROT18;
const ROT47 = caesarSalad.ROT47;

ROT13.Cipher().crypt('abc-0123456789@example.com');    //=> nop-0123456789@rknzcyr.pbz
ROT5.Cipher().crypt('abc-0123456789@example.com');    //=> abc-5678901234@example.com
ROT18.Cipher().crypt('abc-0123456789@example.com');    //=> nop-5678901234@rknzcyr.pbz
var z = ROT47.Cipher().crypt('abc-0123456789@example.com');    //=> 234\\_`abcdefgho6I2>A=6]4@>
console.log(z);

ROT13.Decipher().crypt('nop-0123456789@rknzcyr.pbz');  //=> abc-0123456789@example.com
ROT5.Decipher().crypt('abc-5678901234@example.com');  //=> abc-0123456789@example.com
ROT18.Decipher().crypt('nop-5678901234@rknzcyr.pbz');  //=> abc-0123456789@example.com
ROT47.Decipher().crypt('234\\_`abcdefgho6I2>A=6]4@>'); //=> abc-0123456789@example.com
