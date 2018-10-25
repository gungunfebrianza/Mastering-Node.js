var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/test', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

var clients = 0;

// 1. Detect Socket
io.on('connection', function(clientsSocket) {
  console.log('a user connected');

  // 2. Initialize Default Username
  clientsSocket.username = 'Anonymous';

  // 3. Count Connected ClientsSocket
  clients++;
  console.log('Total Clients ' + clients);

  // 4. Send Total Online User
  clientsSocket.broadcast.emit('broadcast', {
    description: clients + ' clients connected! broadcast!'
  });

  // 5. Send Server Time
  setInterval(() => io.emit('time', new Date().toTimeString()), 1000);

  clientsSocket.on('change_username', data => {
    clientsSocket.username = data.username;
    console.log(data.username);
  });

  clientsSocket.on('chat', function(data) {
    console.log('message: ' + data.message);
    io.sockets.emit('chat', {
      message: data.message,
      username: clientsSocket.username
    });
  });

  clientsSocket.on('typing', data => {
    clientsSocket.broadcast.emit('typing', {
      username: clientsSocket.username
    });
  });

  clientsSocket.on('disconnect', function() {
    console.log('user disconnected');
    clients--;
    console.log('Total Clients ' + clients);
    clientsSocket.broadcast.emit('broadcast', {
      description: clients + ' clients connected! broadcast!'
    });
  });
});

var namespace = io.of('/namespace');
namespace.on('connection', function(socket) {
  console.log('someone connected');
  namespace.emit('hi', 'Hello everyone!');
});

http.listen(9999, function() {
  console.log('listening on *:9999');
});

/*  ======= CHEATSHEET
    Sending to all connected clients
    io.emit('chat message', msg);
    Broadcasting  
    clientsSocket.broadcast.emit
    On the other side, we listen to typing and we broadcast a message.Broadcasting means sending a message to everyone else except for the socket that starts it. 
*/
