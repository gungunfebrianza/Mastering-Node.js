const express = require('express')

const app = express()

app.get('/one', (request, response, nextHandler) => {
	response.type('text/plain')
	response.write('Hello ')
	nextHandler()
})

app.get('/one', (request, response, nextHandler) => {
	response.status(200).end('World!')
})

app.get('/two',
	(request, response, nextHandler) => {
		response.type('text/plain')
		response.write('Hello ')
		nextHandler()
	},
	(request, response, nextHandler) => {
		response.status(200).end('Moon!')
	}
)

app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
