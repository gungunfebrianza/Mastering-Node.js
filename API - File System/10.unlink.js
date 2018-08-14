const fs = require('fs');

/*Syntax
fs.unlink(path, callback)
#
    path <string> | <Buffer> | <URL>
    callback <Function>
        err <Error>
*/

/*Definition
Asynchronously removes a file or symbolic link. No arguments other than a
possible exception are given to the completion callback.
*/
fs.unlink('test.txt', (err) => {
  if (err) throw err;
  console.log('successfully deleted test.txt');
});
