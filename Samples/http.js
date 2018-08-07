const http = require('http');

let server = http.createServer((request, response) => {
	response.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	response.write("PONG");
	response.end();
}).listen(8080);

server.on("request", (request, response) => {
	request.setEncoding("utf8");
	request.on("readable", () => console.log(request.read()));
	request.on("end", () => console.log("DONE"));
});
