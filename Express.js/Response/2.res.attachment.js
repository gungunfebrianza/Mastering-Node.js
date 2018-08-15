const express = require('express')

const app = express()


/*Syntax
res.attachment([filename])
*/

/*Definition
Sets the HTTP response Content-Disposition header field to “attachment”.
If a filename is given, then it sets the Content-Type based on
the extension name via res.type(), and sets the Content-Disposition
“filename=” parameter.
*/
app.get('/', (req, res) => {
	res.attachment();
	// Content-Disposition: attachment

	res.attachment('coffee.jpg');
	// Content-Disposition: attachment; filename="logo.png"
	// Content-Type: image/png
})


app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
