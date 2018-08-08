const https = require('https');
const http = require('http');
const fs = require('fs');

const url = 'https://jsonplaceholder.typicode.com/posts';

http.createServer((request, server_response)=>{

  if (request.method === 'GET' && request.url === '/posts') {
    https.get(url, (http_response)=>{
      http_response.on('data', data=>{
        http_response.setEncoding('utf8');
        server_response.write(data);
      });

      http_response.on('end', ()=>{
        server_response.end();
        console.log('its over');
      });

    });
  } else {
    server_response.writeHead(404,{'Content-Type':'text/plain'});
    server_response.end('404 ERROR');
  }
}).listen(666);
console.log('Server is listening!');
