const fs = require('fs');

fs.readFile('message.txt', 'UTF-8', (err, content)=>{
  console.log(content);
})
