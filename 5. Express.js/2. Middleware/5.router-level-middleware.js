const express = require('express');

var app = express()
var router = express.Router()

var wiki = require('./4.router-module.js');
app.use('/wiki', wiki);

app.listen(9999, function() {
  console.log('Listening on port 9999!');
});
