const express = require('express')
const app = express()

/*Syntax
req.originalUrl
*/

/*Definition
In a middleware function, req.originalUrl is a combination of req.baseUrl
and req.path, as shown in the following example.

This property is much like req.url; however,
it retains the original request URL, allowing you to rewrite req.url freely
for internal routing purposes. For example, the “mounting” feature of app.use()
will rewrite req.url to strip the mount point.
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
