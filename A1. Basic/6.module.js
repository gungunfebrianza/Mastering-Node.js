console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var user = os.userInfo();

try {
  fs.appendFileSync('message.txt', 'data to append synchronous' + user.username + '!'); //'Hello ${user.username}!' use template string
  console.log('The "data to append" was appended to file!');
} catch (err) {
  console.log(err);
}
