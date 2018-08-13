/*The process object is a global that provides information about, and control
over, the current Node.js process. As a global, it is always available to
Node.js applications without using require().*/

/*The process.argv property returns an array containing the command line
arguments passed when the Node.js process was launched.

The first element will be process.execPath.
See process.argv0 if access to the original value of argv[0] is needed.

 The second element will be the path to the JavaScript file being executed.
 The remaining elements will be any additional command line arguments.*/
console.log(process.argv);
let flag = process.argv.indexOf('--user');

console.log(flag);

// print process.argv
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

/*Try this input
node process.argv test e --user
*/

/*Output
0: C:\Program Files\nodejs\node.exe
1: C:\xampp\htdocs\front-end\Mastering-Node.js\API - Process\process.argv
2: test
3: e
4: --user
*/
