const fs = require('fs');

/*Syntax :
fs.open(path, flags[, mode], callback)
    path <string> | <Buffer> | <URL>
    flags <string> | <number> See support of file system flags.
    mode <integer> Default: 0o666 (readable and writable)

    callback <Function>
        err <Error>
        fd <integer>
*/

//Asynchronous file open.
fs.open('example.file', 'wx', (err, fd) => {
  if (err) {
    if (err.code === 'EEXIST') {
      console.error('example.file already exists');
      return;
    }
    throw err;
  }
  //writeMyData(fd);
});

fs.open('myfile', 'r', (err, fd) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.error('myfile does not exist');
      return;
    }

    throw err;
  }
  //readMyData(fd);
});
