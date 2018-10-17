'use strict';
const config = require('../config');
const Mongoose = require('mongoose');
Mongoose.connect(config.uri);

var db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Connected !');
  
});

module.exports = {
  Mongoose
};
