const express = require('express')
const bodyParser = require('body-parser')
const app = express()

/*Include the body-parser middleware functions to handle URL encoded requests
and text plain requests*/
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.text())

/*Add a new route method to handle GET requests for path "/". Serve HTML content
with two forms that submit data using different encodings:*/
app.get('/', (request, response, next) => {
  response.send(`
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>WebApp powered by ExpressJS</title>
	</head>
	<body>
		<div role="application">
			<form method="post" action="/setdata">
				<input name="urlencoded" type="text" />
				<button type="submit">Send</button>
			</form>
			<form method="post" action="/setdata" enctype="text/plain">
				<input name="txtencoded" type="text" />
				<button type="submit">Send</button>
			</form>
		</div>
	</body>
	</html>
	`)
})

/*Add a new route method to handle POST requests for path "/setdata".
Display on terminal the content of request.body:*/
app.post('/setdata', (request, response, next) => {
  console.log(request.body)
  response.end()
})

app.listen(9999, () => console.log('Web Server running on port 9999'),)

/*Terminal outputs something like:
{ 'urlencoded': 'Example' }
txtencoded=Example

Two parsers are used above:
The first one bodyParser.urlencoded() parses incoming requests for
multipart/form-data encoding type. The result is available as an Object in
request.body

The second one bodyParser.text() parses incoming requests for text/plain
encoding type. The result is available as a String in request.body*/
