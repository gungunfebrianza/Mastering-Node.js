'use strict';

//Social Authentication Logic
require('./auth')();

module.exports = {
  router: require('./routes')(),
  session: require('./session')
};
