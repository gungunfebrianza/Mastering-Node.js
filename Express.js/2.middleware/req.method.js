const express = require('express')
const app = express()

app.use('/', function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})

/*Syntax
req.method
*/

/*Definition
Contains a string corresponding to the HTTP method of the request: GET, POST,
PUT, and so on.
*/
app.get('/', (req, res) => {
	res.send('Your Request Type Recorded on the server!');
})

app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
