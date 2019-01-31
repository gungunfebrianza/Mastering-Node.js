var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const PORT = process.env.PORT || 9000;

app.get('/dokter-umum', function(req, res) {
  res.sendFile(__dirname + '/test.html');
});

io.of('/dokter-umum').on('connect', function(socketCustomerService) {
  console.log(`Socket DU ${socketCustomerService.id} connected.`);
  console.log(`is connect? ${socketCustomerService.connected}`);

  socketCustomerService.on('disconnect', () => {
    console.log(`Socket DU ${socketCustomerService.id} disconnected.`);
    console.log(`is disconnect? ${socketCustomerService.disconnected}`);
  });

  socketCustomerService.on('trigger event', function(data) {
    console.log(`Socket DU - Trigget Activated ${data.command}`);
  });
});

http.listen(PORT, function() {
  console.log(`listening on *: ${PORT}`);
});
