const path = require('path');

/*
The path.parse() method returns an object whose properties represent
significant elements of the path.

    path <string>
    Returns: <Object>


*/
console.log(path.parse('C:\\path\\dir\\file.txt'));
/*
 Returns:
 { root: 'C:\\',
   dir: 'C:\\path\\dir',
   base: 'file.txt',
   ext: '.txt',
   name: 'file' }

A TypeError is thrown if path is not a string.
*/
