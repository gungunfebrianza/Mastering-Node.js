const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options({
    a: {
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;
console.log(argv);
