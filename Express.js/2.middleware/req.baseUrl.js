const express = require('express')
const app = express()

/*Syntax
req.baseUrl
*/

/*Definition
The URL path on which a router instance was mounted.
The req.baseUrl property is similar to the mountpath property of the app object,
except app.mountpath returns the matched path pattern(s).
For example:
*/

/*Example
// GET /search?q=something
req.originalUrl
// => "/search?q=something"
*/

app.use('/admin', function(req, res, next) {  // GET 'http://www.example.com/admin/new'
  console.log(req.originalUrl); // '/admin/new'
  console.log(req.baseUrl); // '/admin'
  console.log(req.path); // '/new'
  next();
});

app.get('/admin', (req, res) => {
	res.send('Your Request path Recorded on the server!');
})

app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
