const express = require('express')

const app = express()


/*Syntax
res.location(path)
*/

/*Definition
Sets the response Location HTTP header to the specified path parameter.
A path value of “back” has a special meaning,
it refers to the URL specified in the Referer header of the request.
If the Referer header was not specified, it refers to “/”.
*/
app.get('/', (req, res) => {
	res.location('/foo/bar');
	res.location('http://example.com');
	res.location('back');
})


app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
