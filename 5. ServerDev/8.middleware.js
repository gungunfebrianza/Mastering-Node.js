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
/*Notes!!
Just like with route handlers, middleware functions need to pass control to
the next handler otherwise, our application will have been hanging because no
data was sent to the client, and the connection was not closed either.

If new properties are added to the request or response objects inside a
middleware function, the next handler will have access to those new properties.
As in our previously written code, the allowed property in the request object
is available to the next handler.*/
