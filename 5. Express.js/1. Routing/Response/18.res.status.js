const express = require('express')

const app = express()


/*Syntax
res.status(code)
*/

/*Definition
Sets the HTTP status for the response.
It is a chainable alias of Node’s response.statusCode.
*/
app.get('/', (req, res) => {
  res.status(403).end();
  res.status(400).send('Bad Request');
  res.status(404).sendFile('/absolute/path/to/404.png');
})

/*Status Code:
https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
*/

app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
