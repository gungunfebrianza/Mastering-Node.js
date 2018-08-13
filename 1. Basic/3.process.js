console.log(process.argv);

/*The process object is a global that provides information about, and control
over, the current Node.js process. As a global, it is always available to
Node.js applications without using require().*/

let flag = process.argv.indexOf('--user');

console.log(flag);

/*Try this input
node process test e --user
*/

/*Output
0: C:\Program Files\nodejs\node.exe
1: C:\xampp\htdocs\front-end\Mastering-Node.js\API - Process\process.argv
2: test
3: e
4: --user
*/
