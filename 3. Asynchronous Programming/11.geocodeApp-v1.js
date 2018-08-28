const request = require('request');
const yargs = require('yargs');

const geocode = require('./1.geocode/geocode.v1');

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
geocode.geocodeAddress(argv.address);
