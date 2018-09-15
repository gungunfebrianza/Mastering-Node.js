const http = require('http');
const url = require('url');

http.createServer((request, response) => {

	let cookies = request.headers.cookie;

	if(!cookies) {
		let cookieName = "session";
		let cookieValue = "123456";
		let numberOfDays = 4;
		let expiryDate = new Date();

		expiryDate.setDate(expiryDate.getDate() + numberOfDays);

		let cookieText = `${cookieName}=${cookieValue};expires=${expiryDate.toUTCString()};`;

		response.setHeader('Set-Cookie', cookieText);
		response.writeHead(302, {'Location': '/'});

		return response.end();
	}

	cookies.split(';').forEach(cookie => {
		let m = cookie.match(/(.*?)=(.*)$/);
		cookies[m[1].trim()] = (m[2] || '').trim();
	});

	response.end(`Cookie set: ${cookies.toString()}`);

}).listen(8080);

/*
The HTTP protocol is stateless. Any given request has no information on
previous requests. For a server, this meant that determining if two requests
originated from the same browser was not possible.

Cookies were invented to solve this problem. Cookies are primarily used to
share state between clients (usually a browser) and a server, existing as
small text files stored in browsers.

Cookies are insecure. Cookie information flows between a server and a client
in plain text. There is any number of tamper points in between. Browsers allow
easy access to them, for example. This is a good idea, as nobody wants
information on their browser or local machine to be hidden from them,
beyond their control.

Nevertheless, cookies are also used rather extensively to maintain state
information, or pointers to state information, particularly in the case of
user sessions or other authentication scenarios.
*/
