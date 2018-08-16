const express = require('express')
const app = express()

/*Syntax
req.query
*/

/*Definition
This property is an object containing a property for each query string parameter
in the route. If there is no query string, it is the empty object, {}.
*/

app.use('/', function(req, res, next) {
  // GET /search?q=tobi+ferret
  req.query.q
  // => "tobi ferret"

  // GET /shoes?order=desc&shoe[color]=blue&shoe[type]=converse
  req.query.order
  // => "desc"

  req.query.shoe.color
  // => "blue"

  req.query.shoe.type
  // => "converse"
  next();
});

app.get('/', (req, res) => {
	res.send('Your Request path Recorded on the server!');
})

app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
