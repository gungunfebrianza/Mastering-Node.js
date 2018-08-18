const express = require('express')
const app = express()

app.use('/', function (req, res, next) {
  console.log('Request Protocol:', req.protocol)
  next()
})

/*Syntax
req.protocol
*/

/*Definition
Contains the request protocol string: either http or (for TLS requests) https.
When the trust proxy setting does not evaluate to false, this property will use
the value of the X-Forwarded-Proto header field if present. This header can be
set by the client or by the proxy.
*/
app.get('/', (req, res) => {
	res.send('Your Protocol Type Recorded on the server!');
})

app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
