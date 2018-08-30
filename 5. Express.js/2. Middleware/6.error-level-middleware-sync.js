var express = require('express')
var app = express()

app.get("/", function (req, res) {
  throw new Error("BROKEN"); // Express will catch this on its own.
});

app.listen(9999, function() {
  console.log('Listening on port 9999!');
});
