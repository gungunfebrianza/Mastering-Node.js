const express = require('express')

const app = express()


/*Syntax
res.sendFile(path [, options] [, fn])
*/

/*Definition
Transfers the file at the given path. Sets the Content-Type response HTTP header
field based on the filename’s extension. Unless the root option is set in the
options object, path must be an absolute path to the file.
The following table provides details on the options parameter.
*/
app.get('/user/:uid/photos/:file', function(req, res){
  var uid = req.params.uid
    , file = req.params.file;

  req.user.mayViewFilesFrom(uid, function(yes){
    if (yes) {
      res.sendFile('/uploads/' + uid + '/' + file);
    } else {
      res.status(403).send("Sorry! You can't see that.");
    }
  });
});


/*Status Code:
https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
*/

app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
