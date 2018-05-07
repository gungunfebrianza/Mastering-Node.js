const fs = require('fs');

// destination.txt will be created or overwritten by default.
fs.copyFile('changed.txt', 'test.txt', (err) => {
  if (err) throw err;
  console.log('changed.txt was copied to test.txt');
});
