var stl = require('stl')
var fs = require('fs');

//Stereo Lithography file format parser
var facets = stl.toObject(fs.readFileSync('./20mm_cube.stl'));
fs.writeFileSync('./ascii.stl', stl.fromObject(facets));
fs.readFile('./ascii.stl', 'utf8', (err, data) => {
  if (err) throw err;
  var anotherString = data.split('0').join('3')
    console.log(anotherString);
  fs.writeFile('./encryptascii.stl', anotherString, (err) => {
    if (err) throw err;
    console.log('Success!!');
  });
});
