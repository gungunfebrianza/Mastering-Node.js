const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=bandung%20kota',
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(body));
  //console.log(JSON.stringify(body, undefined, 2));
});
