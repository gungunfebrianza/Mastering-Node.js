const path = require('path');

//The path.basename() methods returns the last portion of a path,
//similar to the Unix basename command.
console.log(path.basename('/foo/bar/baz/asdf/quux.html'));
// Returns: 'quux.html'

console.log(path.basename('/foo/bar/baz/asdf/quux.html', '.html'));
// Returns: 'quux'

//A TypeError is thrown if path is not a string or if ext is given and is not a string.
