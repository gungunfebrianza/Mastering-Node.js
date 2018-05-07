const fs = require('fs');

// data.txt will be created or overwritten by default.
fs.copyFileSync('test.txt', 'data.txt');
console.log('test.txt was copied to data.txt');
