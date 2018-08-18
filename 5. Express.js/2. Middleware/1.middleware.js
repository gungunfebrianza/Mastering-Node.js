var express = require('express')
var app = express()

var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

/*To load the middleware function, call app.use(), specifying the middleware
function. For example, the following code loads the myLogger middleware
function before the route to the root path (/).*/
app.use(myLogger)

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(9999)
