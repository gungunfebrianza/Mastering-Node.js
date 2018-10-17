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
    res.status(404).sendFile(process.cwd() + '/views/404.htm');
  }
};

let _registerRoutes = (routes, method) => {
  for (let key in routes) {
    console.log(key);
    console.log(routes[key]);

    if (
      typeof routes[key] === 'object' &&
      routes[key] !== null &&
      !(routes[key] instanceof Array) //must not an array
    ) {
      _registerRoutes(routes[key], key);
    } else {
      if (method === 'get') {
        console.log('If Method Get - Add to Router');
        console.log(key);
        console.log(routes[key]);
      } else if (method === 'post') {
        console.log('If Method POST  - Add to Router');
        console.log(key);
        console.log(routes[key]);
      }
    }
  }
};

_registerRoutes(routes);
