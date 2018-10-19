'use strict';
const express = require('express');
const app = express();

const config = require('./app/config');
const h = require('./app/helpers');

h.findOne('must unique').then(result => {
  if (result) {
    //;
  } else {
    // create new user and return
    const profile = {
      id: '99',
      displayName: 'Octagon Fullname',
      image: 'gambar'
    };
    h.createNewUser(profile)
      .then(createNewUser => console.log('Success Create Account'))
      .catch(error => console.log(error));
  }
});

//app is express object
let ioServer = app => {
  app.locals.chatrooms = [];
  const server = require('http').Server(app);
  const io = require('socket.io')(server);
  io.use((socket, next) => {
    require('./app/session')(socket.request, {}, next);
  });

  require('./app/socket')(io, app);
  return server;
};
const router = require('./app/routes')();
const session = require('./app/session');
const passport = require('passport');

app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(session);
app.use(passport.initialize());
app.use(passport.session());

app.use('/', router);

ioServer(app).listen(app.get('port'), () => {
  console.log('Chat Server is Running on port!', app.get('port'));
});
