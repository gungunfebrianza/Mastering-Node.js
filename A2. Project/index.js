console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

console.log('Result:', notes.add(9, -2));

console.log(_.isString(true));
console.log(_.isString('Gary'));

// var user = os.userInfo();
//
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);

var filteredArray = _.uniq(['Gary', 1, 'Gary', 1, 2, 3, 4]);
console.log(filteredArray);
