const fs = require('fs');

fs.rename('A', 'B', (err) => {
  if (err) throw err;
  console.log('renamed complete');
});

fs.stat('B', (err, stats) => {
  if (err) throw err;
  console.log(`stats: ${JSON.stringify(stats)}`);
});
