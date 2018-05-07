const fs = require('fs');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
The readline module provides an interface for reading data from a Readable stream (
such as process.stdin) one line at a time.
*/
rl.question('Copy data.txt to? ', (answer) => {
  console.log('The Destination File is : ' + answer);

  fs.access(answer, (err) => {
    if (!err) {
      console.error(answer + ' already exists');
      return;
    }
    else {
      fs.copyFileSync('data.txt', answer);
      console.log('data.txt was copied to ' + answer);
    }
  });
  rl.close();
});
