# STL

Stereo Lithography file format parser

## Install

`npm install stl`

## Use

Convert binary stl to ascii stl

```javascript

var stl = require('stl')
var fs = require('fs');

var facets = stl.toObject(fs.readFileSync('/path/to/binary.stl'));
fs.writeFileSync('/path/to/ascii.stl', stl.fromObject(facets));

```


Convert ascii stl to binary stl

```javascript

var stl = require('stl')
var fs = require('fs');

var facets = stl.toObject(fs.readFileSync('/path/to/ascii.stl').toString());
fs.writeFileSync('/path/to/binary.stl', stl.fromObject(facets, true));

```

## Object Structure

`toObject` and `fromObject` use the following array structure

```javascript
{
  description: "abc 123", // (optional)
  facets: [
    {
      normal: [x, y, z],
      verts: [
        [x, y, z],
        [x, y, z],
        [x, y, z]
      ]
      // attributeByteCount (optional uint16)
    }
    // repeats ...
  ]
}
```

## Streaming

```
fs.createReadStream('./test/ascii/tri.stl')
  .pipe(stl.createParseStream())
  .on('data', function(object) {
    /* first object will be:

      { description: "BOLLEN"}
    */

    /*
       second object is a facet which looks like:

       {
        normal: [ 1, 0.5, 0.25 ],
        verts: [ [ 10, 10, 10 ], [ 4, 4, 4 ], [ 5, 5, 5 ] ]
       }
    */
  })

```

# License

MIT
