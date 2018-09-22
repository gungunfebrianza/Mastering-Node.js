/* Definition and Usage

The substr() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.

Tip: To extract characters from the end of the string, use a negative start number (This does not work in IE 8 and earlier).

Note: The substr() method does not change the original string. */

// Extract parts of a string:
var str = "Hello world!";
var res = str.substr(1, 4);
console.log(res);

// Begin the extraction at position 2, and extract the rest of the string:
var str = "Hello world!";
var res = str.substr(2);
console.log(res);


