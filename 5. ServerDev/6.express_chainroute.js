const express = require('express')
const app = express()

// Route methods can be chainable using app.route(path) because the path is
// specified for a single location. This is probably the best approach when
// dealing with multiple route methods because, besides making the code more
// readable and less prone to typos and redundancy, it allows to work with
// multiple route methods at the same time.

//Chain three route methods using the route method
app.route('/home').get((request, response, nextHandler) => {
  response.type('text/html')
  response.write('<!DOCTYPE html>')
  nextHandler()
}).get((request, response, nextHandler) => {
  response.end(`
	<html lang="en">
		<head>
		<meta charset="utf-8">
		<title>WebApp powered by ExpressJS</title>
		</head>
		<body role="application">
			<form method="post" action="/home">
				<input type="text" />
				<button type="submit">Send</button>
			</form>
		</body>
	</html>
	`)
}).post((request, response, nextHandler) => {
  response.send('Got it!')
})

app.listen(9999, () => console.log('Web Server running on port 9999'),)
