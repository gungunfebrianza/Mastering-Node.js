console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var user = os.userInfo();

try {
  fs.appendFileSync('message.txt', 'Hello' + user.username + ' You are ' + notes.age + '!'); //'Hello ${user.username}!' use template string
  console.log('The "data to append" was appended to file!');
} catch (err) {
  console.log(err);
}

var res = notes.addNote();
console.log(res);
