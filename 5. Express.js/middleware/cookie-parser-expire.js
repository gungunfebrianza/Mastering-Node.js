var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());

app.get('/expire', function(req, res) {
  //Expires after 360000 ms from the time it is set.
  res.cookie('expire', '360000', {expire: 360000 + Date.now()});
});

app.get('/maxage', function(req, res) {
  //This cookie also expires after 360000 ms from the time it is set.
  res.cookie('maxAge', '360000', {maxAge: 360000});
});

app.get('/', function(req, res) {
  // Cookies that have not been signed
  console.log('Cookies: ', req.cookies)

  // Cookies that have been signed
  console.log('Signed Cookies: ', req.signedCookies)
});

app.listen(9999, () => console.log('Web Server running on port 9999'),)
