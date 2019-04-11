/* Definition and Usage

The replace() method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.

Note: If you are replacing a value (and not a regular expression), only the first instance of the value will be replaced. To replace all occurrences of a specified value, use the global (g) modifier (see "More Examples" below). */

// Return a string where "Microsoft" is replaced with "W3Schools":
var str = "Visit Microsoft!";
var res = str.replace("Microsoft", "The Exelon");
console.log(res);

// Perform a global replacement:
var str = "Mr Blue has a blue house and a blue car";
var res = str.replace(/blue/g, "red");
console.log(res);

// Perform a global, case-insensitive replacement:
var str = "Mr Blue has a blue house and a blue car";
var res = str.replace(/blue/gi, "red");
console.log(res);
