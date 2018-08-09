const express = require('express')
const app = express()

// Middleware functions have the following signature:
app.use((request, response, next) => {
// Write a middleware function that will add a property allowed to the request object
  request.allowed = Reflect.has(request.query, 'allowme')
  next()
})

//Add a request method to handle requests for path "/":
app.get('/', (request, response, next) => {
  if (request.allowed) {
    response.send('Hello secret world!')
  } else {
    response.send('You are not allowed to enter')
  }
})

app.listen(9999, () => console.log('Web Server running on port 9999'),)
