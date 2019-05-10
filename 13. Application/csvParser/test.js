const csv = require('csv-parser');
const fs = require('fs');

fs.createReadStream('BitcoinAddress.csv')
  .pipe(csv())
  .on('data', row => {
    console.log(row.Address);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });
