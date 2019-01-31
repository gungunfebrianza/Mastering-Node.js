const bufFromArray = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]) 
console.log(bufFromArray.toString()) 

// "buffer" 
const arrayBuffer = new Uint16Array(2) 
arrayBuffer[0] = 5 
arrayBuffer[1] = 7000 

// Shares memory with `arrayBuffer` 
const bufFromArrayBuffer = Buffer.from(arrayBuffer.buffer) 

// Prints: <Buffer 05 00 58 1b> 
console.log(bufFromArrayBuffer)