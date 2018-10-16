'use strict';
const express = require('express');
const app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
  res.render('login', {
    pageTitle: 'Login Page'
  });
});

app.listen(3000, () => {
  console.log('Chat Server is Running on port!', app.get('port'));
});
