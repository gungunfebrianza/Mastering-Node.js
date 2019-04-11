'use strict';
const h = require('../helpers');
const config = require('../config');

module.exports = () => {
  let routes = {
    get: {
      '/': (req, res, next) => {
        res.render('login', { pageTitle: 'Secure Chat Application' });
      },
      '/rooms': (req, res, next) => {
        res.render('rooms', {
          user: {
            fullName: 'TestFullname', //dari database
            profilePic: 'Test ProfilePic' //dari database
          },
          host: config.host
        });
      },
      '/chat/:id': (req, res, next) => {
        // Find a chatroom with the given id
        // Render it if the id is found
        let getRoom = h.findRoomById(req.app.locals.chatrooms, req.params.id);
        if (getRoom === undefined) {
          return next();
        } else {
          res.render('chatroom', {
            user: {
              fullName: 'TestFullname', //dari database
              profilePic: 'Test ProfilePic' //dari database
            },
            host: config.host,
            room: getRoom.room,
            roomID: getRoom.roomID
          });
        }
      },
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
