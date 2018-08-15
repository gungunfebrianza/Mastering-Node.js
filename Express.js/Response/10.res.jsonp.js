const express = require('express')

const app = express()


/*Syntax
res.jsonp([body])
*/

/*Definition
Sends a JSON response with JSONP support. This method is identical to
res.json(), except that it opts-in to JSONP callback support.
*/
app.get('/', (req, res) => {
	res.jsonp(null);
	// => callback(null)

	res.jsonp({ user: 'tobi' });
	// => callback({ "user": "tobi" })

	res.status(500).jsonp({ error: 'message' });
	// => callback({ "error": "message" })
})


app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
