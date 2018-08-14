const fs = require('fs');

/*Definition
Reads the contents of a directory.
The callback gets two arguments (err, files) where files is
an array of the names of the files in the directory excluding '.' and '..'.
*/
fs.readdir('./', 'UTF-8', (err, content) => {
  if (err)
    return err;
  console.log(content);
})
