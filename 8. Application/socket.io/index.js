var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http, {
  serveClient: true,
  // below are engine.IO options
  pingInterval: 5000,
  pingTimeout: 5000,
  cookie: false
});

app.get('/test', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socketCustomerService) {
  console.log('a user connected');
  socketCustomerService.on('chat message', function(msg) {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });

  socketCustomerService.on('disconnect', function() {
    console.log('user disconnected');
  });
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});
