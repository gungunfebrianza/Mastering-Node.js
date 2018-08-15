const express = require('express')

const app = express()


/*Syntax
res.format(object)
*/

/*Definition
Returns the HTTP response header specified by field. The match is case-insensitive.
*/
app.get('/', (req, res) => {
	res.get('Content-Type');
	// => "text/plain"
})


app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
