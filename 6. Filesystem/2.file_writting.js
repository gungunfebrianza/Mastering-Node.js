const fs = require('fs');

fs.writeFile('data.html', 'Hello World', 'UTF-8', (err)=>{
  if(err) return err;
  console.log('File Saved!');
})

fs.appendFile('data.html', ' data to append', 'utf8', (err) => {
  if (err) throw err;
/*  if (err) {
    console.log('Unable to write to file');
  }*/
  console.log('The "data to append" was appended to file!');
});
