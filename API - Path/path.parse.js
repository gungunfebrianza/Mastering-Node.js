const path = require('path');

/*
The path.normalize() method normalizes the given path, resolving '..' and
'.' segments.

    path <string>
    Returns: <string>

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
