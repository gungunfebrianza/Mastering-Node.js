const express = require('express')
const app = express()

/* Syntax
req.get(field)
*/

/* Definition
Returns the specified HTTP request header field (case-insensitive match).
The Referrer and Referer fields are interchangeable. */

app.use('/admin', function(req, res, next) { // GET 'http://www.example.com/admin/new'
  req.get('Content-Type');
  // => "text/plain"

  req.get('content-type');
  // => "text/plain"

  req.get('Something');
  // => undefined
  next();
});

app.get('/', (req, res) => {
  res.send('Your Request path Recorded on the server!');
})

app.listen(9999, () => console.log('Web Server running on port 9999'),)
