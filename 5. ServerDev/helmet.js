const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const uuid = require('uuid/v1')
const app = express()

/*Generate a random ID which will be used for nonce which is an HTML attribute
used for whitelist which scripts or styles are allowed to be executed inline
in the HTML code:*/
const suid = uuid()

/*Use body parser to parse JSON request body for json and application/csp-report
content types. application/csp-report is a content type that contains a JSON
request body of type json which is sent by the browser when one or several CSP
rules are violated:*/
app.use(bodyParser.json({
  type: ['json', 'application/csp-report']
}))

/*Use the Content Security Policy middleware function to define directives.
defaultSrc specifies where resources can be loaded from. The self option
specifies to load resources only from your own domain.
We will use none instead, which means that no resources will be loaded.
However, because we are whitelisting scriptSrc, we will be able to load
Javascript scripts but only the ones that have the nonce that we will specify.
The reportUri is used to tell the browser where to send violation reports of
our Content Security Policy:*/
app.use(helmet.contentSecurityPolicy({
  directives: {
    // By default do not allow unless whitelisted
    defaultSrc: [`'none'`],
    // Only allow scripts with this nonce
    scriptSrc: [`'nonce-${suid}'`],
    reportUri: '/csp-violation'
  }
}))

// Add a route method to handle POST request for path "/csp-violation" to receive
// violation reports from the client:
app.post('/csp-violation', (request, response, next) => {
  const {body} = request
  if (body) {
    console.log('CSP Report Violation:')
    console.dir(body, {
      colors: true,
      depth: 5
    })
  }
  response.status(204).send()
})

// Use the DNS Prefetch Control middleware to disable prefetch of resources:
app.use(helmet.dnsPrefetchControl({allow: false}))
// Frameguard disable loading inside an iframe
app.use(helmet.frameguard({action: 'deny'}))
// Replace Powered-By header by a fake one
app.use(helmet.hidePoweredBy({setTo: 'Django/1.2.1 SVN-13336'}))
// Disable IE untrusted executions on context of this site
app.use(helmet.ieNoOpen())
// Disable guessing Mimetype in browsers
app.use(helmet.noSniff())
// Hide referrer header for third-party but not local
app.use(helmet.referrerPolicy({policy: 'same-origin'}))
// Prevent Reflected XSS attacks
app.use(helmet.xssFilter())

/*Add a route method to handle GET requests on path "/" and serve a sample HTML 
content that will try to load an image from an external source, try to execute
an inline script, and try to load an external script without a nonce specified.
We will add a valid script as well that is allowed to be executed because a
nonce attribute will be specified:*/
app.get('/', (request, response, next) => {
  response.send(`
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Web App</title>
	</head>
	<body>
		<span id="txtlog"></span>
		<img alt="Evil Picture" src="http://evil.com/pic.jpg">
		<script>
			alert('This does not get executed!')
		</script>
		<script src="http://evil.com/evilstuff.js"></script>
		<script nonce="${suid}">
			document
				.getElementById('txtlog')
				.innerText = 'Hello World!'
		</script>
	</body>
	</html>
	`)
})

app.listen(9999, () => console.log('Web Server running on port 9999'),)

/* 1.	Content Security Policy (CSP): This is an effective way to whitelist what
kind of external resources are allowed in your web application, such as
JavaScript, CSS, and images, for instance.

2.	Certificate Transparency: This is a way of providing more transparency for
certificates issued for a specific domain or specific domains
https://sites.google.com/a/chromium.org/dev/Home/chromium-security/certificate-transparency.

3.	DNS Prefetch Control: This tells the browser if it should perform domain
name resolution (DNS) on resources that are not yet loaded, such as links.

4.	Frameguard: This helps to prevent clickjacking by telling the browser not
to allow your web application to be put inside an iframe.

5.	Hide Powered-By: This simply hides the X-Powered-By header indicates not to
display what technology powers the server. ExpressJS sets this header to
"Express" by default.

6.	HTTP Public Key Pinning: This helps to prevent man-in-the-middle-attacks
by pinning your web application's public keys to the Public-Key-Pinsheader.

7.	HTTP Strict Transport Security: This tells the browser to strictly stick to
the HTTPs version of your web application.

8.	IE No Open: This prevents Internet Explorer from executing untrusted
downloads, or HTML files, on the context of your site, thus preventing the
injection of malicious scripts.

9.	No Cache: This tells the browser to disable browser caching.

10.	Don't Sniff Mimetype: This forces the browser to disable mime sniffing or
guessing the content type of a served file.

11.	Referrer Policy: The referrer headers provide the server with data
regarding where the request was originated. It allows developers to disable it,
or set a stricter policy for setting a referrer header.

12.	XSS Filter: This prevents reflected cross-site scripting (XSS) attacks by
setting the X-XSS-Protection header. */
