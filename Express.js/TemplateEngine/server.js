const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper('getCurrentYear', () => {
  //return 'test';
  return new Date().getFullYear()
});

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
     pageTitle: 'Home Page',
     welcomeMessage: 'Welcome to my website',
     currentYear: new Date().getFullYear()
   });
});

app.listen(9999);
