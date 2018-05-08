# triangle-normal [![experimental](http://hughsk.github.io/stability-badges/dist/experimental.svg)](http://github.com/hughsk/stability-badges) #

Takes a list of vertices in a triangle, and returns the normal vector for that
triangle. Doesn't handle degenerate triangles.

## Installation ##

[![triangle-normal](https://nodei.co/npm/triangle-normal.png?mini=true)](https://nodei.co/npm/triangle-normal)

## Usage ##

### `require('triangle-normal')(vertices..., [output])` ###

The first 9 arguments are for the points on your triangle, with an optional
`output` array to set the resulting parameters. If an `ouput` is not supplied,
a new array will be created, and either way this array will be returned as the
result of the function, e.g.:

``` javascript
var normal = require('triangle-normal')
var output = [0, 0, 0]

var vectors = [
    { x: 0, y: 0, z: 0 }
  , { x: 1, y: 0, z: 0 }
  , { x: 0, y: 1, z: 0 }
]

normal(
  vectors[0].x, vectors[0].y, vectors[0].z,
  vectors[1].x, vectors[1].y, vectors[1].z,
  vectors[2].x, vectors[2].y, vectors[2].z,
  output
)
```
