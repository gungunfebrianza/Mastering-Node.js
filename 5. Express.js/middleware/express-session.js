/* Authentication is the process of verifying if the user is in fact who he/she is declared to be.
Authorization is the process of determining if the user has the privileges to access the resources he/she requested.
This node.js code snippet demonstrated a very simple example of authentication
and authorization process using session in express.js.

There is a login endpoint, a logout endpoint and get post page.
To see the post page, you have to login first, and your identity will be
verified and saved in session. When you hit the logout endpoint,
it will revoke your access by removing your identity from the session. */
var express = require('express'),
  app = express(),
  session = require('express-session');

app.use(session({secret: '2C44-4D44-WppQ38S', resave: true, saveUninitialized: true}));

/*Authentication and authorization middleware function.
Grant the next step if the user is amy and if she has the admin access.
The values to check against is hardcoded for demonstration purpose.
A real web app will get the user and user access level from session,
and then check against the user and user access lever from a database
on the server.*/
var auth = function(req, res, next) {
  if (req.session && req.session.user === "amy" && req.session.admin)
    return next();
  else
    return res.sendStatus(401);
  }
;

/*localhost:9999/login?username=amy&password=amyspassword,
the login url to check log the user in by saving the user and user access level
in a session. The session will be different for each user, and also be unique
for the same user using different browsers. For example, if the same user logged
in using Chrome, and the open up Firefox, the user will have to login again in
FireFox in order to gain protected resources. For demonstration purpose,
this is a get request and passing in the info through query parameters.
A real web app will usually be using a post request and passing in the data in
the post form. Again the user and passwords are hardcoded here for
demonstration purpose. A real web app will check the incoming user and password
against the user and password stored in a database on there server.
*/
app.get('/login', function(req, res) {
  if (!req.query.username || !req.query.password) {
    res.send('login failed');
  } else if (req.query.username === "amy" || req.query.password === "amyspassword") {
    req.session.user = "amy";
    req.session.admin = true;
    res.send("login success!");
  }
});

/*localhost:9999/logout, logout by destroy the session. Once the session is
destroyed, the user will have to hit the login url again in order to gain
protected resources.
*/
app.get('/logout', function(req, res) {
  req.session.destroy();
  res.send("logout success!");
});

/*localhost:9999/content, get the protected contents.
The auth function above is passed in the second parameters as a middleware
before it proceed to serve the content to the user. If the auth function
determined the user is not valid, it will not proceed to the thrid function to
serve the content.
*/
app.get('/content', auth, function(req, res) {
  res.send("You can only see this after you've logged in.");
});

app.listen(9999, () => console.log('Web Server running on port 9999'),)


/*To run the above code from command line
npm install express
npm install express-session
node session_auth.js &
*/

/*Visit these urls in a browser
localhost:9999/content
localhost:9999/login?username=amy&password=amyspassword
localhost:9999/content
localhost:9999/logout
localhost:9999/content
*/
