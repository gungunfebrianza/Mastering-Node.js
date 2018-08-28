const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=bandung%20kota',
  json: true
}, (error, response, body) => {
  console.log(`Address: ${body.results[0].formatted_address}`);
  //console.log(JSON.stringify(body, undefined, 2));
});
