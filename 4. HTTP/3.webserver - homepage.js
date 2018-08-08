const server = require('http');
const fs = require('fs');

server.createServer((request, response) => {
  console.log(request.method);
  if (request.url === '/') {
    fs.readFile(__dirname + '/global.html', 'UTF-8', (err, data) =>{
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(data);
    })
  } else {
    response.writeHead(404, {'Content-Type': 'text-plain'});
    response.end('404 Error Could not find your pages');
  }
}).listen(666);

console.log('listening ' + __dirname);
