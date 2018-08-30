const express = require('express')
var birds = require('./8.module-bird')

const app = express()

app.use('/birds', birds)

app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
