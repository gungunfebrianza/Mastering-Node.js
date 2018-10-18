'use strict';
const config = require('../config');
const h = require('../helpers');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
//const logger = require('../logger');
//const TwitterStrategy = require('passport-twitter').Strategy;

module.exports = () => {
  // Serializing & Deserializing User Data
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    //find the user using _.id
    h.findById(id)
      .then(user => done(null, user))
      .catch(error => console.log('error when deserializing the user'));
  });

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
  //passport.use(new TwitterStrategy(config.twitter, authProcessor));
};
