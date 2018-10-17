'use strict';
const h = require('../helpers');

module.exports = () => {
  let routes = {
    get: {
      '/': (req, res, next) => {
        res.render('login', {
          pageTitle: 'Secure Chat Application'
        });
      },
      '/rooms': (req, res, next) => {
        res.render('rooms');
      },
      '/chat': (req, res, next) => {
        res.render('chatroom');
      }
    },
    post: {},
    NA: (req, res, next) => {
      res.status(404).sendFile(process.cwd() + '/views/404.html');
    }
  };

  return h.route(routes);
};
