const express = require('express')
const app = express()

/*Syntax
req.ip
*/

/*Definition
Contains the remote IP address of the request.
When the trust proxy setting does not evaluate to false, the value of this
property is derived from the left-most entry in the X-Forwarded-For header.
This header can be set by the client or by the proxy.
*/

app.use('/', function(req, res, next) {
  req.ip;
  next();
});

app.get('/', (req, res) => {
	res.send('Your Request path Recorded on the server!');
})

app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
