const http = require('http');

http.createServer((request, response) => {

	if(request.url === '/favicon.ico') {
		response.writeHead(200, {
			'Content-Type': 'image/x-icon'
		});
		return response.end();
	}

  response.writeHead(200, {
  	'Content-Type': 'text/plain'
  });
  response.write('Some requested resource');
  response.end();

}).listen(8080);
