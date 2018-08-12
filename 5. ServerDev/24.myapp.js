const express = require('express')
const app = express()
const debug = require('debug')('myapp')

app.get('*', (request, response, next) => {
	debug('Request:', request.originalUrl)
	response.send('Hello there!')
})

app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
