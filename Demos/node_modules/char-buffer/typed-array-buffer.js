'use strict';
var AbstractCharBuffer = require('./abstract-char-buffer');

/**
	* @class CharBuffer.TypedArrayBuffer
	* @extends CharBuffer.AbstractCharBuffer
	*
	* {@link CharBuffer.AbstractCharBuffer} implementation using a [Typed Array][1]
	* (more precisely an [Uint16Array][2]).
	*
	* [1]: https://www.khronos.org/registry/typedarray/specs/latest/
	* [2]: https://developer.mozilla.org/en-US/docs/Web/API/Uint16Array
	*/

/**
	* @method constructor
	*
	* Constructs a NodeBuffer representing an empty {@link String}.
	* @param {Number} initCapacity The initial capacity (i.e. the expected
	*     {@link String#length length} of the {@link String} represented by this
	*     buffer).
	*/
function TypedArrayBuffer(initCapacity) {
	if (!(this instanceof TypedArrayBuffer)) {
		return new TypedArrayBuffer(initCapacity);
	}
	AbstractCharBuffer.call(this);
	initCapacity = initCapacity || 16;
	this._buffer = new Uint16Array(initCapacity);
}

TypedArrayBuffer.prototype = new AbstractCharBuffer();

TypedArrayBuffer.prototype.constructor = TypedArrayBuffer;

/* istanbul ignore if: IE-fix */
if (!TypedArrayBuffer.name) {
	TypedArrayBuffer.name = 'TypedArrayBuffer';
}

/**
	* @method
	* @protected
	*
	* Ensures a minimum capacity.
	* @param {Number} minCapacity The minimum capacity (i.e. the expected
	*     {@link String#length length} of the {@link String} this buffer may
	*     represent).
	*/
TypedArrayBuffer.prototype._ensureCapacity = function (minCapacity) {
	if (this._buffer.length < minCapacity) {
		if (minCapacity < this._buffer.length * 2) {
			minCapacity = this._buffer.length * 2; // i.e. double the capacity (!)
		}
		var buffer = new Uint16Array(minCapacity);
		buffer.set(this._buffer);
		this._buffer = buffer;
	}
};

/**
	* @method
	* Appends a charCode to the buffer using [...].
	*
	* @param {Number} charCode The charCode to append.
	* @param {Number} offset The zero based offset to write at.
	*/
TypedArrayBuffer.prototype.write = function (charCode, offset) {
	if (offset === undefined) {
		offset = this.length;
	}
	this._ensureCapacity(offset + 1);
	this._buffer[offset] = charCode;
	this.length = offset + 1 > this.length ? offset + 1 : this.length;
	return this;
};

/** @method */
TypedArrayBuffer.prototype.append = TypedArrayBuffer.prototype.write;

/** @method */
TypedArrayBuffer.prototype.read = function (offset) {
	return this._buffer[offset];
};

/** @method */
TypedArrayBuffer.prototype.charCodeAt = TypedArrayBuffer.prototype.read;

/** @method */
TypedArrayBuffer.prototype.charAt = function (offset) {
	return String.fromCharCode(this.read(offset));
};

// jshint -W101
/**
	* @method
	* Returns the {@link String} represented by this buffer using
	* {@link String#fromCharCode}.
	*
	* For details see:
	*
	* - [How to convert ArrayBuffer to and from String][1]
	* - [WebKit Bug 80797 - Argument length limited to 65536 ][2]
	*
	* [1]: http://updates.html5rocks.com/2012/06/How-to-convert-ArrayBuffer-to-and-from-String
	* [2]: https://bugs.webkit.org/show_bug.cgi?id=80797
	*
	* @return {String} The string.
	*/
TypedArrayBuffer.prototype.toString = function () {
// jshint +W101
	var ARGS_MAX = 65535;
	var len = this.length;
	var buf = '';
	var startPos = 0;
	var endPos = 0;

	if (len <= ARGS_MAX) {
		return String.fromCharCode.apply(
			null,
			this._buffer.subarray(startPos, len)
		);
	}

	do {
		startPos = endPos;
		endPos += ARGS_MAX;
		if (endPos > len) {
			endPos = len;
		}
		buf += String.fromCharCode.apply(
			null,
			this._buffer.subarray(startPos, endPos)
		);
	} while (endPos < len);

	return buf;
};

/** @static @property */
Object.defineProperty(TypedArrayBuffer, 'isSupported', {
	get: function () {
		try {
			return String.fromCharCode.apply(null, new Uint16Array()) === '';
		} catch (err) {
			/* istanbul ignore next */
			return false;
		}
	}
});

/** @static @method */
TypedArrayBuffer.fromString = AbstractCharBuffer.fromStringConstr(TypedArrayBuffer);

module.exports = TypedArrayBuffer;
