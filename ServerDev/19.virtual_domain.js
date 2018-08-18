const express = require('express');
const vhost = require('vhost');
const app = express();

// Define two routers that we will use to build two mini-applications:
const app1 = express.Router();
const app2 = express.Router();

// Add a route method to handle GET requests for path "/" in the first router:
app1.get('/', (request, response, next) => {
  response.send('This is the main application.')
})

app2.get('/', (request, response, next) => {
  response.send('This is a second application.')
})

// app.use(vhost('sub.localhost', function handle (req, res, next) {
//   // for match of "foo.bar.example.com:8080" against "*.*.example.com":
//   console.dir(req.vhost.host) // => 'foo.bar.example.com:8080'
//   console.dir(req.vhost.hostname) // => 'foo.bar.example.com'
//   console.dir(req.vhost.length) // => 2
//   console.dir(req.vhost[0]) // => 'foo'
//   console.dir(req.vhost[1]) // => 'bar'
// }))
// Mount our routers to our ExpressJS application. Serve the first application
// under localhost and the second under second.localhost:
app.use(vhost('localhost', app1))
app.use(vhost('sub.localhost', app2))

app.listen(9999, () => console.log('Web Server running on port 9999'),)
