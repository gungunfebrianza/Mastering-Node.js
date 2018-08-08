const express = require('express');
let app = express();

const port = process.env.PORT || 9999;

app.get('/', (req, res)=>{
  res.send('<h1>Hello World!</h1>');
});

app.get('/api', (req, res)=>{
  //res.send('<h1>API Page</h1>');
  res.json({name:'wildan'});
});

app.listen(port);
console.log('server listening!');
