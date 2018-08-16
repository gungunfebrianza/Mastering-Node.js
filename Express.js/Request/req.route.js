const express = require('express')
const app = express()

/*Syntax
req.route
*/

/*Definition
Contains the currently-matched route, a string. For example:
*/

app.get('/user/:id?', function userIdHandler(req, res) {
  console.log(req.route);
  res.send('GET');
});

/*Example Output :
Example output from the previous snippet:
{ path: '/user/:id?',
  stack:
   [ { handle: [Function: userIdHandler],
       name: 'userIdHandler',
       params: undefined,
       path: undefined,
       keys: [],
       regexp: /^\/?$/i,
       method: 'get' } ],
  methods: { get: true } }
  */

app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
