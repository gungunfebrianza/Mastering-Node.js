const express = require('express')

const app = express()


/*Syntax
res.json([body])
*/

/*Definition
Sends a JSON response.
This method sends a response (with the correct content-type) that is
the parameter converted to a JSON string using JSON.stringify().
The parameter can be any JSON type, including object, array, string, Boolean,
or number, and you can also use it to convert other values to JSON,
such as null, and undefined (although these are technically not valid JSON).
*/
app.get('/', (req, res) => {
	res.json(null);
	res.json({ user: 'tobi' });
	res.status(500).json({ error: 'message' });
})


app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
