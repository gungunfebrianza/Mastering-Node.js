'use strict';
const express = require('express');
const app = express();
const secureChat = require('./app');

app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/', secureChat.router);

app.listen(3000, () => {
  console.log('Chat Server is Running on port!', app.get('port'));
});
