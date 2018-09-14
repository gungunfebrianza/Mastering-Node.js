var express = require('express');
var app = express();

app.get("/", function(httpRequest, httpResponse, next){
    httpResponse.write("Hello");
    next(); //remove this and see what happens
});

app.get("/", function(httpRequest, httpResponse){
    httpResponse.write(" World !!!");
    httpResponse.end();
});

app.listen(9999, () => console.log('Web Server running on port 9999'),)
