const fs = require('fs');

//Asynchronously writes data to a file, replacing the file if it already exists. data can be a string or a buffer.
fs.writeFile('message.txt', 'Hello Node.js', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
