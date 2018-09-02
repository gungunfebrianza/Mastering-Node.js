const express = require('express')
const app = express()

/*Syntax
req.signedCookies
*/

/*Definition
When using cookie-parser middleware, this property contains signed cookies sent
by the request, unsigned and ready for use. Signed cookies reside in a
different object to show developer intent; otherwise, a malicious attack could
be placed on req.cookie values (which are easy to spoof). Note that signing a
cookie does not make it “hidden” or encrypted; but simply prevents tampering
(because the secret used to sign is private).

If no signed cookies are sent, the property defaults to {}.
*/

app.use('/', function(req, res, next) {
  // Cookie: user=tobi.CP7AWaXDfAKIRfH49dQzKJx7sKzzSoPq7/AcBBRVwlI3
  req.signedCookies.user
  // => "tobi"
  next();
});

app.get('/', (req, res) => {
	res.send('Your Request path Recorded on the server!');
})

app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
