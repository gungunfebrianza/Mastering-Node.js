'use strict';
const h = require('../helpers');
const passport = require('passport');
const config = require('../config');

module.exports = () => {
  let routes = {
    get: {
      '/': (req, res, next) => {
        res.render('login', { pageTitle: 'Secure Chat Application' });
      },
      '/rooms': [
        h.isAuthenticated,
        (req, res, next) => {
          res.render('rooms', { user: req.user, host: config.host });
        }
      ],
      '/chat/:id': [
        h.isAuthenticated,
        (req, res, next) => {
          // Find a chatroom with the given id
          // Render it if the id is found
          let getRoom = h.findRoomById(req.app.locals.chatrooms, req.params.id);
          if (getRoom === undefined) {
            return next();
          } else {
            res.render('chatroom', {
              user: req.user,
              host: config.host,
              room: getRoom.room,
              roomID: getRoom.roomID
            });
          }
        }
      ],
      '/auth/facebook': passport.authenticate('facebook'),
      '/auth/facebook/callback': passport.authenticate(
        //Social Authentication Route
        'facebook',
        {
          successRedirect: '/rooms',
          failureRedirect: '/'
        }
      ),
      '/auth/twitter': passport.authenticate('twitter'),
      '/auth/twitter/callback': passport.authenticate('twitter', {
        successRedirect: '/rooms',
        failureRedirect: '/'
      }),
      '/logout': (req, res, next) => {
        req.logout();
        res.redirect('/');
      }
    },
    post: {}
  };
  /* ,
      '/getsession': (req, res, next) => {
        res.send('My Fav Color ' + req.session.favColor);
      },
      '/setsession': (req, res, next) => {
        req.session.favColor = 'red';
        res.send('session set');
      } */

  return h.route(routes);
};
