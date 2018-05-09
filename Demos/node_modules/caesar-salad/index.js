const SubstitutionCipher = require('./substitution-cipher');
const Caesar = require('./caesar');
const ROT5 = require('./rot5');
const ROT13 = require('./rot13');
const ROT18 = require('./rot18');
const ROT47 = require('./rot47');
const Vigenere = require('./vigenere');

/**
 * @module caesar-salad
 * @main caesar-salad
 */

/**
 * Caesar-Salad Facade:
 *
 *     CaesarSalad.Caesar.Cipher('c').crypt('ABCD');   // returns: 'CDEF'
 *     CaesarSalad.Caesar.Decipher('c').crypt('CDEF'); // returns: 'ABCD'
 *
 * @class CaesarSalad
 */
var CaesarSalad = {};

/**
 * Names of supported ciphers (and deciphers).
 *
 * @property ciphers
 * @type {Array}
 * @default [ 'Caesar', 'ROT5', 'ROT13', 'ROT18', 'ROT47', 'Vigenere' ]
 */
CaesarSalad.ciphers = [
	Caesar.name,
	ROT5.name,
	ROT13.name,
	ROT18.name,
	ROT47.name,
	Vigenere.name
];

/**
 * @property SubstitutionCipher
 * @type SubstitutionCipher
 */
CaesarSalad.SubstitutionCipher = SubstitutionCipher;

/**
 * @property Caesar
 * @type Caesar
 */
CaesarSalad.Caesar = Caesar;

/**
 * @property ROT5
 * @type ROT5
 */
CaesarSalad.ROT5 = ROT5;

/**
 * @property ROT13
 * @type ROT13
 */
CaesarSalad.ROT13 = ROT13;

/**
 * @property ROT18
 * @type ROT18
 */
CaesarSalad.ROT18 = ROT18;

/**
 * @property ROT47
 * @type ROT47
 */
CaesarSalad.ROT47 = ROT47;

/**
 * @property Vigenere
 * @type Vigenere
 */
CaesarSalad.Vigenere = Vigenere;

module.exports = CaesarSalad;
