//console.log(process);
console.log(process.versions.node);
console.log(process.versions.v8);
console.log(process.versions.uv);
console.log(process.arch);
console.log(process.platform);
//console.log(process.env);
//console.log(process.env.Path);
console.log(process.env.PROCESSOR_ARCHITECTURE); // 'AMD64'
console.log(process.env.PROCESSOR_IDENTIFIER); // 'Intel64 Family 6 Model 158 Stepping 9, GenuineIntel'
console.log(process.env.OS); // 'Windows_NT'
console.log(process.env.USERNAME); // Gun Gun Febrianza
console.log(process.env.USERPROFILE); // 'C:\\Users\\Gun Gun Febrianza'
console.log(process.env.TEMP); // 'C:\\Users\\GUNGUN~1\\AppData\\Local\\Temp'
console.log(process.pid); // Process ID
console.log(process.title); // Source Execution
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

console.log(process.memoryUsage.rss()); //memory usage
// SVGAnimatedString
// asdsad
