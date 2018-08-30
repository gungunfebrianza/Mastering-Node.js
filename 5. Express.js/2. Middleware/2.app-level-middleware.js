var express = require('express')
var app = express()

/*Next, we’ll create a middleware function called “requestTime” and
add it as a property called requestTime to the request object.*/
var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

/*The app now uses the requestTime middleware function. Also, the callback
function of the root path route uses the property that the middleware function
adds to req (the request object).*/
app.use(requestTime)

/*When you make a request to the root of the app, the app now displays the
timestamp of your request in the browser.*/
app.get('/', function (req, res) {
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
})

app.listen(9999, function() {
  console.log('Listening on port 9999!');
});
