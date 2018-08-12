const path = require('path');

/*
The path.normalize() method normalizes the given path, resolving '..' and
'.' segments.

    path <string>
    Returns: <string>

*/
console.log(path.win32.normalize('C:\\temp\\\\foo\\bar\\..\\'));
// Returns: 'C:\\temp\\foo\\');
