var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

io.on('connection', function(socket) {
  // console.log('user connected')

  socket.on('disconnect', function() {
    // console.log('user disconnected')
  });

  socket.on('chat', function(data) {
    // console.log('message: ' + data)
    io.emit('chat', data);
  });
});
