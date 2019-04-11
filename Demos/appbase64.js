var base64 = require('base64-min');

var A = base64.encode('base64-min npm module'); // result = YmFzZTY0LW1pbiBucG0gbW9kdWxl
base64.encode('base64-min npm module', 'MIME'); // result = YmFzZTY0LW1pbiBucG0gbW9kdWxl
                                                 // encoded string in base64, using MIME constraints
console.log(A);
base64.decode('YmFzZTY0LW1pbiBucG0gbW9kdWxl'); // result = base64-min npm module

var A = base64.encodeFile('20mm_cube.stl');
console.log(A);
base64.decodeToFile(A, '20mm_cubes.stl') ;

base64.encodeWithKey('base64-min npm module', 'gungunfebrianza'); // result = FAgQEVlGSwgbABlfBgRDGQAWEwkX
                                                               //(in plain text is YFK_C	)

                                                               //Decoding with wrong key
base64.decodeWithKey('FAgQEVlGSwgbABlfBgRDGQAWEwkX', 'npm module'); // result = zx}14)/}wew/k$.vdcly
//Decoding with correct key
base64.decodeWithKey('FAgQEVlGSwgbABlfBgRDGQAWEwkX', 'gungunfebrianza'); // result = base64-min npm module
