const fs = require('fs');

/*Syntax
fs.access(path[, mode], callback)
#
History

    path <string> | <Buffer> | <URL>
    mode <integer> Default: fs.constants.F_OK

    callback <Function>
        err <Error>
*/

/*Definition
Tests a user's permissions for the file or directory specified by path.
The mode argument is an optional integer that specifies the accessibility
checks to be performed. Check File Access Constants for possible values of mode.
It is possible to create a mask consisting of the bitwise OR of two or more
values (e.g. fs.constants.W_OK | fs.constants.R_OK).
*/

fs.access('changed.txt', fs.constants.R_OK | fs.constants.W_OK, (err) => {
  console.log(err ? 'no access!' : 'can read/write');
});

// Check if the file exists in the current directory.
fs.access(file, fs.constants.F_OK, (err) => {
  console.log(`${file} ${err ? 'does not exist' : 'exists'}`);
});

// Check if the file is readable.
fs.access(file, fs.constants.R_OK, (err) => {
  console.log(`${file} ${err ? 'is not readable' : 'is readable'}`);
});

// Check if the file is writable.
fs.access(file, fs.constants.W_OK, (err) => {
  console.log(`${file} ${err ? 'is not writable' : 'is writable'}`);
});

// Check if the file exists in the current directory, and if it is writable.
fs.access(file, fs.constants.F_OK | fs.constants.W_OK, (err) => {
  if (err) {
    console.error(
      `${file} ${err.code === 'ENOENT' ? 'does not exist' : 'is read-only'}`);
  } else {
    console.log(`${file} exists, and it is writable`);
  }
});

/*File Access Constants
The following constants are meant for use with fs.access().
Constant 	Description
F_OK 	Flag indicating that the file is visible to the calling process.
This is useful for determining if a file exists, but says nothing about rwx
permissions. Default if no mode is specified.
R_OK 	Flag indicating that the file can be read by the calling process.
W_OK 	Flag indicating that the file can be written by the calling process.
X_OK 	Flag indicating that the file can be executed by the calling process.
This has no effect on Windows (will behave like fs.constants.F_OK).
*/
