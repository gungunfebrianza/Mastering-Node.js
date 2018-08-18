const express = require('express')

const app = express()


/*Syntax
res.sendFile(path [, options] [, fn])
*/

/*Definition
Sets the response HTTP status code to statusCode and send its string
representation as the response body.
*/
app.get('/', (req, res) => {
  res.sendStatus(200); // equivalent to res.status(200).send('OK')
  res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
  res.sendStatus(404); // equivalent to res.status(404).send('Not Found')
  res.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')
})


/*Status Code:
https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
*/

app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
