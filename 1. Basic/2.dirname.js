const path = require('path');

//this is global object from Node.js API
//The directory name of the current module.
console.log(__dirname);

//this is equivalent to :
console.log(path.dirname(__filename));

//Output :
//C:\xampp\htdocs\front-end\Mastering-Node.js\1. Basic
