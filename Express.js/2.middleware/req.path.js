const express = require('express')
const app = express()

/*Syntax
req.path
*/

/*Definition
Contains the path part of the request URL.
*/

/*Example
// example.com/users?sort=desc
req.path
// => "/users"
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
