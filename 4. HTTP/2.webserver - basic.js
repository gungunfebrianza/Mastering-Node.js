//https://nodejs.org/api/http.html
const http = require('http');

const server = http.createServer((req,response)=>{
  // Sends a response header to the request.
  // The status code is a 3-digit HTTP status code, like 404.
  response.writeHead('200', {
  'Content-Type': 'text/plain' });

  // This sends a chunk of the response body.
  // This method may be called multiple times to provide successive parts of the body.
  response.write('<h1>Welcome</h1>');
  // This method signals to the server that all of the response headers and
  // body have been sent; that server should consider this message complete.
  // The method, response.end(), MUST be called on each response.
  response.end('Happy Learning Guys! Gun');
});

//Starts the HTTP server listening for connections.
server.listen(9999);
console.log('our server is running!');

//https://www.lifewire.com/netstat-command-2618098
