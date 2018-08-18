const express = require('express')
const app = express()

/*Syntax
req.fresh
*/

/*Definition
Indicates whether the request is “fresh.” It is the opposite of req.stale.
It is true if the cache-control request header doesn’t have a no-cache
directive and any of the following are true:
  The if-modified-since request header is specified and last-modified request
  header is equal to or earlier than the modified response header.
  The if-none-match request header is *.
  The if-none-match request header, after being parsed into its directives,
  does not match the etag response header.
*/

app.use('/', function(req, res, next) {
  req.fresh;
  next();
});

app.get('/', (req, res) => {
	res.send('Your Request path Recorded on the server!');
})

app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
