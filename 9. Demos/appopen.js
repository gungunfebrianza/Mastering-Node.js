const opn = require('opn');

// Opens the image in the default image viewer
opn('i_love_qr.svg').then(() => {
    // image viewer closed
});

// Opens the url in the default browser
opn('osk');

// Specify the app to open in
opn('http://gungunfebrianza.tumblr.com', {app: 'firefox'});

// Specify app arguments
opn('http://gungunfebrianza.tumblr.com', {app: ['google chrome', '--incognito']});
