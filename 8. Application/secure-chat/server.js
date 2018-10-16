'use strict';
const express = require('express');
const app = express();
app.set('port', process.env.PORT || 3000);

let testMiddleware = (req, res, next) => {
  // Create new key with value pair
  req.hello = 'Middleware';
  // move to the next control
  next();
};

// Use The Middleware Before hit all route.
app.use(testMiddleware);
// for specific route
//app.use('/dashboard',testMiddleware);

app.get('/', (req, res, next) => {
  res.send('<h1>Hello World</h1>');
  console.log(req.hello);
});

app.get('/dashboard', (req, res, next) => {
  res.send('<h1>Dashboard ' + req.hello + '</h1>');
});

app.listen(3000, () => {
  console.log('Chat Server is Running on port!', app.get('port'));
});
