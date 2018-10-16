'use strict';
const router = require('express').Router();

let _registerRoutes = (routes, method) => {
  for (let key in routes) {
    if (
      typeof routes[key] === 'object' &&
      routes[key] !== null &&
      !(routes[key] instanceof Array) //must not an array
    ) {
      _registerRoutes(routes[key], key);
    } else {
      if (method === 'get') {
        router.get(key, routes[key]);
      } else if (method === 'post') {
        router.post(key, routes[key]);
      }
    }
  }
};

let route = routes => {
  _registerRoutes(routes);
  return router;
};

module.exports = {
  route: route
};
