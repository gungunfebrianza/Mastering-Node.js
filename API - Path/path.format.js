const path = require('path');

/*


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
