var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

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
