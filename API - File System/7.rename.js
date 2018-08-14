const fs = require('fs');

/*Syntax
fs.rename(oldPath, newPath, callback)
#
History

    oldPath <string> | <Buffer> | <URL>
    newPath <string> | <Buffer> | <URL>

    callback <Function>
        err <Error>
*/

/*
Asynchronously rename file at oldPath to the pathname provided as newPath. In
the case that newPath already exists, it will be overwritten. No arguments
other than a possible exception are given to the completion callback.
*/
fs.rename('message.txt', 'newFile.txt', (err) => {
  if (err) throw err;
  console.log('Rename complete!');
});

fs.stat('message.txt', (err, stats) => {
  if (err) throw err;
  console.log(`stats: ${JSON.stringify(stats)}`);
});
