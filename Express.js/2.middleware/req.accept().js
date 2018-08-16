const express = require('express')
const app = express()

/* Syntax
req.accepts(types) */

/* Definition
Checks if the specified content types are acceptable,
based on the request’s Accept HTTP header field. The method returns the
best match, or if none of the specified content types is acceptable,
returns false
(in which case, the application should respond with 406 "Not Acceptable").

The type value may be a single MIME type string (such as “application/json”),
an extension name such as “json”, a comma-delimited list, or an array.
For a list or array, the method returns the best match (if any). */

app.use('/admin', function(req, res, next) { // GET 'http://www.example.com/admin/new'
  // Accept: text/html
  req.accepts('html');
  // => "html"

  // Accept: text/*, application/json
  req.accepts('html');
  // => "html"
  req.accepts('text/html');
  // => "text/html"
  req.accepts(['json', 'text']);
  // => "json"
  req.accepts('application/json');
  // => "application/json"

  // Accept: text/*, application/json
  req.accepts('image/png');
  req.accepts('png');
  // => undefined

  // Accept: text/*;q=.5, application/json
  req.accepts(['html', 'json']);
  // => "json"
  next();
});

app.get('/', (req, res) => {
  res.send('Your Request path Recorded on the server!');
})

app.listen(9999, () => console.log('Web Server running on port 9999'),)
