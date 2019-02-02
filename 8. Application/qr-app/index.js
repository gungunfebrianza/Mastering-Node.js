var speakeasy = require('speakeasy');
var QRCode = require('qrcode');

var secret = speakeasy.generateSecret({ length: 20 });
console.log(secret.base32); // Save this value to your DB for the user

QRCode.toFile(
  './test.jpeg',
  'Gun Gun Febrianza',
  {
    type: 'image/jpeg',
    errorCorrectionLevel: 'H'
    //   color: {
    //     dark: '#00F', // Blue dots
    //     light: '#0000' // Transparent background
    //   }
  },
  function(err, url) {
    if (err) throw err;
    console.log('done');
  }
);
