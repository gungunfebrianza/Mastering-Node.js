const events = require('events');

let emitter = new events.EventEmitter();

emitter.on('newEvent', (message)=>{
  console.log(`message: ${message}`);
});

emitter.emit('newEvent', 'Hello guys this is my event');
emitter.emit('newEvent', "Hello Maudy!")

// var EventEmitter = require("events").EventEmitter;
//
// var door = new EventEmitter();
//
// door.on("doorbell", function(seconds){
// 	console.log("Doorbell rang for " + seconds + " seconds.");
// 	person.openDoor();
// });
//
// /* In another file, for example... */
//
// function ring(seconds) {
// 	door.emit("doorbell", seconds);
// }
//
// ring(3);
