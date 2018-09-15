'use strict';

const SubstitutionCipher = require('./substitution-cipher');

class ROT5 extends SubstitutionCipher {
	/**
	 * The _ROT5 Cipher_ is a monoalphabetic substitution cipher rotating `0..9` characters.
	 *
	 * Examples using static factory methods:
	 *
	 *     ROT5.Cipher().crypt('0123456789');   // returns: '5678901234'
	 *     ROT5.Decipher().crypt('5678901234'); // returns: '0123456789'
	 *
	 * Examples using constructors:
	 *
	 *     new ROT5().crypt('0123456789');       // returns: '5678901234'
	 *     new ROT5().crypt('5678901234');       // returns: '0123456789'
	 *
	 * See <a class="external" href="https://en.wikipedia.org/wiki/ROT13#Variants">Wikipedia</a> for details.
	 *
	 * @class ROT5
	 * @extends SubstitutionCipher
	 * @constructor
	 */

	/**
	 * Substitutes only charCodes of `0..9` characters.
	 *
	 * @protected
	 * @method _substituteCharCode
	 * @param charCode {Number} the charCode to substitute.
	 * @return {Number} The substituted charCode.
	 */
	_substituteCharCode(charCode) {
		//  '0'   =^=   48;   '4'   =^=   52;
		if (charCode >= 48 && charCode <= 52) {
			return charCode + 5;
		}

		//  '5'   =^=   53;   '9'   =^=   57;
		if (charCode >= 53 && charCode <= 57) {
			return charCode - 5;
		}

		return charCode;
	}
}

/**
 * Static factory method to create cipher instances.
 *
 * @method Cipher
 * @static
 * @return {ROT5} The Cipher.
 */
ROT5.Cipher = function () {
	return new ROT5();
};

/**
 * Static factory method to create decipher instances.
 *
 * @method Decipher
 * @static
 * @return {ROT5} The Decipher.
 */
ROT5.Decipher = ROT5.Cipher;

module.exports = ROT5;
