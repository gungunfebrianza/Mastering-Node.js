const express = require('express');
let app = express();

const port = process.env.PORT || 9999;

// // route method
// // ExpressJS route methods have equivalent names to HTTP verbs.
// For instance: app.get() for the GET HTTP verb or
// app.delete() for the DELETE HTTP verb.
app.get('/', function (req, res) {
  res.send('root')
})

app.get('/random.text', function (req, res) {
  res.send('random.text')
})

//This route path will match acd and abcd.
app.get('/ab?cd', function (req, res) {
  res.send('ab?cd')
})

//This route path will match abcd, abbcd, abbbcd, and so on.
app.get('/ab+cd', function (req, res) {
  res.send('ab+cd')
})

//This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.
app.get('/ab*cd', function (req, res) {
  res.send('ab*cd')
})

//This route path will match /abe and /abcde.
app.get('/ab(cd)?e', function (req, res) {
  res.send('ab(cd)?e')
})

//This route path will match anything with an “a” in it.
app.get(/a/, function (req, res) {
  res.send('/a/')
})

//This route path will match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on.
app.get(/.*fly$/, function (req, res) {
  res.send('/.*fly$/')
})

app.listen(port);
console.log('server listening!');
