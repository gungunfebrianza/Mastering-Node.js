var test = require('tape');
var stl = require('../stl');
var assert = require('assert');
var fs = require('fs');

function compareAscii(a, b) {
  var regex = /([0-9]*[\.0-9]*E[\-\+]+[0-9]+)/gi;

  var am = a.match(regex);
  var bm = b.match(regex);

  assert.equal(am.length, bm.length);
  for (var i=0; i<am.length; i++) {
    assert.ok(parseFloat(am[i]) === parseFloat(bm[i]));
  }
}

var binarySTL = fs.readFileSync(__dirname + '/binary/ship.stl');
var basicAsciiSTL = fs.readFileSync(__dirname + '/ascii/tri.stl').toString();
var asciiSTL = fs.readFileSync(__dirname + '/ascii/teapot.stl').toString();
var sharkSTL = fs.readFileSync(__dirname + '/binary/shark.stl');
var cubeSTL = fs.readFileSync(__dirname + '/binary/cube-20mm-with-hole.stl');


test('ascii in and out', function(t) {
  var array = stl.toObject(asciiSTL);
  compareAscii(stl.fromObject(array), asciiSTL);
  t.end();
});

test('binary in and out', function(t) {
  var binaryArray = stl.toObject(binarySTL);
  var binary = stl.fromObject(binaryArray, true);

  t.ok(binarySTL.length === binary.length);
  t.deepEqual(binary.slice(80), binarySTL.slice(80));
  t.end();
});

test('binary cube with solid in name', function(t) {

  var cubeResult = { description : null, facets: [] }
  fs.createReadStream(__dirname + '/binary/cube-20mm-with-hole.stl')
    .pipe(stl.createParseStream())
    .on('data', function(obj) {
      if (obj.description) {
        cubeResult.description = obj.description;
      } else {
        cubeResult.facets.push(obj);
      }

    }).on('end', function() {
      t.equal(cubeResult.description.trim(), 'solid cube-20-5mm-wall    facet');
      t.equal(cubeResult.facets.length, 32);

      var bufferToObjectToStringToObject =  stl.toObject(
        stl.fromObject(
          stl.toObject(cubeSTL), false
        )
      );

      var cubeJSON = JSON.stringify(cubeResult);
      t.equal(cubeJSON, JSON.stringify(stl.toObject(cubeSTL)));
      t.equal(cubeJSON, JSON.stringify(bufferToObjectToStringToObject));
      t.end();
    });
});

test('ship.stl', function(t) {

  var binarySTL = fs.readFileSync(__dirname + '/binary/ship.stl');
  var binaryArray = stl.toObject(binarySTL);

  var binaryResult = { facets : [] };
  fs.createReadStream(__dirname + '/binary/ship.stl')
    .pipe(stl.createParseStream())
    .on('data', function(obj) {
      if (obj.description) {
        binaryResult.description = obj.description;
      } else {
        binaryResult.facets.push(obj);
      }

    }).on('end', function() {
      assert.deepEqual(binaryResult.verts, binaryArray.verts);
      t.end();
    });
});

test('tri.stl', function(t) {
  var basicarray = stl.toObject(basicAsciiSTL);

  var asciiResult = { description: null, facets : [] };
  fs.createReadStream(__dirname + '/ascii/tri.stl')
    .pipe(stl.createParseStream())
    .on('data', function(obj) {
      if (obj.description) {
        asciiResult.description = obj.description;
      } else {
        asciiResult.facets.push(obj);
      }

    }).on('end', function() {
      assert.deepEqual(asciiResult, basicarray);
      t.end();
    });
});

test('shark.stl', function(t) {
  var syncSharkResult = stl.toObject(sharkSTL);

  var sharkResult = { description : null, facets: [] }
  fs.createReadStream(__dirname + '/binary/shark.stl')
    .pipe(stl.createParseStream())
    .on('data', function(obj) {
      if (obj.description) {
        sharkResult.description = obj.description;
      } else {
        sharkResult.facets.push(obj);
      }

    }).on('end', function() {
      assert.deepEqual(sharkResult, syncSharkResult);
      t.end();
    });
});

test('effector_base.stl', function(t) {
  fs.createReadStream(__dirname + '/ascii/effector_base.stl')
    .pipe(stl.createParseStream())
    .on('end', function() {
      t.end();
    })
});

test('stl.fromObject without normals (ascii)', function(t) {
  var o = {
    description : "binary normals",
    facets : [
      {
        verts : [
          [1, 1, 0],
          [0, 0, 0],
          [1, 0, 0]
        ]
      }
    ]
  };

  var r = stl.fromObject(o);
  var o2 = stl.toObject(r);

  t.deepEqual(o2.facets[0].normal, [0, 0, 1]);

  t.end();
});

test('stl.fromObject without normals (binary)', function(t) {

  var o = {
    description : "binary normals",
    facets : [
      {
        verts : [
          [1, 1, 0],
          [0, 0, 0],
          [1, 0, 0]
        ]
      }
    ]
  };

  var r = stl.fromObject(o, true);
  var o2 = stl.toObject(r);

  t.deepEqual(o2.facets[0].normal, [0, 0, 1]);

  t.end();
});

test('expose facetNormal', function(t) {

  var normal = stl.facetNormal({
    verts : [
      [1, 1, 0],
      [0, 0, 0],
      [1, 0, 0]
    ]
  });

  t.deepEqual(normal, [0, 0, 1]);
  t.end();
});

test('binary cube.stl (broken trim)', function(t) {
  fs.createReadStream(__dirname + '/binary/cube.stl')
    .pipe(stl.createParseStream()).once('data', function(data) {
      t.equal(data.description, 'cube.stl');
      t.end();
    });
});

