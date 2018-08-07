const http = require('http');
const net = require('net');
const url = require('url');
const proxy = new http.Server();

proxy.on('connect', (request, clientSocket, head) => {
	let reqData = url.parse(`http://${request.url}`);
  	let remoteSocket = net.connect(reqData.port, reqData.hostname, () => {
		clientSocket.write('HTTP/1.1 200 \r\n\r\n');
    	remoteSocket.write(head);
    	remoteSocket.pipe(clientSocket);
    	clientSocket.pipe(remoteSocket);
  	});
}).listen(8080);

let request = http.request({
	port: 8080,
	hostname: 'localhost',
	method: 'CONNECT',
	path: 'www.bisnis.com:80'
});
request.end();

request.on('connect', (res, socket, head) => {
	socket.setEncoding("utf8");
	socket.write('GET / HTTP/1.1\r\nHost: www.bisnis.com:80\r\nConnection: close\r\n\r\n');
	socket.on('readable', () => {
		console.log(socket.read());
	});
	socket.on('end', () => {
		proxy.close();
	});
});
