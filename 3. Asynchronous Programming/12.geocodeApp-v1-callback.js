const request = require('request');
const yargs = require('yargs');

const geocode = require('./1.geocode/geocode.v1-callback');

const argv = yargs.options({
  a: {
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }
}).help().alias('help', 'h').argv;
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(results, undefined, 2));
  }
});
