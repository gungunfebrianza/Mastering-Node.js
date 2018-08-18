const express = require('express')
const app = express()

/* Syntax
req.is(field)
*/

/* Definition
Returns the matching content type if the incoming request’s “Content-Type” HTTP
header field matches the MIME type specified by the type parameter.
If the request has no body, returns null. Returns false otherwise.
*/

app.use('/', function(req, res, next) {
  // With Content-Type: text/html; charset=utf-8
  req.is('html');       // => 'html'
  req.is('text/html');  // => 'text/html'
  req.is('text/*');     // => 'text/*'

  // When Content-Type is application/json
  req.is('json');              // => 'json'
  req.is('application/json');  // => 'application/json'
  req.is('application/*');     // => 'application/*'

  req.is('html');
  // => false
  next();
});

app.get('/', (req, res) => {
  res.send('Your Request path Recorded on the server!');
})

app.listen(9999, () => console.log('Web Server running on port 9999'),)
