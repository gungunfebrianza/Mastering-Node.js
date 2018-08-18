const express = require('express')
const path = require('path')
const app = express()
const publicDir = path.join(__dirname, './www')

// The main difference between express.static and serve-static is that the second
// one can be used outside of ExpressJS.
app.use('/', express.static(publicDir))
//app.use('/www', express.static(publicDir))

app.listen(9999, () => console.log('Web Server running on port 9999'),)
