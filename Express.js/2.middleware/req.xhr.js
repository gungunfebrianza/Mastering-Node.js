const express = require('express')
const app = express()

/*Syntax
req.xhr
*/

/*Definition
A Boolean property that is true if the request’s X-Requested-With header field
is “XMLHttpRequest”, indicating that the request was issued by a client library
such as jQuery.
*/

app.use('/', function(req, res, next) {
  req.xhr
  // true
  next();
});

app.get('/', (req, res) => {
	res.send('Your Request path Recorded on the server!');
})

app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
