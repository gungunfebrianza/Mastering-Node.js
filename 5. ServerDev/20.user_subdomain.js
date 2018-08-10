const express = require('express')
const vhost = require('vhost')
const app = express()
const users = express.Router()

/*vhost adds a vhost object to the request object, which contains the complete
hostname (displaying the hostname and port), hostname (without the port), and
matching strings. These give you more control in how to handle virtual
domains.*/

// Define a new router. Then, add a route method to handle GET requests on
// path "/". Use the vhost object to access the array of subdomains:
users.get('/', (request, response, next) => {
  const username = request.vhost[0].split('-').map(name => (name[0].toUpperCase() + name.slice(1))).join(' ')
  response.send(`Hello, ${username}`)
})

//Mount the router:
app.use(vhost('*.localhost', users))

app.listen(9999, () => console.log('Web Server running on port 9999'),)
