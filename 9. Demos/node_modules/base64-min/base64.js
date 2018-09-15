'use strict';

const fs = require('fs');
const codecUtils = require('./utils/codec-utils');
const convert = require('./utils/convertion-utils');

function setCharAt(str, index, chr) {
  return (index > str.length - 1) ? str : `${str.substr(0, index)}${chr}${str.substr(index + 1)}`;
}

function encodingSystem(slice) {
  const sliceLength = slice.length;
  let encoded = '';

  // if this slice/block have 3 bytes
  if (sliceLength === 3) {
    encoded = codecUtils.encodingBlock(slice);
  } else if (sliceLength === 2) {
    slice += '\u0000';
    encoded = codecUtils.encodingBlock(slice);
  // add =
    encoded = setCharAt(encoded, 3, '=');
  } else {
    slice += '\u0000\u0000';
    encoded = codecUtils.encodingBlock(slice);
  // add '=''='
    encoded = setCharAt(encoded, 2, '=');
    encoded = setCharAt(encoded, 3, '=');

  }
  return encoded;
}

module.exports = {
  encode: function (str, type) {

    // First step, divid the input bytes streams into blocks of 3 bytes.
    const inputSliced = convert.stringToNCharArray(str, 3);

    // encode all 3 byte blocks
    const encodedText = inputSliced.map(char => encodingSystem(char)).join('');

    // encoding type
    return (type === 'MIME') ? codecUtils.convertToMIME(encodedText) : encodedText;
  },

  encodeWithKey: function (str, key) {
    return this.encode(codecUtils.xorEncoding(str, key));
  },

  encodeFile: function (file) {
    const inputData = fs.readFileSync(file, 'binary');
    return this.encode(inputData);
  },

  decode: function (str) {
    // auto detect MIME type
    const inputStr = (codecUtils.isMIME(str)) ? codecUtils.decodeMIME(str) : str;

    // reverse process
    let decodedString = '';

    // slice string into 4 byte slices
    const inputSliced = convert.stringToNCharArray(inputStr, 4);

    // decoding every slice except the last one
    for (let i = 0, sliceLength = inputSliced.length; i < sliceLength; ++i) {
      decodedString += codecUtils.decodingBlock(inputSliced[i]);
    }
    // last slice
    if (inputStr.slice(-1) === '=') {
      decodedString = decodedString.slice(0, decodedString.length - 1);
    }
    if (inputStr.slice(-2) === '==') {
      decodedString = decodedString.slice(0, decodedString.length - 1);
    }
    // result
    return decodedString;
  },

  decodeWithKey: function (str, key) {
    return codecUtils.xorEncoding(this.decode(str), key);
  },

  decodeToFile: function (str, filePath) {
    const data = this.decode(str);
    fs.writeFileSync(filePath, data, 'binary');
  },
};
