const express = require('express')
var morgan = require('morgan')
const app = express()

// setup the logger
app.use(morgan('combined', {
  skip: function (req, res) { console.log(req.route.path)}
}))

app.get('*', (request, response, next) => {
  response.send('Hello Morgan!')
})

app.listen(9999, () => console.log('Web Server running on port 9999'),)
