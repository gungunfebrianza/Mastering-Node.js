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

client.setex('1', 60, JSON.stringify({ name: 'Gun', Age: '26' }));

client.get('1', (error, result) => {
  if (result) {
    console.log({ 'user data': JSON.parse(result), source: 'redis-cache' });
  } else {
    db.one('SELECT * FROM data WHERE id = $1', userID)
      .then(data => {
        console.log('single data', data);
        //cache it
        client.setex('1', 60, JSON.stringify({ name: 'Gun', Age: '26' }));
        //return result
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }
});
