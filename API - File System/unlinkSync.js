//All file system operations have synchronous and asynchronous forms.


const fs = require('fs');

try {
  fs.unlinkSync('test.txt');
  console.log('successfully deleted test.txt');
} catch (err) {
  // handle the error
  console.log(err.path);
}
