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
          res.render('rooms', { user: req.user });
        }
      ],
      '/chat': [
        h.isAuthenticated,
        (req, res, next) => {
          res.render('chatroom', {
            user: req.user
          });
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
