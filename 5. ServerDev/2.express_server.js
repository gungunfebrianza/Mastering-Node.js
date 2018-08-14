var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(9999)

// ExpressJS does the whole job of understanding a client's request.
// The request may come from a browser, for instance. Once the request has been
// interpreted, ExpressJS saves all the information in two objects:
//
// Request: This contains all the data and information about the client's request.
// For instance, ExpressJS parses the URI and makes its parameters available on
// request.query.
//
// Response: This contains data and information that will be sent to the client.
// The response's headers can be modified as well before sending the information
// to the client. The response object has several methods available for sending
// the status code and data to the client.
// For instance:
// response.status(200).send('Some Data!').
