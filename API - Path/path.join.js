const path = require('path');
/*
The path.join() method joins all given path segments together using the
platform specific separator as a delimiter, then normalizes the resulting path.
    ...paths <string> A sequence of path segments
    Returns: <string>
*/

/*
*/
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));
// Returns: '/foo/bar/baz/asdf'
//A TypeError is thrown if any of the path segments is not a string.
