'use strict';
const nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'mail.marketkoin.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'nikolajvestorp@marketkoin.com',
      pass: 'exchangerIndonesia'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Nikolaj Vestorp" <nikolajvestorp@marketkoin.com>',
    to: 'cinthya.mkoin@gmail.com',
    subject: 'Hello ✔',
    text: 'Hello world?',
    html: '<b>Hello world?</b>'
  }; // sender address // list of receivers // Subject line // plain text body // html body

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });
});
