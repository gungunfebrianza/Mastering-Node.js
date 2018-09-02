const express = require('express')

const app = express()


/*Syntax
res.links(links)
*/

/*Definition
Joins the links provided as properties of the parameter to populate
the response’s Link HTTP header field.
For example, the following call:
*/
app.get('/', (req, res) => {
	res.links({
	  next: 'http://api.example.com/users?page=2',
	  last: 'http://api.example.com/users?page=5'
	});
})


app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
