const express = require('express')
const app = express()

app.get('/', (request, response, next) => {
  try {
    //One is implicit when an error occurs inside a route handler.
    throw new Error('Oh no!, something went wrong!')
    // And another way of triggering the built-in error handler is explicit when 
    // passing an error as an argument to next(error).
  } catch (err) {
    next(err)
  }
})

app.use((error, request, response, next) => {
  response.end(error.message)
})

app.listen(9999, () => console.log('Web Server running on port 9999'),)
