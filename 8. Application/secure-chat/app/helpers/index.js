'use strict';
const router = require('express').Router();
const db = require('../db');

let _registerRoutes = (routes, method) => {
  for (let key in routes) {
    if (
      typeof routes[key] === 'object' &&
      routes[key] !== null &&
      !(routes[key] instanceof Array)
    ) {
      //must not an array
      /* =========== Output Line 24
      From console.log(key); => get
      From console.log(routes[key]); => below code :
      { '/': [Function: /],
        '/rooms': [Function: /rooms],
        '/chat': [Function: /chat] 
      }
       */
      _registerRoutes(routes[key], key); //console.log(routes[key], key); mean go to else
    } else {
      if (method === 'get') {
        router.get(key, routes[key]);
      } else if (method === 'post') {
        router.post(key, routes[key]);
      } else {
        router.use(routes[key]);
      }
      /* =========== Output Line 27
      routes[key] become like key on line 4 so the output is :
      
      key atau path = /
      routes[key] = [Function: /]

      key atau path = /rooms
      routes[key] = [Function: /rooms]

      key atau path = /chat
      routes[key] = [Function: /chat] */
    }
  }
};

let route = routes => {
  _registerRoutes(routes);
  return router;
};

let findOne = profileID => {
  return db.userModel.findOne({
    profileId: profileID
  });
};

let createNewUser = profile => {
  return new Promise((resolve, reject) => {
    let newChatUser = new db.userModel({
      profileId: profile.id,
      fullName: profile.displayName,
      profilePic: profile.photos[0].value || ''
    });
    newChatUser.save(error => {
      if (error) {
        reject(error);
      } else {
        resolve(newChatUser);
      }
    });
  });
};

let findById = id => {
  return new Promise((resolve, reject) => {
    db.userModel.findById(id, (error, user) => {
      if (error) {
        reject(error);
      } else {
        resolve(user);
      }
    });
  });
};

module.exports = {
  route,
  findOne,
  createNewUser,
  findById
};
