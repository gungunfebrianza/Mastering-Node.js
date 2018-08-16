const express = require('express')
const app = express()

/*Syntax
req.cookies
*/

/*Definition
When using cookie-parser middleware, this property is an object that contains
cookies sent by the request. If the request contains no cookies, it defaults to {}.
*/

app.use('/', function(req, res, next) {
  req.cookies.name;
  next();
});

app.get('/', (req, res) => {
	res.send('Your Request path Recorded on the server!');
})

app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
