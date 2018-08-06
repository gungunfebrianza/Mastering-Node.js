const dgram = require('dgram');
let client = dgram.createSocket("udp4");
let server = dgram.createSocket("udp4");
let message = process.argv[2] || "message";
message = Buffer.from(message);
server
.on('message', msg => {
  process.stdout.write(`Got message: ${msg}\n`);
  process.exit();
})
.bind(41234);
client.send(message, 0, message.length, 41234, "localhost");
