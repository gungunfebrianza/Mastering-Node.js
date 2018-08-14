const fs = require('fs');

fs.rename('message.txt', 'newFile.txt', (err) => {
  if (err) throw err;
  console.log('Rename complete!');
});

fs.stat('message.txt', (err, stats) => {
  if (err) throw err;
  console.log(`stats: ${JSON.stringify(stats)}`);
});
