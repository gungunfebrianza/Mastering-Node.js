const fs = require('fs');
const os = require('os');

//The os.userInfo() method returns information about the currently effective user
var user = os.userInfo();
console.log(user);

try {
  fs.appendFileSync('message.txt', 'data to append synchronous' + user.username + '!');
  console.log('The "data to append" was appended to file!');
} catch (err) {
  console.log(err);
}

/*
options <Object>
    encoding <string> Character encoding used to interpret resulting strings.
                      If encoding is set to 'buffer', the username, shell,
                      and homedir values will be Buffer instances. Default: 'utf8'.
Returns: <Object>
*/
