var app = require('express')();
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
app.get('/test', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

var clients = 0;

// 1. Detect Socket
io.on('connection', function(clientsSocket) {
  console.log('A User Connected! ' + clientsSocket.id);

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

  // clientsSocket.on('register', handleRegister);

  // clientsSocket.on('join', handleJoin);

  // clientsSocket.on('leave', handleLeave);

  // clientsSocket.on('message', handleMessage);

  // clientsSocket.on('chatrooms', handleGetChatrooms);

  // clientsSocket.on('availableUsers', handleGetAvailableUsers);

  // Change Username
  clientsSocket.on('change_username', data => {
    clientsSocket.username = data.username;
    console.log(data.username);
  });

  // Chat Event
  clientsSocket.on('chat', function(data) {
    console.log('message: ' + data.message);
    const objmsg = {
      name: data.clientsSocket.username,
      message: data.message
    };
    const msg = new Message(objmsg);
    msg.save(err => {
      if (err) sendStatus(500);
    });
    io.sockets.emit('chat', {
      message: data.message,
      username: clientsSocket.username
    });
  });

  // Event Typing
  clientsSocket.on('typing', data => {
    clientsSocket.broadcast.emit('typing', {
      username: clientsSocket.username
    });
  });

  // Detect Disconnect
  clientsSocket.on('disconnect', function() {
    console.log('user disconnected');
    clients--;
    console.log('Total Clients ' + clients);
    clientsSocket.broadcast.emit('broadcast', {
      description: clients + ' clients connected! broadcast!'
    });
  });

  // Detect Error
  clientsSocket.on('error', function(err) {
    console.log('received error from client:', clientsSocket.id);
    console.log(err);
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
