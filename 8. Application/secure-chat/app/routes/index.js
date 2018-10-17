'use strict';
const h = require('../helpers');

module.exports = () => {
  let routes = {
    get: {
      '/': (req, res, next) => {
        res.render('login', { pageTitle: 'Secure Chat Application' });
      },
      '/rooms': (req, res, next) => {
        res.render('rooms');
      },
      '/chat': (req, res, next) => {
        res.render('chatroom');
      } /* ,
      '/getsession': (req, res, next) => {
        res.send('My Fav Color ' + req.session.favColor);
      },
      '/setsession': (req, res, next) => {
        req.session.favColor = 'red';
        res.send('session set');
      } */
    },
    post: {},
    NA: (req, res, next) => {
      res.status(404).sendFile(process.cwd() + '/views/404.html');
    }
  };

  return h.route(routes);
};
