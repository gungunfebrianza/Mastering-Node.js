'use strict';
const SubstitutionCipher = require('./substitution-cipher');

class ROT13 extends SubstitutionCipher {
	/**
	 * The _ROT13 Cipher_ is a monoalphabetic substitution cipher rotating `A..Z` and `a..z` characters.
	 *
	 * Examples using static factory methods:
	 *
	 *     ROT13.Cipher().crypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ');   // returns: 'NOPQRSTUVWXYZABCDEFGHIJKLM'
	 *     ROT13.Decipher().crypt('NOPQRSTUVWXYZABCDEFGHIJKLM'); // returns: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	 *
	 * Examples using constructors:
	 *
	 *     new ROT13().crypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ');       // returns: 'NOPQRSTUVWXYZABCDEFGHIJKLM'
	 *     new ROT13().crypt('NOPQRSTUVWXYZABCDEFGHIJKLM');       // returns: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	 *
	 * See <a class="external" href="https://en.wikipedia.org/wiki/ROT13">Wikipedia</a> for details.
	 *
	 * @class ROT13
	 * @extends SubstitutionCipher
	 * @constructor
	 */

	/**
	 * Substitutes only charCodes of `A..Z` and `a..z` characters.
	 *
	 * @protected
	 * @method _substituteCharCode
	 * @param charCode {Number} the charCode to substitute.
	 * @return {Number} The substituted charCode.
	 */
	_substituteCharCode(charCode) {
		//   'A'   =^=   65;   'M'   =^=   77;     'a'   =^=   97;   'm'   =^=   109;
		if ((charCode >= 65 && charCode <= 77) || (charCode >= 97 && charCode <= 109)) {
			return charCode + 13;
		}

		//   'N'   =^=   78;   'Z'   =^=   90;     'n'   =^=   110;   'z'   =^=   122;
		if ((charCode >= 78 && charCode <= 90) || (charCode >= 110 && charCode <= 122)) {
			return charCode - 13;
		}

		return charCode;
	}
}

/**
 * Static factory method to create cipher instances.
 *
 * @method Cipher
 * @static
 * @return {ROT13} The Cipher.
 */
ROT13.Cipher = function () {
	return new ROT13();
};

/**
 * Static factory method to create decipher instances.
 *
 * @method Decipher
 * @static
 * @return {ROT13} The Decipher.
 */
ROT13.Decipher = ROT13.Cipher;

module.exports = ROT13;
