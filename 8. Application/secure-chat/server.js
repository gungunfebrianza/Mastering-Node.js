'use strict';
const express = require('express');
const app = express();
const secureChat = require('./app');
const passport = require('passport');

app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(secureChat.session);
app.use(passport.initialize());
app.use(passport.session());

app.use('/', secureChat.router);

app.listen(3000, () => {
  console.log('Chat Server is Running on port!', app.get('port'));
});
