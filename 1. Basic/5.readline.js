/* The readline module
provides an interface for reading data
from a Readable stream (such as process.stdin)
one line at a time. */
const readline = require('readline');
const util = require('util')

const rl = readline.createInterface({input: process.stdin, output: process.stdout});

rl.question('what is your name? ', (answer) => {
  rl.setPrompt(`your name is ${answer} `);
  rl.prompt();
  //console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.on('line', (age) => {
    if (age<18) {
      util.log(`${answer} your age is too young`);
      rl.close();
    }else {
      util.log(`${answer.trim()} your age is too young`);
      rl.close();
    }
  });

  rl.close();
});
