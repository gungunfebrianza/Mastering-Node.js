var express = require('express');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const dbURL =
  'mongodb://root:roottoor2019@ds247410.mlab.com:47410/securechatdb';

mongoose.connect(
  dbURL,
  err => {
    if (err) console.log(err);
    console.log('Connected to Mlab');
  }
);

var Message = mongoose.model('Message', {
  name: String,
  message: String
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.get('/operator', function(req, res) {
  res.sendFile(__dirname + '/operator.html');
});

app.get('/client', function(req, res) {
  res.sendFile(__dirname + '/client.html');
});

// We will keep a record of all connected sockets
var sockets = {};
var ySID = '';

// 1. Detect Socket
io.on('connection', function(clientsSocket) {
  sockets[clientsSocket.id] = clientsSocket;
  clientsSocket.emit('getSocketID', { id: clientsSocket.id });
  ySID = clientsSocket.id;

  // 2. Sending to All Connected Client
  clientsSocket.broadcast.emit('recordUser', { id: clientsSocket.id });

  // 3. Emit the connected users when a new socket connects
  for (var i in sockets) {
    if (sockets[i].id != ySID) {
      clientsSocket.emit('recordUser', { id: sockets[i].id });
    }
  }

  // // 3. Emit ServerTime
  // setInterval(function() {
  //   clientsSocket.emit('serverTime', { time: new Date() });
  // }, 1000);

  console.log('A User Connected! Anonymous ' + clientsSocket.id);

  // 2. Initialize Default Username
  clientsSocket.username = clientsSocket.id;

  clientsSocket.join('test');
  console.log('Anonymous ' + clientsSocket.id + ' Join Room');

  // 7. Chat Event
  clientsSocket.on('operator', function(data) {
    console.log('message: ' + data.message);
    clientsSocket.broadcast.emit('operator', {
      message: data.message,
      username: clientsSocket.username
    });
  });

  // 8. Receive Event
  clientsSocket.on('client', function(data) {
    console.log('message: ' + data.message);
    clientsSocket.broadcast.emit('client', {
      message: data.message,
      username: clientsSocket.username
    });
  });

  // 8. Event Typing
  clientsSocket.on('typing', data => {
    clientsSocket.broadcast.emit('typing', {
      username: clientsSocket.username
    });
  });

  // 9. Detect Disconnect
  clientsSocket.on('disconnect', function() {
    console.log('user disconnected');
    delete sockets[clientsSocket.id];
    io.emit('removeUser', clientsSocket.id);
  });
});

http.listen(9999, function() {
  console.log('listening on *:9999');
});
