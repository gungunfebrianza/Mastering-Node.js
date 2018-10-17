'use strict';
const passport = require('passport');
const config = require('../config');
const h = require('../helpers');
const FacebookStrategy = require('passport-facebook').Stragegy;

module.exports = () => {
  let authProcessor = (accessToken, refreshToken, profile, done) => {
    //find a user in the local db using profile.id
    //if user found, return the user data using done
    //if not found, create one in the local db and return
    h.findOne(profile.id).then(result => {
      if (result) {
        done(null, result);
      } else {
        // create new user and return
        h.createNewUser(profile)
          .then(createNewUser => done(null, createNewUser))
          .catch(error => console.log('error while creating new user'));
      }
    });
  };
  passport.use(new FacebookStrategy(config.fb, authProcessor));
};
