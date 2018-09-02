const express = require('express')

const app = express()


/*Syntax
res.set(field [, value])
*/

/*Definition
Sets the response’s HTTP header field to value.
To set multiple fields at once, pass an object as the parameter.
*/
app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');

  res.set({
    'Content-Type': 'text/plain',
    'Content-Length': '123',
    'ETag': '12345'
  });
})

app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
