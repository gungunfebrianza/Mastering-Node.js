'use strict';

function ShiftMixin() {
	this.shift = () => this.shiftArray()[0];
	this.shiftArray = () => {
		var passwd = this.getPassword();
		var forDecryption = this.symbols.indexOf('forDecryption') + 1;

		passwd = passwd.map(num => forDecryption ? (26 - num) % 26 : num % 26);

		if (passwd.length === 0) {
			return [0];
		}

		return passwd;
	};
}

function passwordToShiftArray(passwd) {
	var shiftArrayRegExp = /^[-+]?[0-9]+(,[-+]?[0-9]+)*$/;
	var shiftStringRegExp = /^[A-Za-z]*$/;

	if (typeof passwd === 'undefined' || passwd === null) {
		return [0];
	}

	if (Number.isInteger(passwd)) {
		return [passwd];
	}

	if (typeof passwd === 'string' && shiftArrayRegExp.test(passwd)) {
		return passwd.split(',').map(Number);
	}

	if (typeof passwd === 'string' && shiftStringRegExp.test(passwd)) {
		return passwd.toLowerCase().split('').map(c => c.charCodeAt(0) - 97);
	}

	if (passwd && passwd.every && passwd.every(Number.isInteger)) {
		return passwd.slice();
	}

	throw new RangeError('Unable to parse password: ' + passwd);
}

// start state: password
var dfa = {
	password: ['to', 'forDecryption'],
	to: [],
	forDecryption: ['to']
};

// start state: password
var mixins = {
	to: [ShiftMixin]
};

class Password {
	/**
	 * Handles password parsing for {{#crossLink "Caesar"}}{{/crossLink}} and {{#crossLink "Vigenere"}}{{/crossLink}}.
	 *
	 * `Password` is a <a class="external" href="https://en.wikipedia.org/wiki/Builder_pattern">Builder</a> with a <a class="external" href="https://en.wikipedia.org/wiki/Fluent_interface">Fluent Interface</a> providing the following methods:
	 *
	 * <span style="font-family:monospace">
	 *   ℒ<sub><span style="font-family:cursive">passwd</span></sub> := {<br/>
	 *   &nbsp;&nbsp;new Password(<span style="font-family:cursive">passwd</span>).to.shift(),<br/>
	 *   &nbsp;&nbsp;new Password(<span style="font-family:cursive">passwd</span>).to.shiftArray(),<br/>
	 *   &nbsp;&nbsp;new Password(<span style="font-family:cursive">passwd</span>).forDecryption.to.shift(),<br/>
	 *   &nbsp;&nbsp;new Password(<span style="font-family:cursive">passwd</span>).forDecryption.to.shiftArray()<br/>
	 *   }</span> (for all valid <span style="font-family:cursive">passwd</span>)
	 *
	 * Valid password formats:
	 *
	 *     new Password( 1  ).to.shift() // returns: 1
	 *     new Password('1' ).to.shift() // returns: 1
	 *     new Password('-1').to.shift() // returns: -1
	 *     new Password('b' ).to.shift() // returns: 1
	 *     new Password('bc').to.shift() // returns: 1
	 *
	 *     new Password( 1    ).to.shiftArray() // returns: [1]
	 *     new Password([1, 2]).to.shiftArray() // returns: [1, 2]
	 *     new Password('1, 2').to.shiftArray() // returns: [1, 2]
	 *     new Password('1,-2').to.shiftArray() // returns: [1, -2]
	 *     new Password('bc'  ).to.shiftArray() // returns: [1, 2]
	 *
	 * @class Password
	 * @constructor
	 * @param passwd {Number|String|[Number]} The password to parse.
	 */
	constructor(passwd, symbol, parent) {
		if (!symbol) {
			symbol = 'password';
		}

		var children = dfa[symbol];

		if (parent instanceof Password) {
			this.symbols = parent.symbols.slice();
			this.getPassword = parent.getPassword;
		} else {
			this.symbols = [];
			passwd = passwordToShiftArray(passwd);
			this.getPassword = () => passwd;
		}

		this.symbols.push(symbol);

		// mixins
		if (mixins[symbol]) {
			mixins[symbol].forEach(mixin => mixin.call(this));
		}

		// create children
		children.forEach(child => {
			this[child] = new Password(null, child, this);
		});
	}
}

module.exports = Password;
