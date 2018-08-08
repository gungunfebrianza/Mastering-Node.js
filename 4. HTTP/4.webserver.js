const https = require('https');
const http = require('http');
const fs = require('fs');

const url = 'https://jsonplaceholder.typicode.com/posts';

http.createServer((request, server_response)=>{
  if (request.method === 'GET' && request.url === '/posts') {
    https.get(url, (http_response)=>{
      http_response.on('data', data=>{
        http_response.setEncoding('utf8');
        console.log(data);
      });

      http_response.on('end', ()=>{
        server_response.end();
        console.log('its over');
      })

    })
  }
}).listen(666);
console.log('Server is listening!');
