'use strict';
const Password = require('./password');
const SubstitutionCipher = require('./substitution-cipher');

class Caesar extends SubstitutionCipher {
	/**
	 * The _Caesar Cipher_ is a monoalphabetic substitution cipher, rotating `A..Z` and `a..z` characters.
	 *
	 * Examples using static factory methods:
	 *
	 *     Caesar.Cipher('c').crypt('ABCD');   // returns: 'CDEF'
	 *     Caesar.Decipher('c').crypt('CDEF'); // returns: 'ABCD'
	 *
	 * Examples using constructors:
	 *
	 *     new Caesar( 2).crypt('ABCD');       // returns: 'CDEF'
	 *     new Caesar(-2).crypt('CDEF');       // returns: 'ABCD'
	 *     new Caesar(24).crypt('CDEF');       // returns: 'ABCD'
	 *
	 * See <a class="external" href="https://en.wikipedia.org/wiki/Caesar_cipher">Wikipedia</a> for details.
	 *
	 * @class Caesar
	 * @extends SubstitutionCipher
	 * @constructor
	 * @param shift {Number} The number to rotate the charCodes `mod 26` and therefore the password of the caesar cipher.
	 */
	constructor(shift) {
		super();

		this._shift = ((shift % 26) + 26) % 26;
	}

	/**
	 * Return the rotated charCode.
	 *
	 * @protected
	 * @method _rotate
	 * @param charCode {Number} the charCode to rotate
	 * @return {Number} `(charCode + shift) % 26`
	 */
	_rotate(charCode) {
		return (charCode + this._shift) % 26;
	}

	/**
	 * Substitutes only charCodes of `A..Z` and `a..z` characters.
	 *
	 * @protected
	 * @method _substituteCharCode
	 * @param charCode {Number} the charCode to substitute.
	 * @return {Number} The substituted charCode.
	 */
	_substituteCharCode(charCode) {
		//  'A'   =^=   65;   'Z'   =^=   90
		if (charCode >= 65 && charCode <= 90) {
			return this._rotate(charCode - 65) + 65;
		}

		//  'a'   =^=   97;   'z'   =^=   122
		if (charCode >= 97 && charCode <= 122) {
			return this._rotate(charCode - 97) + 97;
		}

		return charCode;
	}
}

/**
 * Static factory method to create cipher instances.
 *
 * @method Cipher
 * @static
 * @param password {Number|String} The password to use, see {{#crossLink "Password"}}{{/crossLink}} for valid formats.
 * @return {Caesar} The Cipher.
 */
Caesar.Cipher = function (password) {
	return new Caesar(new Password(password).to.shift());
};

/**
 * Static factory method to create decipher instances.
 *
 * @method Decipher
 * @static
 * @param password {Number|String} The password to use, see {{#crossLink "Password"}}{{/crossLink}} for valid formats.
 * @return {Caesar} The Decipher.
 */
Caesar.Decipher = function (password) {
	return new Caesar(new Password(password).forDecryption.to.shift());
};

module.exports = Caesar;
