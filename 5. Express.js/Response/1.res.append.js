const express = require('express')

const app = express()


/*Syntax
res.append(field [, value])
*/

/*Definition
Appends the specified value to the HTTP response header field. If the header is
not already set, it creates the header with the specified value.
The value parameter can be a string or an array. Note: calling res.set() after
res.append() will reset the previously-set header value.
*/
app.get('/', (req, res) => {
	res.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);
	res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
	res.append('Warning', '199 Miscellaneous warning');
	res.append('kucuk', 'cukucuk');
	res.send('aa');
})


app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
