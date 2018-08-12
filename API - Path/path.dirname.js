const path = require('path');

/*The path.dirname() method returns the directory name of a path,
similar to the Unix dirname command.

    path <string>
    Returns: <string>
*/
console.log(path.dirname('/foo/bar/baz/asdf/quux'));
/*Output:
/foo/bar/baz/asdf
A TypeError is thrown if path is not a string.*/
