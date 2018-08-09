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

app.get('/api', (req, res)=>{
  //res.send('<h1>API Page</h1>');
  res.json({name:'wildan'});
});

app.listen(port);
console.log('server listening!');
