const express = require('express')

const app = express()


/*Syntax
res.cookie(name, value [, options])
*/

/*Definition
Sets cookie name to value. The value parameter may be a string or object converted to JSON.
The options parameter is an object that can have the following properties.
*/
app.get('/', (req, res) => {
  res.cookie('name', 'tobi', { domain: '.example.com', path: '/admin', secure: true });
  res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
})


app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)

/*Cookie Options
All res.cookie() does is set the HTTP Set-Cookie header with the options
provided. Any option not specified defaults to the value stated in RFC 6265.

Property : domain
Type : String
Domain name for the cookie. Defaults to the domain name of the app.

Property : encode
Type : Function
A synchronous function used for cookie value encoding. Defaults to encodeURIComponent.

Property : expires
Type : Date
Expiry date of the cookie in GMT. If not specified or set to 0, creates a session cookie.

Property : httpOnly
Boolean
Flags the cookie to be accessible only by the web server.

Property : maxAge
Type : Number
Convenient option for setting the expiry time relative to the current time in milliseconds.

Property : path
Type : String
Path for the cookie. Defaults to “/”.

Property : secure
Type : Boolean
Marks the cookie to be used with HTTPS only.

Property : signed
Type : Boolean
Indicates if the cookie should be signed.

Property : sameSite
Type : Boolean or String
Value of the “SameSite” Set-Cookie attribute. More information at https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site-00#section-4.1.1.
*/
