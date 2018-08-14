const fs = require('fs');

/*Syntax:
fs.stat(path[, options], callback)
    path <string> | <Buffer> | <URL>
    options <Object>
        bigint <boolean> Whether the numeric values in the returned fs.Stats object should be bigint. Default: false.

    callback <Function>
        err <Error>
        stats <fs.Stats>
*/

/*
The callback gets two arguments (err, stats) where stats is an fs.Stats object.6
In case of an error, the err.code will be one of Common Error System
To check if a file exists without manipulating it afterwards, fs.access()
is recommended.
*/

fs.stat('message.txt', (err, stats) => {
  if (err) throw err;
  console.log(`stats: ${JSON.stringify(stats)}`);
});
