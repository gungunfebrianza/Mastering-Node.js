'use strict';
const passport = require('passport');
const config = require('../config');
const FacebookStrategy = require('passport-facebook').Stragegy;

module.exports = () => {
  let authProcessor = (accessToken, refreshToken, profile, done) => {
    //find a user in the local db using profile.id
    //if user found, return the user data using done
    //if not found, create one in the local db and return
  };
  passport.use(new FacebookStrategy(config.fb, authProcessor));
};
