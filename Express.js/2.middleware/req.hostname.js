const express = require('express')
const app = express()

/*Syntax
req.hostname
*/

/*Definition
Contains the hostname derived from the Host HTTP header.
When the trust proxy setting does not evaluate to false, this property will
instead have the value of the X-Forwarded-Host header field. This header can be
set by the client or by the proxy.
*/

/*Example :
// Host: "example.com:3000"
req.hostname
// => "example.com"
*/

app.use('/', function(req, res, next) {
  req.hostname
  next();
});

app.get('/', (req, res) => {
	res.send('Your Request path Recorded on the server!');
})

app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
