const fs = require('fs');

/*
    path <string> | <Buffer> | <URL>
    Returns: <boolean>
    Returns true if the path exists, false otherwise.
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
