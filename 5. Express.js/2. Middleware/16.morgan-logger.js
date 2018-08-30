const express = require('express')
var fs = require('fs')
var morgan = require('morgan')
var path = require('path')
const app = express()

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})

// setup the logger
app.use(morgan('combined', {stream: accessLogStream}))

app.get('*', (request, response, next) => {
  response.send('Hello Morgan!')
})

app.listen(9999, () => console.log('Web Server running on port 9999'),)
