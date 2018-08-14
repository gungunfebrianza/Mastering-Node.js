const fs = require('fs');

/*Syntax
fs.watchFile(filename[, options], listener)
    filename <string> | <Buffer> | <URL>
    options <Object>
        persistent <boolean> Default: true
        interval <integer> Default: 5007
    listener <Function>
        current <fs.Stats>
        previous <fs.Stats>
*/

/*Definition
Watch for changes on filename. The callback listener will be called each time
the file is accessed.

The options argument may be omitted. If provided, it should be an object.
The options object may contain a boolean named persistent that indicates
whether the process should continue to run as long as files are being watched.
The options object may specify an interval property indicating how often the


target should be polled in milliseconds.

The listener gets two arguments the current stat object and the previous
stat object:
*/

fs.watchFile('message.text', (curr, prev) => {
  console.log(`the current mtime is: ${curr.mtime}`);
  console.log(`the previous mtime was: ${prev.mtime}`);
});
