const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));

app.get('/array', (req,res,next) => {
  var array = [1,2,3,4,5];
  res.render('array', { array : array });
})

app.listen(9999, () =>{
  console.log("server active on port 9999");
})
