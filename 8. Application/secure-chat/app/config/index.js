'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = {
    host: process.env.host || '',
    uri: process.env.uri,
    sessionSecret: process.env.sessionSecret,
    fb: {
      clientID: process.env.fb.clientID,
      clientSecret: process.env.fb.clientSecret,
      callbackURL: process.env.host + '/oauth/facebook/callback',
      profileFields: ['id', 'displayName', 'photos']
    }
  };
} else {
  module.exports = require('./development.json');
}
