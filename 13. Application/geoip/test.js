var geoip = require('geoip-lite');

var ip = '202.138.252.3';
var geo = geoip.lookup(ip);

console.log(geo);
