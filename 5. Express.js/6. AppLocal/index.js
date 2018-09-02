const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));

app.use((req, res, next) => {
  res.locals.hello = 'hello world'
  next()
})

app.get('/', (req,res,next) => {
  res.render("index", { name: 'Qrista Bodhonk'});
})

app.listen(9999, () =>{
  console.log("server active on port 9999");
})
