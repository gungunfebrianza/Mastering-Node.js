const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
The readline module provides an interface for reading data from a Readable stream (
such as process.stdin) one line at a time.
*/
rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.on('line', (input) => {
    console.log(`Received: ${input}`);
  });
  rl.close();
});
