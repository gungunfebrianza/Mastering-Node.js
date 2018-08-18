const express = require('express');
let app = express();

const port = process.env.PORT || 9999;

// // route method
// // ExpressJS route methods have equivalent names to HTTP verbs.
// For instance: app.get() for the GET HTTP verb or
// app.delete() for the DELETE HTTP verb.
app.get('/', (req, res)=>{
  res.send('<h1>Hello World!</h1>');
});

app.post('/', function (req, res) {
  res.send('Got a POST request')
})

//example - Respond to a PUT request to the /user route:
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})

//example - Respond to a DELETE request to the /user route:
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})

app.get('/api', (req, res)=>{
  res.send({
    name: 'Wildan',
    likes: [
      'Toad',
      'Thanos'
    ]
  });
});

app.listen(port);
console.log('server listening!');
