var redis = require('redis');
var client = redis.createClient(); // this creates a new client

client.on('connect', function() {
  console.log('Redis client connected');
});

client.on('error', function(err) {
  console.log('Something went wrong ' + err);
});

client.set('my test key', 'my test value', redis.print);
client.get('my test key', function(error, result) {
  if (error) {
    console.log(error);
    throw error;
  }
  console.log('GET result ->' + result);
});
