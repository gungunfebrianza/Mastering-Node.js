const path = require('path');

/*this is global object from Node.js API
The file name of the current module. This is the resolved absolute path of
the current module file.*/
console.log(__filename);
/*Output :
C:\xampp\htdocs\front-end\Mastering-Node.js\1. Basic\2.filename.js
*/


/*To achieve consistent results when working with Windows file paths on any
operating system, use path.win32 */
console.log(path.win32.basename(__filename));
/*Output :
2.filename.js
*/
