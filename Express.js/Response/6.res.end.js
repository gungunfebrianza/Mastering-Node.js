const express = require('express')

const app = express()


/*Syntax
res.end([data] [, encoding])
*/

/*Definition
Ends the response process. This method actually comes from Node core,
specifically the response.end() method of http.ServerResponse.
Use to quickly end the response without any data.
If you need to respond with data,
instead use methods such as res.send() and res.json().
*/
app.get('/', (req, res) => {
	res.end();
	res.status(404).end();
})


app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
