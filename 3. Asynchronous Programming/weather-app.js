const yargs = require('yargs');
const request = require('request');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }
}).help().alias('help', 'h').argv;
// console.log(argv);
var encodedAddress = encodeURIComponent(argv.address);
// console.log(encodedAddress); decodeURIComponent('Andrew%20Mead')

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(results.address);
    weather.getWeather(results.latitude, results.longitude,
    (errorMessage, weatherResults) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        console.log(JSON.stringify(weatherResults, undefined, 2));
        console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
      }
    });
  }
});
