'use strict';

const SubstitutionCipher = require('./substitution-cipher');

class ROT47 extends SubstitutionCipher {
	/**
	 * The _ROT47 Cipher_ is a monoalphabetic substitution cipher rotating `!..~` characters.
	 *
	 * Examples using static factory methods:
	 *
	 *     ROT47.Cipher().crypt('!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~');
	 *     // returns: 'PQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNO'
	 *
	 *     ROT47.Decipher().crypt('PQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNO');
	 *     // returns: '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~'
	 *
	 * Examples using constructors:
	 *
	 *     new ROT47().crypt('!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~');
	 *     // returns: 'PQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNO'
	 *
	 *     new ROT47().crypt('PQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNO');
	 *     // returns: '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~'
	 *
	 * See <a class="external" href="https://en.wikipedia.org/wiki/ROT13#Variants">Wikipedia</a> for details.
	 *
	 * @class ROT47
	 * @extends SubstitutionCipher
	 * @constructor
	 */

	/**
	 * Substitutes only charCodes of `!..~` characters.
	 *
	 * @protected
	 * @method _substituteCharCode
	 * @param charCode {Number} the charCode to substitute.
	 * @return {Number} The substituted charCode.
	 */
	_substituteCharCode(charCode) {
		//  '!'   =^=   33;   'O'   =^=   79;
		if (charCode >= 33 && charCode <= 79) {
			return charCode + 47;
		}

		//  'P'   =^=   80;   '~'   =^=   126;
		if (charCode >= 80 && charCode <= 126) {
			return charCode - 47;
		}

		return charCode;
	}
}

/**
 * Static factory method to create cipher instances.
 *
 * @method Cipher
 * @static
 * @return {ROT47} The Cipher.
 */
ROT47.Cipher = function () {
	return new ROT47();
};

/**
 * Static factory method to create decipher instances.
 *
 * @method Decipher
 * @static
 * @return {ROT47} The Decipher.
 */
ROT47.Decipher = ROT47.Cipher;

module.exports = ROT47;
