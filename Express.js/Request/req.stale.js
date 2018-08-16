const express = require('express')
const app = express()

/*Syntax
req.stale
*/

/*Definition
Indicates whether the request is “stale,” and is the opposite of req.fresh.
For more information, see req.fresh.
*/

app.use('/', function(req, res, next) {
  req.stale;
  next();
});

app.get('/', (req, res) => {
	res.send('Your Request path Recorded on the server!');
})

app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
