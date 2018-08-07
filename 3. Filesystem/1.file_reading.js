const fs = require('fs');

fs.readdir('./', (err, content) => {
  if (err)
    return err;
  console.log(content);
})

fs.readFile('global.html', (err, content)=>{
  console.log(content);
})

fs.readFile('global.html', 'UTF-8', (err, content)=>{
  console.log(content);
})
