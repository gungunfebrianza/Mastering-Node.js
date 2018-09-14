var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());

app.get('/cookie', function(req, res) {
  res.cookie('cookie_name', 'cookie_value').send('Cookie is set');
});

app.get('/cookieset', function(req, res) {
  res.cookie('cookie_name', 'cookie_value');
  res.cookie('company', 'javatpoint');
  res.cookie('name', 'sonoo');

  res.status(200).send('Cookie is set');
});

app.get('/', function(req, res) {
  // Cookies that have not been signed
  console.log('Cookies: ', req.cookies)

  // Cookies that have been signed
  console.log('Signed Cookies: ', req.signedCookies)
});

app.listen(9999, () => console.log('Web Server running on port 9999'),)
