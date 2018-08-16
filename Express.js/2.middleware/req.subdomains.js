const express = require('express')
const app = express()

/*Syntax
req.subdomains
*/

/*Definition
An array of subdomains in the domain name of the request.
*/

app.use('/', function(req, res, next) {
  // Host: "tobi.ferrets.example.com"
  req.subdomains
  // => ["ferrets", "tobi"]
  next();
});

app.get('/', (req, res) => {
	res.send('Your Request path Recorded on the server!');
})

app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
