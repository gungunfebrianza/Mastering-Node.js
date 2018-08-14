const fs = require('fs');

/*Syntax
fs.writeFile(file, data[, options], callback)
#
History

    file <string> | <Buffer> | <URL> | <integer> filename or file descriptor
    data <string> | <Buffer> | <Uint8Array>

    options <Object> | <string>
        encoding <string> | <null> Default: 'utf8'
        mode <integer> Default: 0o666
        flag <string> See support of file system flags. Default: 'w'.

    callback <Function>
        err <Error>
*/

/*Definition
Asynchronously writes data to a file, replacing the file if it already exists.
data can be a string or a buffer.

The encoding option is ignored if data is a buffer.
*/
fs.writeFile('data.html', 'Hello World', 'UTF-8', (err)=>{
  if(err) return err;
  console.log('File Saved!');
})


/*Filesystem Flag
    'a' - Open file for appending. The file is created if it does not exist.
    'ax' - Like 'a' but fails if the path exists.
    'a+' - Open file for reading and appending. The file is created if it does not exist.
    'ax+' - Like 'a+' but fails if the path exists.
    'as' - Open file for appending in synchronous mode. The file is created if it does not exist.
    'as+' - Open file for reading and appending in synchronous mode. The file is created if it does not exist.
    'r' - Open file for reading. An exception occurs if the file does not exist.
    'r+' - Open file for reading and writing. An exception occurs if the file does not exist.
    'rs+' - Open file for reading and writing in synchronous mode. Instructs the operating system to bypass the local file system cache.
    This is primarily useful for opening files on NFS mounts as it allows skipping the potentially stale local cache. It has a very real impact on I/O performance so using this flag is not recommended unless it is needed.
    This doesn't turn fs.open() or fsPromises.open() into a synchronous blocking call. If synchronous operation is desired, something like fs.openSync() should be used.
    'w' - Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
    'wx' - Like 'w' but fails if the path exists.
    'w+' - Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
    'wx+' - Like 'w+' but fails if the path exists.
*/
