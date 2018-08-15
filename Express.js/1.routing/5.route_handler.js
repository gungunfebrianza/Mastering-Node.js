const express = require('express')

const app = express()

// Route handlers are callback functions that accept three arguments.
// The first one is the request object, the second one is the response object,
// and the last one is a callback, which passes the handler to the next request
// handler in the chain.
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

var cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

var cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

app.get('/three', [cb0, cb1], function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from D!')
})

app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
