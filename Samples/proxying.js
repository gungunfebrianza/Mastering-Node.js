const http = require('http');
const server = new http.Server();

server.on("request", (request, socket) => {
  console.log(request.url);
  http.request({
    host: 'www.bisnis.com',
    method: 'GET',
    path: "/",
    port: 80
  }, response => response.pipe(socket)).end();
});

server.listen(8080, () => console.log('Proxy server listening on localhost:8080'));
