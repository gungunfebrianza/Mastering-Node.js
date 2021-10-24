/* Definition and Usage

The concat() method is used to join two or more strings.

This method does not change the existing strings, but returns a new string containing the text of the joined strings. */

var str1 = "Hello ";
var str2 = "world!";
var res = str1.concat(str2);
console.log(res);

//alternative
console.log(str1 + str2);
