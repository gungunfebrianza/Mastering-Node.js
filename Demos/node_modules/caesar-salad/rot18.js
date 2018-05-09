'use strict';

const SubstitutionCipher = require('./substitution-cipher');
const ROT5 = require('./rot5');
const ROT13 = require('./rot13');

class ROT18 extends SubstitutionCipher {
	/**
	 * The _ROT18 Cipher_ is a monoalphabetic substitution cipher combining {{#crossLink "ROT13"}}{{/crossLink}} and {{#crossLink "ROT5"}}{{/crossLink}}.
	 *
	 * Examples using static factory methods:
	 *
	 *     ROT18.Cipher().crypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');   // returns: 'NOPQRSTUVWXYZABCDEFGHIJKLM5678901234'
	 *     ROT18.Decipher().crypt('NOPQRSTUVWXYZABCDEFGHIJKLM5678901234'); // returns: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
	 *
	 * Examples using constructors:
	 *
	 *     new ROT18().crypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');       // returns: 'NOPQRSTUVWXYZABCDEFGHIJKLM5678901234'
	 *     new ROT18().crypt('NOPQRSTUVWXYZABCDEFGHIJKLM5678901234');       // returns: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
	 *
	 * See <a class="external" href="https://en.wikipedia.org/wiki/ROT13#Variants">Wikipedia</a> for details.
	 *
	 * @class ROT18
	 * @extends SubstitutionCipher
	 * @constructor
	 */

	/**
	 * Substitutes only charCodes of `A..Z`, `a..z` and '0..9' characters.
	 *
	 * @protected
	 * @method _substituteCharCode
	 * @param charCode {Number} the charCode to substitute.
	 * @return {Number} The substituted charCode.
	 */
	_substituteCharCode(charCode) {
		charCode = ROT5.prototype._substituteCharCode(charCode);
		charCode = ROT13.prototype._substituteCharCode(charCode);

		return charCode;
	}
}

/**
 * Static factory method to create cipher instances.
 *
 * @method Cipher
 * @static
 * @return {ROT18} The Cipher.
 */
ROT18.Cipher = function () {
	return new ROT18();
};

/**
 * Static factory method to create decipher instances.
 *
 * @method Decipher
 * @static
 * @return {ROT18} The Decipher.
 */
ROT18.Decipher = ROT18.Cipher;

module.exports = ROT18;
