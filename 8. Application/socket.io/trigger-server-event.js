var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/test', function(req, res) {
  res.sendFile(__dirname + '/trigger-server-event.html');
});

io.on('connection', function(socketCustomerService) {
  console.log('a user connected');

  socketCustomerService.on('private message', function(msg) {
    console.log('privates message: ' + msg);
    // sending to all connected clients
    io.emit('chat message', msg);
  });

  socketCustomerService.on('trigger event', function(data) {
    console.log(data);
  });

  socketCustomerService.on('disconnect', function() {
    console.log('user disconnected');
  });
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});
