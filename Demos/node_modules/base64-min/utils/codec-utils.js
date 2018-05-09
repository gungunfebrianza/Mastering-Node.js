'use strict'; // this is necessary for node older versions in order use let and const

const encodeDictionary = require('./constants').encodeDictionary;

 /**
  * decodingBlock - private function
  * This method receive 4-byte encoded slice and decode to 3 char string.
  * Update: Changed binary masks into Hexadecimal
  */
function decodingBlock(slice) {
  return slice.split('')
    .map((char, index) => {
      let decodedChar = null;

      if (index === 0) {
        decodedChar = encodeDictionary.indexOf(char) << 2;
        decodedChar += (encodeDictionary.indexOf(slice[index + 1]) & 0x30) >> 4;
        return String.fromCharCode(decodedChar);
      } else if (index === 1) {
        decodedChar = (encodeDictionary.indexOf(char) & 0xF) << 4;
        decodedChar += (encodeDictionary.indexOf(slice[index + 1]) & 0x3C) >> 2;
        return String.fromCharCode(decodedChar);
      } else if (index === 2) { // index === 2
        decodedChar = (encodeDictionary.indexOf(char) & 0x3) << 6;
        decodedChar += (encodeDictionary.indexOf(slice[index + 1]) & 0x3F);
        return String.fromCharCode(decodedChar);
      }
    })
    .join('');
}


function encodingBlock(slice) {
  let encodedSlice = '';
  let charOne;
  let charTwo;
  let charThree;
  let charFour;

  slice.split('')
    .map((char, index) => {
      switch (index) {
        case 0:
          charOne = slice.charCodeAt(index) >> 2;
          encodedSlice += encodeDictionary[charOne];
          break;
        case 1:
          charTwo = (slice.charCodeAt(index - 1) & 0x3) << 4;
          charTwo += (slice.charCodeAt(index) & 0xF0) >> 4;
          encodedSlice += encodeDictionary[charTwo];
          charThree = (slice.charCodeAt(index) & 0xF) << 2;
          charThree += (slice.charCodeAt(index + 1) & 0xC0) >> 6;
          encodedSlice += encodeDictionary[charThree];
          break;
        case 2:
        default:
          charFour = slice.charCodeAt(index) & 0x3F;
          encodedSlice += encodeDictionary[charFour];
          break;
      }
    });

  return encodedSlice;
}

function decodeMIME(str) {
  return str.replace(/\r\n|\r|\n/g, '');
}

function convertToMIME(str) {
  let result = '';
  let lastPosition = 0;

  for (let i = 0, length = str.length; i < length; ++i) {
    if (i % 76 === 0 && i !== 0) {
      result += `${str.slice(lastPosition, i)}\n`;
      lastPosition = i;
      if (lastPosition + 76 > length) {
        result += str.slice(lastPosition, length);
      }
    }
  }
  return result;
}

function xorEncoding(str, key) {
  const keyLength = key.length;

  return str.split('')
    .map((char, index) => {
      return String.fromCharCode(str.charCodeAt(index) ^ key.charCodeAt(index % keyLength));
    })
    .join('');
}

function isMIME(str) {
  return /\n/.test(str);
}

module.exports = { decodingBlock, encodingBlock, decodeMIME, convertToMIME, xorEncoding, isMIME };
