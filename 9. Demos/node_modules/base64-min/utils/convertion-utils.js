'use strict'; // this is necessary for node older versions in order use let and const

function stringToNCharArray(str, number) {
  const charArray = [];
  for (let i = 0, size = str.length; i < size; i = i + number) {
    charArray.push(str.slice(i, i + number));
  }
  return charArray;
}

module.exports = { stringToNCharArray };
