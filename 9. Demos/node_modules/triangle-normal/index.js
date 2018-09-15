module.exports = triangleNormal

function triangleNormal(x0, y0, z0, x1, y1, z1, x2, y2, z2, output) {
  if (!output) output = []

  var p1x = x1 - x0
  var p1y = y1 - y0
  var p1z = z1 - z0

  var p2x = x2 - x0
  var p2y = y2 - y0
  var p2z = z2 - z0

  var p3x = p1y * p2z - p1z * p2y
  var p3y = p1z * p2x - p1x * p2z
  var p3z = p1x * p2y - p1y * p2x

  var mag = Math.sqrt(p3x * p3x + p3y * p3y + p3z * p3z)
  if (mag === 0) {
    output[0] = 0
    output[1] = 0
    output[2] = 0
  } else {
    output[0] = p3x / mag
    output[1] = p3y / mag
    output[2] = p3z / mag
  }

  return output
}
