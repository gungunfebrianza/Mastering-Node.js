var xss = require('xss');
var html = xss('<script>alert("xss");</script>');
//output : &lt;script&gt;alert("xss");&lt;/script&gt;
console.log(html);
