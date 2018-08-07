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
