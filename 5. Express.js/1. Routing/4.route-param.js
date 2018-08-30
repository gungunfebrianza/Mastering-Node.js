const express = require('express');
let app = express();

app.get('/', (req, res)=>{
  res.send('home');
});

app.get('/post/:id/category/:category_id', (req,res)=>{
  res.send(`
    <p>Here is ${req.params.id}</p>
    <p>category is ${req.params.category_id}</p>
    `);
});

app.listen(9999);
console.log('server listening!');
