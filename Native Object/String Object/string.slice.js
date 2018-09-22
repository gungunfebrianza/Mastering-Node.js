/* Definition and Usage

The slice() method extracts parts of a string and returns the extracted parts in a new string.

Use the start and end parameters to specify the part of the string you want to extract.

The first character has the position 0, the second has position 1, and so on.

Tip: Use a negative number to select from the end of the string. */

var str = "Hello world!";
var res = str.slice(1, 5);
console.log(res);
