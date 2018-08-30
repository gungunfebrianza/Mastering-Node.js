const http = require('http');
const fs = require('fs');

http.createServer((client_request, server_response)=>{
  let body = '';
  if (client_request.method === 'GET') {
    server_response.writeHead(200, {'Content-Type':'text/html'});
    fs.readFile('./form.html','UTF-8', (err, data)=>{
      if (err) throw err;
      server_response.write(data);
      server_response.end();
    });
  }
  else if (client_request.method === 'POST') {
    client_request.on('data', (data)=>{
      body += data;
    });
    client_request.on('end', ()=>{
      server_response.writeHead(200, {'Content-Type':'text/html'});
      server_response.write(body, ()=>{
        server_response.end();
      });
    });
  }else {
      server_response.writeHead(404, {'Content-Type': 'text/plain'});
      server_response.end('404 ERROR could not find that page')
  }
}).listen(999);
console.log('server listening!');
