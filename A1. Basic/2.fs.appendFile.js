const fs = require('fs');

/*
Asynchronously append data to a file, creating the file if it does not yet exist.
Data can be a string or a Buffer.

fs.appendFile(file, data[, options], callback)*/
fs.appendFile('message.txt', 'data to append', 'utf8', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});

/*
file <string> | <Buffer> | <URL> | <number> filename or file descriptor
data <string> | <Buffer>
options <Object> | <string>
    encoding <string> | <null> Default: 'utf8'
    mode <integer> Default: 0o666
    flag <string> See support of file system flags. Default: 'a'.
callback <Function>
    err <Error>
*/
