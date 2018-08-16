var express = require('express')
var fs = require('fs')
var app = express()

app.get("/", function (req, res, next) {
  fs.readFile("/file-does-not-exist`", function (err, data) {
    if (err) {
      next(err); // Pass errors to Express.
    }
    else {
      res.send(data);
    }
  });
});

app.listen(9999)
