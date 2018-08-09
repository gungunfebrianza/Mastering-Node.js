const express = require('express');
let app = express();

app.use('/css', express.static(__dirname + '/public'));

app.use((req,res,next)=>{
  console.log('middleware');
  next();
})

app.get('/', (req,res)=>{
  res.send(`<!doctype html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="/css/style.css">
      <title>Document</title>
  </head>
  <body>


      <h1>Hello</h1>


      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Assumenda hic libero maxime necessitatibus, quaerat tempora
          temporibus unde ut vel velit. Maiores molestiae necessitatibus
          odio quia quod sequi, ut vitae voluptate.
      </p>


  </body>
  </html>`)
})


app.listen(9999);
console.log('server listening!');
