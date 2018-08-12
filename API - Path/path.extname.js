const path = require('path');

/*
The path.extname() method returns the extension of the path, from the last
occurrence of the . (period) character to end of string in the last portion of
the path. If there is no . in the last portion of the path, or if the first
character of the basename of path (see path.basename()) is .,
then an empty string is returned.

    path <string>
    Returns: <string>

*/
console.log(path.extname('index.html'));
// Returns: '.html'

console.log(path.extname('index.coffee.md'));
// Returns: '.md'

console.log(path.extname('index.'));
// Returns: '.'

console.log(path.extname('index'));
// Returns: ''

console.log(path.extname('.index'));
// Returns: ''

/**/
