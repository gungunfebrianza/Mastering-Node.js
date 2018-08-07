const http = require('http');
const qs = require('querystring');

http.createServer((request, response) => {
	let body = "";
	if(request.url === "/") {
		response.writeHead(200, {
			"Content-Type": "text/html"
		});
		return response.end(
			'<form action="/submit" method="post">\
			<input type="text" name="sometext">\
			<input type="submit" value="Send some text">\
			</form>'
		);
	}

	if(request.url === "/submit") {
		request.on('readable', () => {
			let data = request.read();
			data && (body += data);
		});
		request.on('end', () => {
			let fields = qs.parse(body);
			response.end(`Thanks for sending: ${fields.sometext}`);
		});
	}
}).listen(8080);
