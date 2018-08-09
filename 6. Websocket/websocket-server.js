const WebSocketServer = require('ws').Server;
const WSS = new WebSocketServer({port: 3232});

WSS.on('connection', (ws) => {
  ws.on('message', (message) => {
    if (message === 'close') {
      ws.close();
    } else {
      WSS.clients.forEach((client) => {
        client.send(message);
      });
    }
    console.log(message);
  });
  console.log('We are connected');
});
