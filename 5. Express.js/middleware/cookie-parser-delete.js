var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());

app.get('/', function(req, res) {
  res.clearCookie('expire');
  res.send('cookie expire cleared');
});

app.listen(9999, () => console.log('Web Server running on port 9999'),)
