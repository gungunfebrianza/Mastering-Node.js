const express = require('express')

const app = express()


/*Syntax
res.type(type)
*/

/*Definition
Sets the Content-Type HTTP header to the MIME type as determined
by mime.lookup() for the specified type. If type contains the “/” character,
then it sets the Content-Type to type.
*/
app.get('/', (req, res) => {
  res.type('.html');              // => 'text/html'
  res.type('html');               // => 'text/html'
  res.type('json');               // => 'application/json'
  res.type('application/json');   // => 'application/json'
  res.type('png');                // => image/png:
})

app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
