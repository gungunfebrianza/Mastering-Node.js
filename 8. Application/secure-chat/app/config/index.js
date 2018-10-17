'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = {
    host: process.env.host || '',
    uri: process.env.uri,
    sessionSecret: process.env.sessionSecret
  };
} else {
  module.exports = require('./development.json');
}
