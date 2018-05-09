'use strict';
var AbstractCharBuffer = require('./abstract-char-buffer');

/**
	* @class CharBuffer.StringBuffer
	* @extends CharBuffer.AbstractCharBuffer
	*
	* {@link CharBuffer.AbstractCharBuffer} implementation using a single {@link String}.
	*/

/**
	* @method constructor
	*
	* Constructs a StringBuffer representing an empty string.
	*/
function StringBuffer() {
	if (!(this instanceof StringBuffer)) {
		return new StringBuffer();
	}
	AbstractCharBuffer.call(this);
	this._buffer = '';
}

StringBuffer.prototype = new AbstractCharBuffer();

StringBuffer.prototype.constructor = StringBuffer;

/* istanbul ignore if: IE-fix */
if (!StringBuffer.name) {
	StringBuffer.name = 'StringBuffer';
}

/**
	* @method
	* Write a charCode to the buffer using
	* {@link String#fromCharCode} and {@link String#concat +}.
	*
	* @param {Number} charCode The charCode to append.
	* @param {Number} offset The zero based offset to write at.
	*/
StringBuffer.prototype.write = function (charCode, offset) {
	if (typeof offset === 'undefined' || offset === this.length) {
		return this.append(charCode);
	}
	var pre = this._buffer.slice(0, offset);
	var post = this._buffer.slice(offset + 1);
	this._buffer = pre + String.fromCharCode(charCode) + post;
	this.length = this._buffer.length;
	return this;
};

/** @method */
StringBuffer.prototype.append = function (charCode) {
	this._buffer += String.fromCharCode(charCode);
	this.length = this._buffer.length;
	return this;
};

/** @method */
StringBuffer.prototype.charCodeAt = function (offset) {
	return this._buffer.charCodeAt(offset);
};

/** @method */
StringBuffer.prototype.charAt = function (offset) {
	return this._buffer.charAt(offset);
};

/** @method */
StringBuffer.prototype.read = StringBuffer.prototype.charCodeAt;

/** @method */
StringBuffer.prototype.setLength = function (newLength) {
	AbstractCharBuffer.prototype.setLength.call(this, newLength);
	this._buffer = this._buffer.slice(0, this.length);
	return this;
};

/**
	* @method
	* Returns the internal {@link String}.
	* @return {String} The string.
	*/
StringBuffer.prototype.toString = function () {
	return this._buffer;
};

/** @static @property */
StringBuffer.isSupported = true;

/** @static @method */
StringBuffer.fromString = function (string, transform) {
	var output = new StringBuffer();
	var len = string.length;
	var buffer;
	var i;

	if (transform) {
		buffer = '';
		for (i = 0; i < len; i++) {
			buffer += String.fromCharCode(transform.call(transform, string.charCodeAt(i), i));
		}
	} else {
		// JavaScript strings are immutable
		buffer = string;
	}

	output._buffer = buffer;
	output.length = len;
	return output;
};

module.exports = StringBuffer;
