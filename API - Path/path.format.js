const path = require('path');

/*
The path.format() method returns a path string from an object. This is the opposite of path.parse().

    pathObject <Object>
        dir <string>
        root <string>
        base <string>
        name <string>
        ext <string>
    Returns: <string>

*/
console.log(path.format({
  dir: 'C:\\path\\dir',
  base: 'file.txt'
}));
