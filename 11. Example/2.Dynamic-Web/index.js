const express = require('express');
const data = require('./data/artists.json');
const app = express();
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));


app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.redirect('/charles')
})

app.get('/charles', (req, res) => {
  res.render('index', data.artist[0])
})

app.get('/marilyn', (req, res) => {
  res.render('index', data.artist[1])
})

app.get('/jean', (req, res) => {
  res.render('index', data.artist[2])
})

const port = process.env.PORT || 9999;
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
