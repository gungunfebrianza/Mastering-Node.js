/*https://nodejs.org/api/https.html
HTTPS is the HTTP protocol over TLS/SSL.
In Node.js this is implemented as a separate module.
*/
const https = require('https');
const fs = require('fs');

const url = 'https://jsonplaceholder.typicode.com/posts';

https.get(url, res=>{
  res.setEncoding('UTF-8');
  let body = '';

  res.on('data', data=>{
    body += data;
  });

  res.on('end', ()=>{
    // body = JSON.parse(body);
    // console.log(`${body[0].title}`);

    // fs.writeFile('data.json', body, 'UTF-8', (err)=>{
    //   if (err) return err;
    //   console.log('Data Success Pulled!');
    // });
  });
})
