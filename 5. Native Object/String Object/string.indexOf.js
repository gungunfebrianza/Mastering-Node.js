/* Definition and Usage
The indexOf() method returns the position of the first occurrence of a specified value in a string.
This method returns -1 if the value to search for never occurs.
Note: The indexOf() method is case sensitive. */

/* Syntax
string.indexOf(searchvalue, start); */

/* Parameter Values
Parameter 	Description
searchvalue 	Required. The string to search for
start 	Optional. Default 0. At which position to start the search */

/* Technical Details
Return Value: 	
A Number, representing the position where the specified searchvalue occurs for the first time, or -1 if it never occurs */

var str = 'Hello world, welcome to the universe.';
var n = str.indexOf('welcome');
console.log(n);

/* Another Example 
Find the first occurrence of the letter "e" in a string, starting the search at position 5:

var str = "Hello world, welcome to the universe.";
var n = str.indexOf("e", 5); */
