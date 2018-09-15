var fsm = require('stream-fsm');
var split = require('split');
var normalize = require('triangle-normal');

function trim(a) {
  var nullTerm = a.indexOf('\u0000');
  if (nullTerm > -1) {
    a = a.substr(0, nullTerm);
  }
  return a.trim();
};

function computeNormal(facet) {
  var v = facet.verts;
  return normalize(
    v[0][0], v[0][1], v[0][2],
    v[1][0], v[1][1], v[1][2],
    v[2][0], v[2][1], v[2][2]
  );
}

function exp(a) {
  return a.toExponential();
}

module.exports = {
  facetNormal : computeNormal,


  // `stl` may be binary or ascii
  toObject : function(stl) {

    var ret = {
      description: '',
      facets : []
    };

    var s = this.createParseStream();
    s.on('data', function(d) {
      if (!d.verts) {
        if (!ret.description) {
          ret.description = d.description;
        }
      } else {
        ret.facets.push(d);
      }
    });
    s.write(!Buffer.isBuffer(stl) ? new Buffer(stl) : stl);
    s.end();

    return ret;
  },

  // Convert the incoming object into the stl
  // file format. Passing a truthy value for
  // binary causes a binary stl to be created.
  fromObject: function(obj, binary) {

    if (!binary) {
      var str = [
        'solid ' + obj.description.trim()
      ];

      var fl = obj.facets.length;

      for (var j = 0; j<fl; j++) {
        var facet = obj.facets[j];
        var n = facet.normal || computeNormal(facet);

        str.push('  facet normal ' + [
          exp(n[0]), exp(n[1]), exp(n[2])
        ].join(' '));

        str.push('    outer loop');
        var v = facet.verts;

        var p = '      vertex ';
        str.push(p + [exp(v[0][0]), exp(v[0][1]), exp(v[0][2])].join(' '));
        str.push(p + [exp(v[1][0]), exp(v[1][1]), exp(v[1][2])].join(' '));
        str.push(p + [exp(v[2][0]), exp(v[2][1]), exp(v[2][2])].join(' '));

        str.push('    endloop');
        str.push('  endfacet');
      }

      str.push('endsolid');
      return str.join('\n');
    } else {

      var count = obj.facets.length;

      var ret = new Buffer(84 +  count*12*4 + count*2);
      ret.fill(0, 0, 80);
      ret.write(obj.description || '');
      ret.writeUInt32LE(count, 80);

      var offset = 84;

      var write = function(val) {
        ret.writeFloatLE(val, offset);
        offset+=4;
      };

      var facetCount = obj.facets.length;
      for (var j = 0; j<facetCount; j++) {
        var facet = obj.facets[j];
        var n = facet.normal || computeNormal(facet);

        write(n[0]);
        write(n[1]);
        write(n[2]);

        var l = facet.verts.length;
        for (var i = 0; i<l; i++) {
          var vert = facet.verts[i];
          write(vert[0]);
          write(vert[1]);
          write(vert[2]);
        }

        ret.writeUInt16LE(facet.attributeByteCount || 0, offset);
        offset+=2;
      }
      return ret;
    }
  },

  createParseStream : function() {
    var binaryMode = false;
    var facetCount = 0;
    var facets = [];
    var description = null;
    var currentFacet;
    var asciiValid = false;
    var ended = false;
    var splitter = null;

    var stream = fsm({
      init : fsm.want(84, function readBinaryHeader(data) {
        var dataString = data.toString();

        if (dataString.toLowerCase().indexOf('solid') > -1) {
          facetCount = data.readUInt32LE(80);
          this.change('ascii');
        } else {
          this.change('binary');
        }

        return 0;
      }),

      binary : fsm.want(80, function(data) {
        description = trim(data.toString());
        this.change('count');
      }),

      count : fsm.want(4, function(data) {
        facetCount = data.readUInt32LE(0);
        this.queue({
          description : description,
          facetCount: facetCount
        });

        this.change('normal');
      }),

      normal : fsm.want(12, function(data) {
        currentFacet = {
          normal : [
            data.readFloatLE(0),
            data.readFloatLE(4),
            data.readFloatLE(8)
          ],
          verts : []
        };

        this.change('verts');
      }),

      verts : fsm.want(36, function(data) {

        for (var i=0; i<36; i+=12) {
          currentFacet.verts.push([
            data.readFloatLE(i),
            data.readFloatLE(i+4),
            data.readFloatLE(i+8)
          ]);
        }

        this.change('attributeBytes');
      }),

      attributeBytes : fsm.want(2, function(data) {
        currentFacet.attributeByteCount = data.readUInt16LE(0);
        this.queue(currentFacet);

        currentFacet = null;
        facetCount--;

        if (facetCount <= 0) {
          this.done();
        } else {
          this.change('normal');
        }

      }),

      ascii : function(pending) {
        if (!splitter) {
          splitter = split();

          stream.on('end', function() {
            splitter.end();
          });

          var inFacet = false;
          var facet;
          var that = this;
          splitter.on('data', function(data) {
            if (!data.trim().length) {
              return;
            }

            if (data.indexOf('solid') > -1) {
              stream.queue({
                description : data.trim().split(' ').slice(1).join(' ')
              });

            } else if (data.indexOf('endfacet') > -1) {
              if (!facet.normal.length) {
                // facet.normal = computeNormal(facet);
              }
              inFacet = false;
              stream.queue(facet);
              facet = null
            } else if (data.indexOf('facet') > -1) {
              // This is not fool proof, but far better than
              // "OH LOOK I NAMED MY STL 'solid'" *sigh*

              asciiValid = true;
              var normal = data.replace(/ +/g, ' ').trim().split(' ').slice(2).map(parseFloat);

              facet = {
                normal : normal,
                verts : [],
                attributeByteCount: 0
              };

            } else if (data.indexOf('vertex') > -1) {
              var coords = data.replace(/ +/g, ' ').trim().split(' ').slice(1).map(parseFloat);
              facet.verts.push(coords);
            } else if (!asciiValid) {
              that.mode('binary');
            }
          });

          stream.originalWrite = stream.write;
        }

        splitter.write(pending);
        ended && stream.end();

        // Returning false here buffers the data.
        // If we are not "sure" this is an ascii stl file then
        // we need to continue buffering

        return (asciiValid) ? pending.length : false;
      }

    }, function() {
    });

    stream.originalEnd = stream.end;
    stream.end = function(d) {

      var mode = stream.fsm.mode();
      var cache = stream.fsm.cache();
      if (mode === 'ascii' && !asciiValid && cache) {
        // this is a binary file that has the description: "solid ..."
        // send the complete file through binary mode
        stream.fsm.change('binary');

        // trigger a write since we have the entire file buffered in memory
        stream.fsm();

        stream.originalEnd();
      } else {
        ended = true;
        stream.originalEnd();
      }
    };

    return stream;
  }
};
