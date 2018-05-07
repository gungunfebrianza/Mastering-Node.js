const fs = require('fs');

/*
Synchronously append data to a file, creating the file if it does not yet exist. 
Data can be a string or a Buffer.

fs.appendFile(file, data[, options], callback)*/
try {
  fs.appendFileSync('message.txt', 'data to append synchronous');
  console.log('The "data to append" was appended to file!');
} catch (err) {
  /* Handle the error */
  console.log(err);
}

/*
file <string> | <Buffer> | <URL> | <number> filename or file descriptor
data <string> | <Buffer>
options <Object> | <string>
    encoding <string> | <null> Default: 'utf8'
    mode <integer> Default: 0o666
    flag <string> See support of file system flags. Default: 'a'.
*/
