const express = require('express')
const app = express()

app.get('*', (request, response, next) => {
  response.send('Hello there!')
})

app.listen(9999, () => console.log('Web Server running on port 9999'),)
