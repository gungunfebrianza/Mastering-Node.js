const fs = require('fs');

fs.writeFile('data.html', 'Hello World', 'UTF-8', (err)=>{
  if(err) return err;
  console.log('File Saved!');
})
