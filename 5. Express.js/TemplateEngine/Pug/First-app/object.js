const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));

app.get('/object', (req,res,next) => {
  let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  res.render('object', { objuser : user });
})

app.listen(9999, () =>{
  console.log("server active on port 9999");
})
