// Writing Router-level Middleware functions
const express = require('express')
const app = express()

//Define a new router:
const router = express.Router()

//Define our logger middleware function inside the router
router.use((request, response, next) => {
  if (!request.query.id) {
    next('router') // Next, out of Router
  } else {
    next() // Next, in Router
  }
})

// Add a route method to handle GET requests for path "/" which will be executed
// only if the middleware function passes control to it
router.get('/', (request, response, next) => {
  const id = request.query.id
  response.send(`You specified a user ID => ${id}`)
})

// Add a route method to handle GET requests for path "/" outside of the router.
// However, include the router as a route handler as the second argument, and
// another route handler to handle the same request only if the router passes
// control to it:
app.get('/', router, (request, response, next) => {
  response.status(400).send('A user ID needs to be specified')
})
// middleware function in the router checks if the id was
// provided in the query, and because it is not, it passes control to the next
// handler outside of the router with next('router').

// That happens because, as an id was provided in the query, the middleware 
// function in the router will pass control to the next handler inside the router
// with next().

app.listen(9999, () => console.log('Web Server running on port 9999'),)
