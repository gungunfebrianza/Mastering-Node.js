const fs = require('fs');

//Asynchronously reads the entire contents of a file. Example:
fs.readFile('test.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
