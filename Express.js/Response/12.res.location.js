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

/*Notes:
After encoding the URL, if not encoded already,
Express passes the specified URL to the browser in the Location header,
without any validation.
Browsers take the responsibility of deriving the intended URL from the current
URL or the referring URL, and the URL specified in the Location header;
and redirect the user accordingly.
*/

app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
