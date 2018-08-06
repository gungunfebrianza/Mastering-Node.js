const fs = require('fs');

fs.exists('example.file', (exists) => {
  console.log(exists ? '\nit\'s there' : 'no passwd!');
});
