'use strict';
/**
	* @class CharBuffer.AbstractCharBuffer
	* @abstract
	*
	* Base class for all CharBuffers.
	*/

/**
	* @method constructor
	*
	* @param {Number} initCapacity The initial capacity (i.e. the expected
	*     {@link String#length length} of the {@link String} represented by this
	*     buffer).
	*/
function AbstractCharBuffer(initCapacity) {
	/* istanbul ignore if */
	if (!(this instanceof AbstractCharBuffer)) {
		return new AbstractCharBuffer(initCapacity);
	}
}

/* istanbul ignore if: IE-fix */
if (!AbstractCharBuffer.name) {
	AbstractCharBuffer.name = 'AbstractCharBuffer';
}

/**
	* @chainable
	* @abstract
	*
	* Appends a charCode to the buffer. The length of the buffer increases by 1.
	*
	* @param {Number} charCode The charCode to append.
	*/
AbstractCharBuffer.prototype.append = undefined;

/**
	* @abstract
	* @method
	* @chainable
	*
	* Writes a charCode to the buffer at an offset.
	*
	* @param {Number} charCode The charCode to write.
	* @param {Number} offset The zero based offset to write at.
	* @throws {Error} if offset < 0 or offset > this.length
	*/
AbstractCharBuffer.prototype.write = undefined;

/**
	* @abstract
	* @method
	*
	* Reads the charCode at an offset.
	*
	* @param {Number} offset The zero based offset.
	* @return {Number} The charCode.
	* @throws {Error} if offset < 0 or offset >= this.length
	*/
AbstractCharBuffer.prototype.read = undefined;

/**
	* @abstract
	* @method
	*
	* Reads the charCode at an offset.
	*
	* @param {Number} offset The zero based offset.
	* @return {Number} The charCode.
	* @throws {Error} if offset < 0 or offset >= this.length
	*/
AbstractCharBuffer.prototype.charCodeAt = undefined;

/**
	* @abstract
	* @method
	*
	* Reads the char at an offset.
	*
	* @param {Number} offset The zero based offset.
	* @return {String} The char.
	* @throws {Error} if offset < 0 or offset >= this.length
	*/
AbstractCharBuffer.prototype.charAt = undefined;

/**
	* @property {Number} length Length of the {@link String} represented by this buffer.
	* @readonly
	*/
AbstractCharBuffer.prototype.length = 0;

/**
	* @abstract
	* @method
	*
	* Gets the length of the {@link String} represented by this buffer.
	* @return {Number} The length of the {@link String}.
	*/
AbstractCharBuffer.prototype.getLength = function () {
	return this.length;
};

/**
	* @method
	* @chainable
	*
	* Sets the length of the {@link String} represented by this buffer.
	* @param {Number} newLength The new length.
	* @throws {RangeError} if `newLength < 0 || newLength > this.length`
	*/
AbstractCharBuffer.prototype.setLength = function (newLength) {
	var msg;
	if (newLength < 0 || newLength > this.length) {
		msg = 'newLength must be between 0 and ' + (this.length);
		msg += ', ' + newLength + ' given.';
		throw new RangeError(msg);
	}
	this.length = newLength;
	return this;
};

/**
	* @method
	*
	* Executes a function once per charCode.
	* See also {@link Array#forEach}
	*
	* @param {Function} callback            Function to execute for each charCode.
	* @param {Number}   callback.charCode   The charCode.
	* @param {Number}   callback.index      The index of the charCode.
	* @param {Object}   callback.charbuffer The CharBuffer being traversed.
	* @param {Object}   [thisArg=undefined] Value to use as this when executing callback.
	*/
AbstractCharBuffer.prototype.forEach = function (callback, thisArg) {
	var i;
	var len = this.length;

	if (typeof callback !== 'function') {
		throw new TypeError(callback + ' is not a function');
	}

	for (i = 0; i < len; i++) {
		callback.call(thisArg, this.charCodeAt(i), i, this);
	}
};

/**
	* @method
	*
	* Creates a new CharBuffer with the results of calling a provided function on every charCode.
	* See also {@link Array#map}
	*
	* @param {Function} callback            Function to execute for each charCode.
	* @param {Number}   callback.charCode   The charCode.
	* @param {Number}   callback.index      The index of the charCode.
	* @param {Object}   callback.charbuffer The CharBuffer being traversed.
	* @param {Number}   callback.return     The new charCode to write into the new CharBuffer.
	* @param {Object}   [thisArg=undefined] Value to use as this when executing callback.
	* @return {CharBuffer.AbstractCharBuffer} CharBuffer of the return values of callback function.
	*/
AbstractCharBuffer.prototype.map = function (callback, thisArg) {
	var i;
	var len = this.length;
	var output = new this.constructor(len);

	if (typeof callback !== 'function') {
		throw new TypeError(callback + ' is not a function');
	}

	for (i = 0; i < len; i++) {
		output.append(callback.call(thisArg, this.charCodeAt(i), i, this));
	}
	return output;
};

/**
	* @abstract
	* @method
	*
	* Returns the {@link String} represented by this buffer.
	* @return {String} The string.
	*/
AbstractCharBuffer.prototype.toString = undefined;

/**
	* @static
	* @property {Boolean} [isSupported=true]
	* @template
	* @inheritable
	* Indicates whether this CharBuffer is supported by the current platform.
	*/
AbstractCharBuffer.isSupported = false;

/**
	* @static
	* @method
	* @inheritable
	*
	* Creates a new CharBuffer from a {@link String}.
	*
	* @param {String} string The string.
	* @param {Function} [transform=identity]  Function that produces a charCode of the new CharBuffer
	*                                         from a charCode of the string parameter.
	* @param {Number} transform.charCode The charCode of the string.
	* @param {Number} transform.index The index of the charCode within the string.
	* @param {Object} transform.string The string being transformed.
	* @param {Number} transform.return The charCode to write into the new CharBuffer.
	* @param {Object} [thisArg=undefined] Value to use as this when executing transform.
	* @return {CharBuffer.AbstractCharBuffer} CharBuffer of the string, transformed by transform.
	*
	*     @example
	*     var charBuffer;
	*
	*     charBuffer = CharBuffer.fromString('abc');
	*     console.log(charBuffer.toString()); // output: abc
	*
	*     charBuffer = CharBuffer.fromString('abc', function (charCode, index){
	*       return charCode + 3;
	*     });
	*     console.log(charBuffer.toString()); // output: def
	*
	*/
AbstractCharBuffer.fromString = null;

/**
	* @static
	* @method
	* @protected
	*
	* Creates a fromString implementation.
	*
	* @param {Function} Constr A CharBuffer constructor.
	* @return {Function} A default fromString implementation for Constr.
	*/
AbstractCharBuffer.fromStringConstr = function (Constr) {
	return function (string, transform, thisArg) {
		var len = string.length;
		var output = new Constr(len);
		var i;
		// manual loop optimization :-)
		if (transform) {
			for (i = 0; i < len; i++) {
				output.append(transform.call(thisArg, string.charCodeAt(i), i, string));
			}
		} else {
			for (i = 0; i < len; i++) {
				output.append(string.charCodeAt(i));
			}
		}
		return output;
	};
};

module.exports = AbstractCharBuffer;
